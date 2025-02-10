---
title: From C- to JSON-based APIs of the Rust "core" library 📚
author: treefit/simon, WofWca
image: ../assets/blog/2024-11-10-why-jsonrpc-bindings-exist/jsonrpc-vs-cffi-thumbnail.png
# com_id:
render_toc: true
excerpt: This is a technical post about why we created the JSON-RPC bindings additionally to our CFFI bindings. Learn something about the internals of how Delta Chat is implemented.
---

*[CFFI]: C Foreign Function Interface
*[JSON]: JavaScript Object Notation
*[JSON-RPC]: JavaScript Object Notation Remote Procedure Call
*[RPC]: Remote Procedure Call
*[API]: Application Programming Interface
*[UI]: User Interface
*[NAPI]: Node-API
*[BTW]: by the way
*[CBOR]: Concise Binary Object Representation
*[IPC]: Inter-process communication
*[stdio]: standard input/output
*[IDE]: Integrated Development Environment
*[JNI]: Java Native Interface

<style>
abbr[title] {
  text-decoration-color: rgba(128, 128, 128, 0.75);
}
</style>

> Foremost this is a quite technical post. Read our other blog posts if you want something more targeted at end users.

If you have not yet looked at the Delta Chat source code,
you might not know that we have a [Rust core library](https://github.com/deltachat/deltachat-core-rust/) that holds everything together. 
Infrastructure features like encryption, email and network protocols,
chat, contact and message management are implemented in this Rust core library
and [all apps of the current Delta Chat family](https://support.delta.chat/t/list-of-all-known-client-projects/3059) 
as well as chat bots benefit from it: 

- The core library does all the infrastructure and interoperability work and exposes
  high-level methods such as `getAccounts`, `getChatlist`, `getChatContacts` etc. 
  so that it's much less work maintaining apps or bots on all platforms, 
  because they can fully focus on implementing user interactions and interfaces. 

- The core library is thoroughly tested with Rust unit tests 
  and functional integration tests in Python using live-servers,
  and core is what makes all apps fully interoperable with each other. 

- The core library can easily be used to write bots and new apps/clients
  (like DeltaTouch, a client for Ubuntu touch made by Lothar in about a year as a side project, read the [blog post](./2023-07-02-deltatouch)).

## The C Foreign Function Interface (CFFI)

The C Foreign Function Interface, for short CFFI, was the first way to link to core.
It was introduced back when Björn started the Delta Chat project.
He wrote the [core in C](https://github.com/deltachat/deltachat-core) and forked the Telegram Android app for the UI,
which is written in Java, so the core is connected via CFFI[^CFFI] and [JNI](https://github.com/deltachat/deltachat-android/blob/main/jni/dc_wrapper.c) (Java Native Interface).
Later [when we moved the core to Rust](https://delta.chat/en/2019-05-08-xyiv#the-coming-delta-chat-rustocalypse), the CFFI stayed unmodified
which greatly helped to keep the ecosystem stable 
while the infrastructure implementation radically changed. 

[^CFFI]: The header file [deltachat.h](https://github.com/deltachat/deltachat-core-rust/blob/main/deltachat-ffi/deltachat.h)
    is an easy way to get an idea of the API

The advantage of a CFFI is that most programming languages have a built-in way to bind to it.

A peek into how the CFFI methods look like (from [`deltachat.h`](https://github.com/deltachat/deltachat-core-rust/blob/main/deltachat-ffi/deltachat.h)):

```c
#define DC_CONNECTIVITY_NOT_CONNECTED        1000
#define DC_CONNECTIVITY_CONNECTING           2000
#define DC_CONNECTIVITY_WORKING              3000
#define DC_CONNECTIVITY_CONNECTED            4000
int dc_get_connectivity(dc_context_t* context);

typedef struct _dc_chatlist  dc_chatlist_t;
dc_chatlist_t* dc_get_chatlist(
  dc_context_t* context,
  int flags,
  const char* query_str,
  uint32_t query_id
);
size_t    dc_chatlist_get_cnt(
  const dc_chatlist_t* chatlist
);
uint32_t  dc_chatlist_get_chat_id(
  const dc_chatlist_t* chatlist,
  size_t index
);
uint32_t  dc_chatlist_get_msg_id(
  const dc_chatlist_t* chatlist,
  size_t index
);
dc_lot_t* dc_chatlist_get_summary(
  const dc_chatlist_t* chatlist,
  size_t index,
  dc_chat_t* chat
);
void      dc_chatlist_unref(
  dc_chatlist_t* chatlist
);
```

Most methods here provide a pointer to a Rust structure, which can be used to access its properties through specialized methods.
After using such a structure, you need to free it using the `_unref` methods (like `dc_chatlist_unref`), otherwise you will create memory leaks.

## Why implement a new way to talk to core? {#why-implement-a-new-way}

While the CFFI in Android and iOS was working fine,
in the Desktop version which is based on Electron it was more problematic. 
Electron contains a full browser which uses multiple processes,
and you can't easily pass pointers to C-structs over process boundaries,
ignoring that this would a bad idea[^bad-idea].
On Android and iOS, you can just call Delta Chat core from the UI thread,
because this thread is in the same process that the Delta Chat core library was linked to and not a completely different process like in Electron.
So we ended up writing a JSON API on top of the Node.js NAPI bindings on top of the C bindings,
more about that below in the comparison.

[^bad-idea]: Why is passing memory pointers across process boundaries potentially dangerous?
    Two main reasons: you still need to free/cleanup the remote resource after using it
    and common tools will be unable to remind you of the need to do this, because they won't understand what you are doing.
    Another potential issue lies in implementation, if you just do the easy thing and pass raw memory locations as numbers,
    then congratulations, you just added a really big security issue,
    since most exploits begin by accessing memory that they were not supposed to
    (use after free, access to out of bounds memory and so on). Though if you're lucky it just crashes. 

The other problem in Desktop that it is basically single-threaded and while Delta Chat core uses async Rust, 
the CFFI blocks on nearly all calls (note the `block_on`):

```rust
pub unsafe extern "C" fn dc_get_fresh_msg_cnt(
    context: *mut dc_context_t,
    chat_id: u32,
) -> libc::c_int {
    if context.is_null() {
        eprintln!("ignoring careless call to dc_get_fresh_msg_cnt()");
        return 0;
    }
    let ctx = &*context;

    block_on(async move {
        ChatId::new(chat_id)
            .get_fresh_msg_cnt(ctx)
            .await
            .unwrap_or_log_default(ctx, "failed to get fresh msg cnt") as libc::c_int
    })
}
```

In Android and iOS, you can easily start threads or offload blocking tasks to other threads,
but on Desktop, each call blocked the main process **and** led to an unresponsive experience.
Even though the communication between our main and UI process was already using async Electron IPC,
Electron froze the UI process every time the main process was blocked.

Out of these and other frustrations, the idea for a new way to talk to core was born.

## The history of the JSON-RPC interface

First there was only talk, like there were discussions of what wire format to use: CBOR, message-pack or just plain JSON.
Then treefit started writing a deltachat-command-API project which was passing requests and answers over JSON.
There were two goals: make Desktop development easier and to make the experiment of a KaiOS client possible [^kaios].

[^kaios]: KaiOS is an OS for small feature phones with T9 keyboard.
    KaiOS has a similar problem: Only webapps are allowed, so there also is a process boundary. - 
    BTW: treefit still plans to make that experimental client for KaiOS.  

After he got the [first prototype](https://github.com/Simon-Laux/delta-command-api) working,
[Frando](https://github.com/Frando) cleaned up and rewrote its code to make it more
[idiomatic and professional](https://github.com/deltachat/deltachat-jsonrpc/pull/14).
He also factored out the generic JSON-RPC code into a separate library and the procedural macro into a dedicated Rust crate,
so that it can also be used by other projects, which was named [yerpc](https://github.com/deltachat/yerpc).

Then we merged our temporary "Delta Chat JSON-RPC" repo into the core repo
and moved Desktop over to use the new JSON-RPC API,
which was easy thanks to the generated TypeScript bindings that gave good auto-completion.
Though DC Desktop still used the CFFI and Node bindings as transport (see picture below), until May 17, 2024,
when treefit migrated it to use the deltachat-rpc-server binary that uses stdio as a transport[^jsonrpc-pr].

[^jsonrpc-pr]: The PR: [use stdio binary instead of dc node & update electron to 30 & update min node to 20 #3567](https://github.com/deltachat/deltachat-desktop/pull/3567).

> [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) stands for Remote Procedure Call.
> Which is basically a way to call functions/methods remotely.

Desktop architecture versions:

<figure>
<img style="max-width: 100%" src="../assets/blog/2024-11-10-why-jsonrpc-bindings-exist/excalidraw-diagram-light.svg" data-dark-src="../assets/blog/2024-11-10-why-jsonrpc-bindings-exist/excalidraw-diagram-dark.svg" alt="Three Flow charts highlighting the differences between the versions. Before JSON-RPC: UI process, talks with custom JSON API in main process of Delta Chat Desktop over Electron IPC. that JSON API makes use of the JavaScript wrapper and NAPI over JavaScript calls (this happens in deltachat-node). The NAP communicates over CFFI with deltachat-ffi, which then calls Rust functions from the actual core. To add a method, all of these 6 code places need to be touched. After v1.33.0 (2022-10-16), main process until deltachat-ffi don't need to be touched anymore. Now there is instead a new JSON-RPC module between deltachat-ffi and core; only this JSON-RPC API module and the actual core need to be changed to add a new method (reducing the file to edit from 6 to 2). The API wrapper for the UI is now autogenerated from the JSON-RPC module.Since v1.45.0 (2024-05-24), deltachat-node (NAPI and its JS wrapper) got removed, and deltachat-ffi was replaced by deltachat-rpc-server which connects via stdio pipe to the Delta Chat Desktop main process."/>
<figcaption>

Figure 1: When adding a new method we need to touch the code for the components shown in red, gray means that it is not touched, and green means the API code is generated and you can directly call it in the UI code.

</figcaption>
</figure>

## The benefits of JSON-RPC over CFFI

### Less Code to write - Simplify development

<img src="../assets/blog/2024-11-10-why-jsonrpc-bindings-exist/new-method-addtion-comparison.png" alt="Code before and after to implement the function 'block_contact'. The code before is so much that the font size is so small that it becomes hard to read. So from 7 files and over 45 lines added, down to 2 files and 5 lines." />

As you can see in this "meme", adding a method with JSON-RPC is much simpler than adding a method to the CFFI.
This is thanks to 2 factors:

- A new method does not need to be defined in every component. (see also the "Desktop architecture versions" diagram above)
- Code generation: TypeScript client wrapper code and [OpenRPC](https://open-rpc.org/) definition
are auto generated from the Rust code. (including documentation comments)

### Error handling

Error handling in C requires much discipline:
a common pattern in C is to return a status code and write results to a pointer that was provided as an argument to the function.
Take this example from [libimobiledevice](https://libimobiledevice.org/)'s [`lockdown.h`](https://docs.libimobiledevice.org/libimobiledevice/latest/lockdown_8h.html):

```c
enum lockdownd_error_t {
  LOCKDOWN_E_SUCCESS = 0,
  LOCKDOWN_E_INVALID_ARG = -1,
  LOCKDOWN_E_INVALID_CONF = -2,
  LOCKDOWN_E_PLIST_ERROR = -3,
  LOCKDOWN_E_PAIRING_FAILED = -4,
  // ...
}
lockdownd_error_t lockdownd_client_new (idevice_t device, lockdownd_client_t *client, const char *label)
```

In our CFFI we are not as strict, we mostly use 0 or `NULL` pointers to indicate errors:

> [dc*contact_t * dc*get_contact ( dc_context_t * context, uint32_t contact_id )](https://c.delta.chat/classdc__context__t.html#a36b0e1a01730411b15294da5024ad311) > \[...]
> Returns
> The contact object, must be freed using dc_contact_unref() when no longer used. NULL on errors.

> [int dc_may_be_valid_addr ( const char \* addr )](https://c.delta.chat/classdc__context__t.html#a78f5a96398b3763bde51b1a057c84903) > \[...]
> Returns
> 1=address may be a valid e-mail address, 0=address won't be a valid e-mail address

That seems straight forward, but we had a serious bug with an experimental feature because of this.

#### The error handling bug that led to lost accounts

At the time, there was a bug in the iOS app where accounts would go missing seemingly randomly.
Later we found out that **only experimental** encrypted accounts were affected by this issue.

The bug was basically that Delta Chat iOS thought that locked accounts would be unconfigured,
because **both** **unconfigured** and **error** did return the value `0`.
And if an account was unconfigured, the welcome screen was shown,
and this welcome screen has a "back" button that deleted the unconfigured new accounts.
But such an account was not in fact new,
only dc-iOS thought it was, because `dc_is_configured()` returned `0`.

We fixed this bug by adding a call to `dc_is_open()` to the welcome screen[^ios-issue]:

```diff
         let selectedAccount = dcAccounts.getSelected()
-        if !selectedAccount.isConfigured() {
+        if selectedAccount.isOpen() && !selectedAccount.isConfigured() {
             _ = dcAccounts.remove(id: selectedAccount.id)
             if self.dcAccounts.getAll().isEmpty {
                 _ = self.dcAccounts.add()
```

[^ios-issue]: The [issue](https://github.com/deltachat/deltachat-ios/issues/1504#issuecomment-1172894639) and the [solution](https://github.com/deltachat/deltachat-ios/pull/1638), for those that are interested.

<br />

#### Getting more information about errors than just the fact that an error occurred

As written above, you mostly get to know that and error happened but not _what_ error.
So where do we get the error from?

- For [`dc_configure()`](https://c.delta.chat/classdc__context__t.html#adfe52669a5bed893df78a620566dd698),
you can listen for the [`DC_EVENT_CONFIGURE_PROGRESS`](https://c.delta.chat/group__DC__EVENT.html#gae047f9361d57c42d82a794324f5b9fd6) event,
if progress/`data1` is 0 then comment/`data2` contains the error message.
- For the other cases you can use [`dc_get_last_error()`](https://c.delta.chat/classdc__context__t.html#a84c9f09e57c2985fd1c47809eea01969)
to get the last error sting from the last error event - without possible races from waiting for or looping through events.
  - But if you do many operations from different threads there can still be races, at-least in theory.

#### How JSON-RPC solves these issues

There are two kinds of responses to a JSON-RPC requests:
a response or an error. An error contains an error code and an error message string.

```
--> {"jsonrpc": "2.0", "method": "foobar", "id": "1"}
<-- {"jsonrpc": "2.0", "error": {"code": -32601, "message": "Method not found"}, "id": "1"}
```

In Delta Chat we currently only use the error string.
Our JSON-RPC clients (JavaScript and Python) automatically convert these error responses to errors in the target language
and return/throw them:

<img src="../assets/blog/2024-11-10-why-jsonrpc-bindings-exist/error thrown in js.png" />
So we always know which call an error belongs to, and we don't have the risk of mixing up a boolean return value and error.

### Named fields in events

In the CFFI you have the following functions to get the data from events:

| Return Type | Call Signature                                                                                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| int         | [dc_event_get_data1_int](https://c.delta.chat/classdc__event__t.html#a900f267609b9768610ecbb5f833ead0e) ([dc_event_t](https://c.delta.chat/classdc__event__t.html) \*event) |
| int         | [dc_event_get_data2_int](https://c.delta.chat/classdc__event__t.html#a189a61d211040263eb9c19582539c941) ([dc_event_t](https://c.delta.chat/classdc__event__t.html) \*event) |
| char \*     | [dc_event_get_data2_str](https://c.delta.chat/classdc__event__t.html#a65954ff569082bf7c2f2f3f1ea1ef401) ([dc_event_t](https://c.delta.chat/classdc__event__t.html) \*event) |

To know what the `data1` and `data2` are about and if `data2` is a string or an integer, you need to look at the event's documentation: <https://c.delta.chat/group__DC__EVENT.html>

```c
/**
 * Emitted when SMTP connection is established and login was successful.
 *
 * @param data1 0
 * @param data2 (char*) Info string in English language.
 */
#define DC_EVENT_SMTP_CONNECTED           101
```

With the TypeScript bindings on the other hand, you get named and typed properties.

Examples of events in JSON-RPC:

```json
[
  {
    "kind": "SmtpMessageSent",
    "msg": "Message len=2402 was SMTP-sent to example@nine.testrun.org"
  },
  {
    "kind": "MsgDelivered",
    "chatId": 34,
    "msgId": 1342
  }
]
```

Usage in TypeScript:

```ts
dc.on("SmtpMessageSent", ({ msg }) => {
  console.log(msg);
});
dc.on("MsgDelivered", ({ chatId, msgId }) => {
  console.log(chatId, msgId);
});
```

This works very well with IDE auto-completion and "IntelliSense" (hover to get documentation).

### Async usage in Delta Chat Desktop

As described in the [beginning](#why-implement-a-new-way),
before JSON-RPC we had issues with desktop getting unresponsive when there was a bit more API traffic,
for example when fetching a lot of messages.
While the CFFI is blocking, with JSON-RPC you never block on a single method call
since you just have one bidirectional stream of JSON-RPC messages.
This really speed up desktop and made it more responsive.

### Easier to use than CFFI over process boundaries

CFFI needs to be linked, which also means it will become part of the process that linked it.
JSON-RPC on the other hand requires no linking and is transport-independent,
since it is just sending and receiving JSON objects.
At the moment 3 transport implementations exist (Electron-IPC, stdio, WebSocket) and it is easy to create new ones.

It is even possible to use the new [webxdc realtime API](https://webxdc.org/docs/spec/joinRealtimeChannel.html)
to connect to a remote Delta Chat instance on another computer,
similar to the idea of implementing some remote desktop webxdc app.
The webxdc realtime API is also an interesting topic in of its own,
read its [announcement blog-post](./2024-11-20-webxdc-realtime) to learn more.

## JSON-RPC API is slowly moving to become the primary API 

Delta Chat Desktop and some chat bots use the JSON-RPC API everywhere
while Android and iOS apps are only using JSON-RPC APIs for new features
that don't get a CFFI anymore. 
However, we have no autogenerated wrapper/client for any language besides TypeScript. 
For other languages, the client-code needs to be written and maintained manually. 
It is still easier to add new methods to JSON-RPC than to the CFFI,
especially where core returns complex struct with many fields:
In CFFI you would need to create a new opaque struct,
accessor functions for the properties and an unref function and wrappers for those functions.
In JSON-RPC you just write the Rust struct & method and process the returned JSON in the client.

While Desktop starts core as a subprocess and performs JSON-RPC requests via STDIN/STDOUT,
the other platforms use CFFI calls to perform JSON-RPC requests, 
for both synchronous and asynchronous access to core[^jsonrpc_in_cffi].
Previously, CFFI APIs were also used in Desktop 
before it switched to the subprocess approach. 
See the graphic above in "The history of our JSON-RPC interface".
Using the CFFI-API for performing JSON-RPC calls allows to incrementally 
use a CFFI-using code base to migrate towards using JSON-RPC APIs. 

[^jsonrpc_in_cffi]: JSON-RPC API in the CFFI: [`dc_jsonrpc_instance_t`](https://c.delta.chat/classdc__jsonrpc__instance__t.html)

## Three areas where contributions and advances are welcome :)

Currently, we only have automatic code generation for the TypeScript bindings.
It would be great to also have automatically generated bindings for Swift, Java and Python.
If you have background in generating bindings for these target platforms, 
and want to get your hands dirty, please get in touch. 

The core library has many Python integration tests using the CFFI to Rust core. 
If you have experience with [pytest](https://pytest.org) and
want to help porting integration tests to JSON-RPC, 
please checkout [our current functional test suite](https://github.com/deltachat/deltachat-core-rust/tree/main/python/tests) and submit a PR or get in touch. 

Last but not least, the JSON-RPC documentation is still not as high quality as the CFFI one. 
If you, dear reader, want to help and care about good documentation,
we'd be happy for help, 
maybe driven by trying to write a little JSON-RPC chat bot yourself?
Copying the generally good CFFI documentation 
and improving JSON-RPC API docs step by step would be warmly welcome and supported. 

## Conclusion / TL;DR

The JSON-RPC API has the following benefits over our CFFI API:

- Reduces time to change the API, because you need to edit fewer files.
- Better, more robust error reporting.
- Complete TypeScript client code generation helps to catch some bugs early during build time.
- All methods are non-blocking, which allows for a very smooth user experience without UI freezes.
- JSON-RPC over stdio is easy to use from all kinds of programming languages without any complicated linking steps. (like NAPI or the JNI we need to use in the Android app[^jni])

So all in all JSON-RPC is a huge step forward in simplifying Delta Chat development.

[^jni]: https://github.com/deltachat/deltachat-android/blob/main/jni/dc_wrapper.c

## Further reading

**Documentation:**

- <https://jsonrpc.delta.chat/>
- [list of all functions](https://js.jsonrpc.delta.chat/classes/RawClient.html)

**Source code:**

- where the JSON-RPC API methods are defined: [deltachat-core-rust/deltachat-jsonrpc/src/api/types/mod.rs](https://github.com/deltachat/deltachat-core-rust/blob/main/deltachat-jsonrpc/src/api/types/mod.rs)
- yerpc, the JSON-RPC library: <https://github.com/deltachat/yerpc>
- CFFI header file, that is the source for the documentation site on <https://c.delta.chat>: [deltachat-core-rust/deltachat-ffi/deltachat.h](https://github.com/deltachat/deltachat-core-rust/blob/main/deltachat-ffi/deltachat.h)
- implementation of CFFI functions: [deltachat-core-rust/deltachat-ffi/src/lib.rs](https://github.com/deltachat/deltachat-core-rust/blob/main/deltachat-ffi/src/lib.rs)


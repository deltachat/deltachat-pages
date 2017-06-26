---
title: Chat specification
layout: default
---


# Chat specification v0.9.0

This document describes how Delta Chat and compatible messenger use
email messages to piggyback the needed information while staying compatible to existing MUAs.

- [Outgoing messages](#outgoing-messages)
- [Incoming messages](#incoming-messages)
- [Groups](#groups)
    - [Outgoing group messages](#outgoing-group-messages)
    - [Incoming group messages](#incoming-group-messages)
    - [Add and remove members](#add-and-remove-members)
- [Miscellaneous](#miscellaneous)
- [Encryption](#encryption)
- [Old header names](#old-header-names)


# Outgoing messages

Messengers MUST add a `Chat-Version: 1.0` header to outgoing messages.
The subject MUST start with the characters `Chat:` and SHOULD be an excerpt of the message.
Note, that the subject is normally encoded using the encoded-word mechanism.

    From: sender@domain
    To: rcpt@domain
    Chat-Version: 1.0
    Subject: =?utf-8?Q?Chat=3A?= Hello
    
    Hello world!


# Incoming messages

The `Chat-Version` header MAY be used to detect if a messages comes from a compatible messanger.

The subject MUST not be used to detect compatible messengers, groups or whatever. Messenger MAY prefix the subject to the text.
The email-body SHOULD be converted to plain text, full-quotes and similar regions SHOULD be cutted from the text.


# Groups

Groups are chats with more than one recipient, each defined by an email-address.
The recipients of a group are the group members.

To allow different groups with the same members, groups are identified by a group-id.
The group-id MUST be created only from the characters 0-9, A-Z and a-z.

Groups MUST have a group-name. The group-name is any non-zero UTF-8 string.


# Outgoing groups messages

All group members MUST be added to the `To` or to the `From` header. 
The group-id MUST be written to the `Chat-ID` header.
The group-name MUST be written to `Chat-Name` header.

To identifiy the group-id on replies from normal MUAs, the group-id MUST also be added to
the message-id of outgoing messages.  The message-id of outgouing messages MUST have the 
format `Gr.<group-id>.<unique data>`.

    From: member1@domain.com
    To: member2@domain, member3@domain
    Chat-Version: 1.0
    Chat-ID: 1234xyZ
    Chat-Name: My Group
    Message-ID: Gr.1234xyZ.0001@domain
    Subject: =?utf-8?Q?Chat=3A?= My =?utf-8?Q?Group=3A?= Hello
    
    Hello group - this group contains three members

# Incoming group messages

The messenger MUST search incoming messgages for the group-id in the following headers: `Chat-ID`,
`Message-ID`, `In-Reply-To` and `References` (in this order).

If the messagener find a valid and existant group-id, the message MUST be assigned to the given group. If not,
the message MAY be assigned to a normal single-user chat with the email-address given in `From`.


# Add and remove members 

To avoid normal MUAs changing the member list by accidentially altering the `To` header, messenger clients
MUST reconstruct the member list from the `To` header only if they see a `Chat-Add-Member` or `Chat-Remove-Member` header.
Both headers must have the email-address of the added or removed member as the value.

The messenger SHOULD send an explicit mail for each added or removed member. The body of the message SHOULD contain a localized description and the message SHOULD
appear as a message or action from the sender.

    From: member1@domain.com
    To: member2@domain, member3@domain, member4@domain
    Chat-ID: 1234xyZ
    Chat-Name: My Group
    Chat-Add-Member: member4@domain
    Message-ID: Gr.1234xyZ.0002@domain
    Subject: =?utf-8?Q?Chat=3A?= My =?utf-8?Q?Group=3A?= Hello
        
    Hello, I've added member4@domain to our group.  Now we have 4 members.

To remove a member: 

    From: member1@domain.com
    To: member2@domain, member3@domain
    Chat-ID: 1234xyZ
    Chat-Name: My Group
    Chat-Remove-Member: member4@domain
    Message-ID: Gr.1234xyZ.0003@domain
    Subject: =?utf-8?Q?Chat=3A?= My =?utf-8?Q?Group=3A?= Hello
        
    Hello, I've removed member4@domain from our group.  Now we have 3 members.


# Miscellaneous

Messengers SHOULD use the header `Chat-Predecessor` instead of `In-Reply-To` as
the latter one results in infinite threads on typical MUAs.

Messengers SHOULD add a `Chat-Voice-message: 1` header if an attachted audio file is a voice message.

Messengers MAY add a `Chat-Duration` header to specify the duration of attached audio or video files. 
The value MUST be the duration in milliseconds.
This allows the receiver to show the time without knowing the file format.

    Chat-Predecessor: foo123@domain
    Chat-Voice-Message: 1
    Chat-Duration: 10000

# Encryption

Messages SHOULD be encrypted by the [Autocrypt](https://autocrypt.org) standard using `prefer-encrypt=mutual` by default.

Meta data (at least the subject and all chat-headers) SHOULD be encrypted by the [Memoryhole](http://modernpgp.org/memoryhole/) standard. 
If Memoryhole is not used, the subject of encrypted messages MUST be replaced by the string 
`Chat: Encrypted message` where the part after the colon may be localized.


# Old header names

Older versions of Delta Chat use the header names `X-MrMsg` (instead of `Chat-Version`), `X-MrPredecessor`, `X-MrGrpId`, `X-MrGrpName`,
`X-MrRemoveFromGrp`, `X-MrAddToGrp`, `X-MrGrpNameChanged`, `X-MrVoiceMessage` and `X-MrDurationMs`.

On outgoing messages, messenger MAY send the old names together with the new ones.
On incoming messages messenger MAY recognize the old names but MUST prefer the new ones on conflicts.



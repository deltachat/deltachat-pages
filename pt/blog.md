---
title: Blog
layout: default-pt
---

# Blog

{% for post in site.posts %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
<p>
	<em>{{ post.date | date: "%B %d, %Y" }}</em> -
	{{ post.excerpt | strip_html }} 
	<a href="{{ post.url }}">Read on ...</a>
</p>
{% endfor %}

<p class="menulike"><a href="../feed.xml" class="feed">Subscribe to our feed</a></p>

---
title: Blog
layout: default-it
---

# Blog

{% for post in site.posts %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
<p>
	<em>{{ post.date | date: "%B %d, %Y" }}</em> -
	{{ post.excerpt | strip_html }}
	<a href="{{ post.url }}">Continua a leggere...</a>
</p>
{% endfor %}

<p class="menulike">Abbonati a questo feed: {% include subscribe-to-feed-links.html %}</p>

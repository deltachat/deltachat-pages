---
title: Блог
layout: default
---

# Блог

{% for post in site.posts %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
<p>
	<em>{{ post.date | date: "%B %d, %Y" }}</em> -
	{{ post.excerpt | strip_html }} 
	<a href="{{ post.url }}">Читать далее ...</a>
</p>
{% endfor %}

<p class="menulike"><a href="../feed.xml" class="feed">Подпишитесь на наш канал</a></p>

---
title: Blog
layout: default-fr
---

# Blog

Ici vous trouverez des nouvelles de Delta Chat - en anglais.

{% for post in site.posts %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
<p>
	<em>{{ post.date | date: "%B %d, %Y" }}</em> -
	{{ post.excerpt | strip_html }} 
	<a href="{{ post.url }}">Continuer à lire ...</a>
</p>
{% endfor %}

<p class="menulike">Abonnez-vous à notre flux: {% include subscribe-to-feed-links.html %}</p>

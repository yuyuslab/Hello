---
layout: default
title: Blog
---
# Blog
{% for post in site.blog %}
[{% for category in post.category %}{{ category }} / {% endfor%}{{ post.title }}]({{ post.url }})
{% endfor %}


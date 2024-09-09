---
layout: default
title: Blog
---
# Blog
---
{% for post in site.blog %}
- [{% for category in post.category %}{{ category }} > {% endfor%}{{ post.title }} ({{ post.date | remove: " 00:00:00 +0900" }})]({{ post.url | prepend: site.baseurl }})
{% endfor %}
---
layout: default
title: Research
---
# Research
{% for post in site.research %}
[{% for category in post.category %}{{ category }} > {% endfor%}{{ post.title }}]({{ post.url }})
{% endfor %}

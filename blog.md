---
layout: default
title: Blog
---

## Categories
<ul>
  {% assign all_categories = "" %}
  {% for post in site.blog %}
    {% for category in post.category %}
      {% assign all_categories = all_categories | append: category | append: "," %}
    {% endfor %}
  {% endfor %}
  {% assign unique_categories = all_categories | split: "," | uniq | sort %}
  {% for category in unique_categories %}
    {% if category != "" %}
      <li>{{ category }}</li>
    {% endif %}
  {% endfor %}
</ul>

# Blog
---
{% for post in site.blog %}
- [{% for category in post.category %}{{ category }} > {% endfor%}{{ post.title }} ({{ post.date | remove: " 00:00:00 +0000" }})]({{ post.url | prepend: site.baseurl }})
{% endfor %}
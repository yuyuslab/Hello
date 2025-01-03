---
layout: default
title: Blog
---

## Blog
{% assign sorted_posts = site.blog | sort: 'date' | reverse %}
{% for post in sorted_posts %}
- [{{ post.title }} ({{ post.date | date: "%Y-%m-%d" }})]({{ post.url | prepend: site.baseurl }})
{% endfor %}


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
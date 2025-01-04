---
layout: default
title: Research
---

## Main research question
***How do people with different backgrounds collaborate to reach a shared goal?***

## Sub inquiries
- In progress

<!-- - How can we untangled social issues using biology?
- What are required for integration of hummanities and sciences?
- What is a "nice" way to create a division of labour to solve problems?
- In humans, what kinds of heuristics / methods are utilised to solve a common problem?
- What are needed to apply one system to another?
- What makes the division of cognitive labour successful?
- What do we need to substantiate the division of cognitive labour? -->

## Thoughts & Actions
{% assign sorted_posts = site.research | sort: 'date' | reverse %}
{% for post in sorted_posts %}
- [{{ post.title }} ({{ post.date | date: "%Y-%m-%d" }})]({{ post.url | prepend: site.baseurl }})
{% endfor %}

## Categories
<ul>
  {% assign all_categories = "" %}
  {% for post in site.research %}
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
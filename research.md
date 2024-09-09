---
layout: default
title: Research
---
# Research
---
## Main research question
***How do people with different backgrounds collaborate to reach a shared goal?***

## Sub inquiries
- How can we untangled social issues using biology?
- What are required for integration of hummanities and sciences?
- What is a "nice" way to create a division of labour to solve problems?
- In humans, what kinds of heuristics / methods are utilised to solve a common problem?
- What are needed to apply one system to another?
- What makes the division of cognitive labour successful?
- What do we need to substantiate the division of cognitive labour?

## Thoughts & Actions
{% for post in site.research %}
- [{% for category in post.category %}{{ category }} > {% endfor%}{{ post.title }}]({{ post.url | prepend: site.baseurl }})
{% endfor %}

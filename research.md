---
layout: default
title: Research
---
# Trying to see how knowledges are united

---

## Thoughts & Actions
{% assign sorted_posts = site.research | sort: 'date' | reverse %}
{% for post in sorted_posts %}
- [{{ post.title }}]({{ post.url | prepend: site.baseurl }})
{% endfor %}

---

## 遺産
--- Until 2/14/2025 ---
### Main research question
***How do people with different backgrounds collaborate to reach a shared goal?***

### Sub inquiries
- How can we untangled social issues using biology?
- What are required for integration of hummanities and sciences?
- What is a "nice" way to create a division of labour to solve problems?
- In humans, what kinds of heuristics / methods are utilised to solve a common problem?
- What are needed to apply one system to another?
- What makes the division of cognitive labour successful?
- What do we need to substantiate the division of cognitive labour?
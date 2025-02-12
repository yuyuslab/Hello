---
layout: default
title: Research
---
## Thoughts & Actions
{% assign sorted_posts = site.research | sort: 'date' | reverse %}
{% for post in sorted_posts %}
- [{{ post.title }}]({{ post.url | prepend: site.baseurl }})
{% endfor %}

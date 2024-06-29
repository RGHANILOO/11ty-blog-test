---
title: "Blog"
layout: "layout.njk"
---

# Blog

## Latest Posts

{% for post in collections.posts %}

- [{{ post.data.title }}]({{ pathPrefix }}{{ post.url | url }}) - {{ post.date | postDate }}
  {% endfor %}

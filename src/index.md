---
title: "Home"
layout: "layout.njk"
---
# Welcome to My Blog

## Latest Posts

{% for post in collections.posts %}
  - [{{ post.data.title }}]({{ post.url | url }}) - {{ post.date | date("DD MMMM YYYY") }}
{% endfor %}

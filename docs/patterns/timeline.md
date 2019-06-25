---
layout: default
title: Timeline
parent: patterns
nav_order: 2
---

# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Description

The timeline display contact upcoming and past activities in a chronological order. Activities should load as the user scrolls.
To reduce the number of available activity, filters is used rather than a search.


## Anatomy


{% include images.html name="anatomie-timeline" %}

1.  **Filters**: The timeline can be filter by activity types
2.  **Grouping**: All activities within the timeline should be grouped by the date they occurred at or will occurred at
3.  **Cards**: [Cards]({{site.baseurl}}/docs/components/containers.html#cards) are containers that display detail information about a single activity.
4.  **Line**: Cards are visually linked togethers by a vertical line. For future activities the line should be dotted.

---

## Behavior


### Grouping

All activities within the timeline are grouped by the time at which the activity occurred at or will occurred at. Since recent activities are more relevant than older ones,
the time interval between each group increases as the the activities "occurred at" date is older.
{% include images.html name="behaviour-grouping" %}


---

### Scrolling

New activities should be loaded as the user scroll the timeline. In addition to preserve context, the date and the export option should remain fixed at the top of the screen as the user scrolls.
{% include images.html name="behaviour-scrolling-loading" %}
{% include images.html name="behaviour-scrolling-fixed header" %}


---

### Filtering

The timeline can be filter by activity types.
{% include images.html name="behaviour-scrolling-filtering" %}

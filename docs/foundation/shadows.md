---
layout: default
title: Shadows
parent: foundations
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

Shadows are used in Digima to create a sense of tactility and reinforce task hierarchy through depth.


## Component Layering

There are 6 layers elements that can reside on Digima. Each layer is dedicated for a specific purpose and resides in it's own z-index so that elements can be stacked on top of each other when required.

When an element in a specified layer contains content, the content resides on that layer as well.

---

## Shadows

{% include images.html name="Elevation-shadow" %}

- **Base**: The page structure, layout, and content. There is no elevation on this layer.
- **Component low**: Element that reside directly over the layout and content base elements (table headers).
- **Component medium**: Element above the lowest elevated components.
- **Notifications**: Intended for flash messages.
- **Modals**: For elements that require the user's full attention to complete a task.

---

## Insert

{% include images.html name="Evelavion-insert" %}

- **Base**: The page structure, layout, and content. There is no elevation on this layer.
- **Button pressed**: Insert used for all Digina buttons.
- **Timeline**: Used on the Digima dashbaord timeline.

---

## Elevation and Insert Graph

The layers of elevation are labeled by the blur radius on the shadow. The representation of the elevation is driven by the styling of the shadow.

{% include images.html name="Elevation-scale" %}

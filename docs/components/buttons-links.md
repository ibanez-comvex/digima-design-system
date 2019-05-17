---
layout: default
title: Buttons & Links
parent: components
nav_order: 6
---

# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Description

A tooltip is an element that appears on hover to provide additional information about a particular element.
They are used to help users understand the meaning of an icon, showing the full version of a truncated text or providing contextual information about a specific UI element.

---

## Anatomy

{% include images.html name="anatomy-tooltips" %}

1. **Message**: The text within the tooltip should be concise and clear. it should not contain any links or buttons.
2. **Pointer**: Arrow indicating the direction from where the tooltip originated from.


---

## Tooltip Style


{% include images.html caption="The default tooltip style" name="style-tooltip-text" invisionID="360161249" %}

{% include images.html caption="Used to display additional information on charts" name="style-tooltip-charts" invisionID="360161248" %}

---

## Tooltip Positioning

The position of tooltips is flexible and will change depending on how close the element is to the edge of the screen.

{% include images.html caption="North" name="positioning-tooltips-north" invisionID="360161247" %}

{% include images.html caption="North west" name="positioning-tooltips-north-west" invisionID="360958275" %}

{% include images.html caption="North east" name="positioning-tooltips-north-east" invisionID="360958274" %}

{% include images.html caption="South" name="positioning-tooltips-south" invisionID="360161246" %}

{% include images.html caption="South west" name="positioning-tooltips-south-west" invisionID="360958273" %}

{% include images.html caption="South east" name="positioning-tooltips-south-east" invisionID="360958272" %}

{% include images.html caption="Left" name="positioning-tooltips-left" invisionID="360161242" %}

{% include images.html caption="Right" name="positioning-tooltips-right" invisionID="360161241" %}

---

## Overflow

The tooltip text wraps when the content is wider than the max-width. Additionally, the text can be set to truncate, which is useful when displaying user-generated content of variable length.

{% include images.html name="overflow-tooltips-single-line" invisionID="360161245" %}

{% include images.html name="overflow-tooltips-2-lines" invisionID="360161244" %}

{% include images.html caption="Example of a truncated contact status description" name="overflow-tooltips-truncated" invisionID="360161243" %}

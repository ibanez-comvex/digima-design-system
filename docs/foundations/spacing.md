---
layout: default
title: Spacing
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

Consistent use of a grid system provides the foundation for harmoniously and consistently positioning of elements onscreen. Designing to the grid helps create an experience that facilitates understanding and brings order to the page.


## Spacing Scale

The spacing scale is a base-8 scale. It was chosen because it can be divided and multiplied many times and result in whole numbers. The exception to that scale is it begins at 4px to allow smaller padding and margin mostly for inner component spacings, from there on it steps up consistently in equal values of 8px.

| Scale  | Value  |
|:-------|:-------|
| 0      | 0px    |
| 1      | 4px    |
| 2      | 8px    |
| 3      | 16px   |
| 4      | 24px   |
| 5      | 32px   |
| 6      | 40px   |
| 7      | 48px   |

{% include images.html name="spacing-scale" %}


---

## Grids

### 4px Grid and Vertical Rhythm

Because using a base-8 scale would result in inadequate line-height values, Digima is using a base-4 scale for it's typography.

{% include images.html name="spacing-vertical-rhyhm" caption="3 different font sizes on a 4px grid" %}

---

### 8px Grid

Digima horizontal grid is based on the same base-8 scale that is used for spacing. However some values are excluded from that scale because they would result in too small or too large gutters.

---

### Gutter spacing

The gutters in between columns have a fixed width and only columns in between gutters scales as the available space shrink. There are 3 different gutter sizes to allow for different types of content spacing: compact, cozy, and comfortable.
{% include images.html name="gutters-compact" caption="8px compact gutters" %}
{% include images.html name="gutters-cozy" caption="16px cozy gutters" %}
{% include images.html name="gutters-comfortable" caption="32px cozy gutters" %}

## Layouts

Digima has 3 main layouts. All of them are responsive down to 1024px, which is the minimum supported browser window width.


### Left Side Bar

This type of layout combines a fixed sized left sidebar with a fluid column layout and is mainly used for tables.
{% include images.html name="layout-left" %}

---

### Right Side Bar

Combines a fixed sized right sidebar with a fluid column layout. This type of layout is mainly for the dashboard.
{% include images.html name="layout-right" %}

---

### Centered

Consists of a centered 12 columns layout with a max-with of 1340px. When screen drops below the max-width, it become responsive down to 1024px.
{% include images.html name="layout-center" %}  

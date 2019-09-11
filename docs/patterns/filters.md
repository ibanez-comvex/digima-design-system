---
layout: default
title: Filters
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

Filters allow users to manipulate data to help them quickly identify meaningful and relevant information.

---

## Best Practice

- Filters should be explicitly labeled and modelled after the actual behaviour of users
- When a filter is applied, a clear way to remove it should be display. Clearing the filters should display the original data. 
- When a user navigate away from a page where filters are applied, their selections should be saved when they return to the page during their session.


---

## Types

### Single Value Filtering

Allows users to select a single item from a list of possible filters.

- When no filter is applied, all data should be displyed.
- Label should clearly indicate what is being filtered.
- When using multiple filters, if a selection is made, provide a way for the user to clear the filters.
  
{% include images.html name="type-drop-down-option-list-avatar" %}

---

### Multi Value Filtering

Allows users to select multiple items from a list of filters.

- When no filter is applied, all datax should be displyed.
- Filters should be grouped together if there is more than one.
- Label should indicate what specifically is being filtered.

{% include images.html name="type-drop-down-option-list-checkboxes" %}
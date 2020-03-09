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

Filters allow users to quickly identify meaningful and relevant information by giving them the ability to manipulate how data are displayed.

---

## Best Practices

- Filters should be explicitly labeled and modelled after the actual behaviour of users
- When no filter is applied, all data should be displyed.
- When a filter is applied, a clear way to remove it should be display. Clearing the filters should display the original data. 
- When a user navigate away from a page where filters were applied, their selections should be saved so that they can return to the filtered page during their session.
- If the filter(s) can be hidden in either a drawer, dropdown, or menu, there should be an indicator visible on the closed filter state that informs the user that filters have been applied.


---

## Types

### Single Value Filtering

A single-selection filter is used when the user can select only one attribute from a list of filters to modify a set of data. Single selection filter can be applied 
via the following elements

#### Basic Dropdown

{% include images.html name="filters-types-single-value-basic-dropdown" %}

---

#### Inline Dropdown

{% include images.html name="filters-types-single-value-inline-dropdown" caption="Inline dropdown" %}

{% include images.html name="filters-types-single-value-inline-dropdown-date" caption="Inline dropdown date selection" %}

---

#### Search

{% include images.html name="filters-types-single-value-search" %}

---

#### Radio Button

{% include images.html name="filters-types-single-value-radio" %}

---

### Multi Value Filtering

A multi-selection filter give users the ability to select more than one attribute from a list of filters in order to modify a data set. Multi selection filter can be applied 
via the following elements:


#### Field With Tags

{% include images.html name="type-multi-select-multi-selection-basic-dropdown" caption="Basic multi select dropdown" %}

---

#### Inline Checkbox Menu

{% include images.html name="type-multi-select-multi-selection-inline-dropdown" caption="Inline multi select dropdown" %}

---

#### Standalone Checkboxes

{% include images.html name="filters-types-multiples-value-checkboxes" %}


---

### Cross Categories Filtering

A category is a set of filter items within the same topic. Multiple category are listed verticaly on the left side of the page and should never be put within a menu or dropdown.

{% include images.html name="filters-types-multiples-categories" %}

---

## Triggers

### Via a Button

In this type of filtering pattern, users have to click a button in order to apply one or more filters. This type of filters is used when data-return speed is slow or when users can apply filters across a large mumber categories.

{% include images.html name="filters-triggers-with-button" %}

---

### On Demand

An on demand filter return results every times a filter is modified. This is used when data return speed are fast and users can only apply filters from a single or a limited number of categories.

{% include images.html name="filters-triggers-on-demand" %}
---
layout: default
title: Date/Time Pickers
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

Use those fields to allow users to select a date and/or a time.
To avoid false positive, when possible no value should be selected by default.

---

## Anatomy

{% include images.html name="anatomie-date-picker" %}

1. **Leading Icon**: Help visually separate date/time pickers from other field types.
2. **Label**: Required to prompt the user to modify the date/time.
3. **Placeholder**: Placeholders give users an example of the information required for a particular filed.
4. **Dropdown Icon**: A visual indication to signify users that additional content can be triggered. When the filed is focused, the icon should rotate at 90° to point upward instead of downward.


---

## Types and States

### Date Picker

Use to select a single date from the calendar dialog. When the calendar dialog does not contain any validation action,
the dialog should automatically close after the user selects a value.
{% include images.html caption="Default State" name="type-date-picker-default" invisionID="352588586" %}
{% include images.html caption="Hover State" name="type-date-picker-hover" invisionID="352588576" %}
{% include images.html caption="Focused State - Dialog closes automatically after selection" name="type-date-picker-focused" invisionID="352588575" %}
{% include images.html caption="Selected State with validation - Dialog only closes when the button is clicked" name="type-date-picker-focused-button" invisionID="352588574" %}



### Time Picker

Use the time picker to select a time from a single-select menu.
{% include images.html caption="Default State" name="type-time-picker-default" invisionID="352588585" %}
{% include images.html caption="Hover State" name="type-time-picker-hover" invisionID="352588579" %}
{% include images.html caption="Focused State" name="type-time-picker-focused" invisionID="352588578" %}
{% include images.html caption="Selected State" name="type-time-picker-selected" invisionID="352588577" %}



### Date and Time Picker

Additionally, you can use a combined date and time picker to select both a date and a time.

When the date and time dialog does not contain any validation action,
the dialog should automatically close after the user has selected both a date and a time.
{% include images.html caption="Default State" name="type-date-time-picker-default" invisionID="352588584" %}
{% include images.html caption="Hover State" name="type-date-time-picker-hover" invisionID="352588583" %}
{% include images.html caption="Focused State - Dialog closes automatically after selection" name="type-date-time-picker-focused" invisionID="352588582" %}
{% include images.html caption="Selected State with validation - Dialog only closes when the button is clicked" name="type-date-time-picker-focused-validation" invisionID="352588580" %}

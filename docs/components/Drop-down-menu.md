---
layout: default
title: Drop-down Menu
parent: components
nav_order: 6
---

# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


## Description

Use a drop-down menu to let user select a single option from a list of 6-11 items.
If you would like to allow users to select from searchable options, consider using a single-select or multi-select component instead.

---

## Related Components

- **Drop menus**: Select a single option from a limited list of items displayed in a dropdown menu (between 6 to 10 options).
- **Single-selects**: Select one entry from a list of pre-set choices (11 or more options).
- **Multi-selects**: Enter text to search for and select multiple options (11 or more options).
- **Checkboxes**: Use checkboxes for potentially unknown options and when users need to compare different options to each other to make a decision (under 6 options).
- **Radio**: Same as checkboxes but for a single choice (under 6 options).

---

## Best Practices

- Options should be sorted in a logical order. For instance, put the most selected option at the top.
- Destructive options should be listed last and in red.
- Option labels should be clear and concise.
- The drop-down menu should be automatically closed when an option is selected unless multiple options can be selected.

---

## Anatomy

{% include images.html name="anatomie-drop-down" %}

1.  **Trigger component**: The component that trigger the drop-down menu.
2.  **Pointer**: Arrow indicating the direction from where the drop-down menu originated from.
3.  **Drop-down menu**: A list of selectable items.

---

## States

{% include images.html caption="Hover state" name="state-drop-down-option-hover" invisionID="352588850" %}


{% include images.html caption="Hover state on a destructive option" name="state-drop-down-option-destructive-hover" invisionID="352588841" %}


{% include images.html caption="Selected state" name="state-drop-down-option-checked" invisionID="352588840" %}


---

## Trigger Types

Dropdown menu can be trigged by 4 elements.

{% include images.html caption="Triggered by a drop down button" name="action-type-button" invisionID="352588849" %}


{% include images.html caption="Triggered by a drop down link" name="action-type-button-links" invisionID="352588844" %}


{% include images.html caption="Triggered by a icon" name="action-type-3dotes" invisionID="352588843" %}


{% include images.html caption="Triggered by a avatar" name="action-type-button-avatar" invisionID="352588842" %}


---

## Single Select List types

### Simple Option List

Used to display a short list of actions.
{% include images.html name="type-drop-down-option-list" invisionID="352588848" %}



### Option List with Sub-text

Use this type of list when additional information can help users select an option.
For example a contact name could be paired with an email address.
{% include images.html name="type-drop-down-option-list-sub-text" invisionID="352588847" %}



### Option List with Meta Text

This list has the same objective as the sub-text list but with the added advantage to be more condensed.
{% include images.html name="type-drop-down-option-list-meta-text" invisionID="352588846" %}



### Option List with Multiline Sub-text

This type of list should be used when an option's label need to be paired with a long form text like a description.
{% include images.html name="type-drop-down-option-list-multiline-text" invisionID="352588845" %}



### Grouped Options List with Avatar

This type of list should be mainly used to display user names.
{% include images.html name="type-drop-down-option-list-avatar" invisionID="352588840" %}



### Grouped List with Icons

Option labels can be paired with icons to help identify them.
{% include images.html name="type-drop-down-option-list-icons" invisionID="352588918" %}



### Grouped Options

When a large number of options have to be displayed, similar options should be grouped together. Category titles should
be short by importance and describes the content in that sub-category.The title is not selectable.

{% include images.html name="type-drop-down-option-list-grouped" invisionID="352588852" %}



### Checkboxes Options

Use this type of list to display a short list of setting like options that can be turned on and off.
{% include images.html caption="This type of list is used for email tracking setting in Digima" name="type-drop-down-option-list-checkboxes" invisionID="352588851" %}

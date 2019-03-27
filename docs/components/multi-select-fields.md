---
layout: default
title: Multi Select Fields
parent: components
nav_order: 3
---

# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


## Description

Use a multiple selects to give users the ability to search and select one or more options for a list of 11 or more items.

When users input text into the field, suggestions are provided and the selected option is display in a text input field.
There is basically 3 different types of select fields

- **Drop menus**: Select a single option from a limited list of items displayed in a dropdown menu (between 6 to 10 options).
- **Single-selects**: Select one entry from a list of pre-set choices (11 or more options).
- **Multi-selects**: Enter text to search for and select multiple options (11 or more options).

---

## Best Practices

There are many components that can be used to complete tasks that involve making choices. Here are a few principles to follow:

- Options should be sorted in a logical order. For instance, put the most selected option at the top.
- When listing options of different types, they should be ordered into different categories.
- Multi single select fields are searchable list, they should be used when users need to select from a long list of known elements that don't need to be compare with each other (countries names or time intervals for example).
- Use checkboxes for potentially unknown options, when users need to compare different options to each other to make a decision and when options are under 6 choices.

---

## Anatomy

{% include images.html name="anatomie-multi-select" %}

1.  **Text input**: Users input text and receive suggestions that they can choose from. Once selected, the user's choice is then shown in the field as a chip.
2.  **Label**: Labels should be sentence case and as short as possible while clearly explaining the content of the drop menu.
3.  **Hint (optional)**: This element should be used to display addition information about what the field is about. This information should be concise and optional meaning that users should not need to read it to be able correctly select an option.
4.  **Trailing icon**: Used to indicate that the filed contain nested elements.
5.  **Message (optional)**: Helper text conveys additional guidance about the field, such as how it will be used. It should only take up a single line.
6.  **Chips**: Chips show what options have been selected, and can be removed using the cross icon.
7.  **Selection menu**: Contains selectable items that can be grouped into sub-categories.

---

## States

{% include images.html caption="Default state" name="type-multi-select-default" invisionID="352589464" %}


{% include images.html caption="Hover state" name="type-multi-select-hover" invisionID="352589463" %}


{% include images.html caption="Focused state" name="type-multi-select-focused" invisionID="352589462" %}


{% include images.html caption="Searching" name="type-multi-select-searching" invisionID="352589452" %}


{% include images.html caption="Results Found" name="type-multi-select-results found" invisionID="352589449" %}


{% include images.html caption="One option selected" name="type-multi-select-single selection" invisionID="352589460" %}


{% include images.html caption="Multiple options selected" name="type-multi-select-multi-selection" invisionID="352589453" %}


{% include images.html caption="No results" name="type-signle-multi-no results" invisionID="352589451" %}


{% include images.html caption="Error" name="type-multi-select-error" invisionID="352589450" %}



## List types

### Simple Option List

Used to display a list of options like exclusion reasons.
{% include images.html name="type-multi-select-list-text" invisionID="352589460" %}


### Option List with Sub-text

Use this type of list when additional information can help users select an option.
For example a contact name could be paired with an email address.
{% include images.html name="type-multi-select-list-sub-text" invisionID="352589459" %}


### Option List with Meta Text

This list has the same objective as the sub-text list but with the added advantage to be more condensed.
{% include images.html name="type-multi-select-list-text-meta-text" invisionID="352589458" %}



### Option List with Multiline Sub-text

This type of list should be used when an option's label need to be paired with a long form text like a description.
{% include images.html name="type-multi-select-list-text-multiline" invisionID="352589457" %}



### Grouped Options List with Avatar

This type of list should be mainly used to display user names.
{% include images.html name="type-multi-select-list-avatar" invisionID="352589456" %}


### Grouped List with Icons

This type of list should be mainly used to display contact status's colors.
{% include images.html name="type-multi-select-list-icon" invisionID="352589455" %}


### Grouped Options

When a large number of options have to be displayed, similar options should be grouped together. Category titles should
be short by importance and describes the content in that sub-category.

The title is not selectable. When all options in a group are selected, the group no longer appears in the selection menu.
{% include images.html name="type-multi-select-list-grouped" invisionID="352589454" %}

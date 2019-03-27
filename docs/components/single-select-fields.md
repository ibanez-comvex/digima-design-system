---
layout: default
title: Single Select Fields
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

Use a single selects to give users the ability to select one options for a list of 11 or more items.
There is basically 3 different types of select fields:

- **Drop menus**: Select a single option from a limited list of items displayed in a dropdown menu (between 6 to 10 options).
- **Single-selects**: Select one entry from a list of pre-set choices (11 or more options).
- **Multi-selects**: Enter text to search for and select multiple options (11 or more options).

---

## Best Practices

There are many components that can be used to complete tasks that involve making choices. Here are a few principles to follow:

- Options should be sorted in a logical order. For instance, put the most selected option at the top.
- When listing options of different types, they should be ordered into different categories.
- Since single should be used when users need to select from a long list of known elements that don't need to be compare with each other (countries names or time intervals for example).
- Use radio buttons for potentially unknown options, when users need to compare different options to each other to make a decision and when options are under 6 choices.
- Avoid using single selects for data that is highly familiar to users, unless the data format could be difficult to guess for users.
A birthday month, day and year should be displayed in a text field rather than a select field for example.

---

## Anatomy

{% include images.html name="anatomie-single-select" %}

1.  **Text input**: Users can choose a single item from a list of options. Once selected, the user's choice is then shown in the field.
2.  **Label**: Labels should be sentence case and as short as possible while clearly explaining the content of the menu.
3.  **Hint (optional)**: This element should be used to display addition information about what the field is about. This information should be concise and optional, meaning that users should not need to read it to be able select an option.
4.  **Clear Selection**: Clear all the text from the field and revert back to the placeholder, the default value or the previous value.
5.  **Message (optional)**: Helper text conveys additional guidance about the field, such as how it will be used. It should only take up a single line.
6.  **Selection menu**: Contains selectable items that can be grouped into sub-categories.

---

## Single Select States

{% include images.html caption="Default state" name="type-signle-select-default" invisionID="352589577" %}


{% include images.html caption="Hover state" name="type-signle-select-hover" invisionID="352589576" %}


{% include images.html caption="Focused state" name="type-signle-select-focued" invisionID="352589575" %}


{% include images.html caption="Searching" name="type-signle-select-searching" invisionID="352589574" %}



## Single Select List types

### Simple Option List

Used to display a list of known options like a country list.
{% include images.html name="type-signle-select-list-text" invisionID="352589573" %}


### Option List with Sub-text

Use this type of list when additional information can help users select an option.
For example a contact name could be paired with an email address.
{% include images.html name="type-signle-select-list-sub-text" invisionID="352589572" %}


### Option List with Meta Text

This list has the same objective as the sub-text list but with the added advantage to be more condensed.
{% include images.html name="type-signle-select-list-text-meta-text" invisionID="352589571" %}



### Option List with Multiline Sub-text

This type of list should be used when an option's label need to be paired with a long form text like a description.
{% include images.html name="type-signle-select-list-text-multiline" invisionID="352589570" %}



### Grouped Options List with Avatar

This type of list should be mainly used to display user names.
{% include images.html name="type-signle-select-list-avatar" invisionID="352589569" %}


### Grouped List with Icons

This type of list should be mainly used to display contact status's colors.
{% include images.html name="type-signle-select-list-icon" invisionID="352589568" %}




### Grouped Options

When a large number of options have to be displayed, similar options should be grouped together. Category titles should
be short by importance and describes the content in that sub-category.

The title is not selectable. When all options in a group are selected, the group no longer appears in the selection menu.
{% include images.html name="type-signle-select-list-grouped" invisionID="352589567" %}

---
layout: default
title: Text Fields
parent: components
nav_order: 2
---

# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


## Anatomy

Use text fields in forms to help users enter, select, and search for text. Text fields are normally found within a form but can also be part of a modal or a dialog.

{% include images.html name="anatomie-text-fields" %}

1. Leading Icon (optional)
2. Label
3. Placeholder
4. Hint/Tips (optional)
5. Trailing Icon (optional)
6. Helper Message (optional)


---

### Leading Icon

A leading icon can be used as a signifiers to describe the type of input a text field requires and help visually separate them from other field types.
Contrary to trailing icons, they should not be clickable. In Digima it is mostly used for search fields and date/time pickers.
{% include images.html name="text-fields-leading-icon-date" %}
{% include images.html name="text-fields-leading-icon-search" %}


---

### Label

Label text is the main element that inform user as to what information is requested. Every text field should have a label.

If a field is required, a red asterix (\*) should be display next to the label.
{% include images.html name="text-fields-leading-icon-search" %}
{% include images.html name="text-fields-label-asterix" %}


---

### Placeholder

Placeholders give users an example of the information required for a particular filed.
Their color value should be lighter than the text input and they should disappear only when the user start typing.
{% include images.html name="text-fields-placeholder" %}


---

### Hint/Tips

This element should be used to display addition information about what the field is about. This information should be concise and optional meaning that users should not need to read it to be able to correctly fill the corresponding field.
{% include images.html name="text-fields-tips" %}


---

### Trailing Icon

A text field can use a trailing icon to provide additional functionalities (clear icon for a search field) or indicate that the filed contain nested elements.
{% include images.html name="text-fields-trailing-icon-select" %}
{% include images.html name="text-fields-trailing-icon-search" %}


---

### Helper Message

Help message give additional information to the user about a text field.



**Hint Message**

Helper text conveys additional guidance about the input field, such as how it will be used. It should only take up a single line.
{% include images.html name="text-fields-helper-message" %}



**Warning Message**

Display a warning message for a field when an input is consider valid but has the potential to negatively impact user experience. The message should explain why a warning is been displayed and how to fix it.
Warning messages are displayed below the input box, replacing helper text. They should be replace by error messages.

Swapping helper text with warning text and warning with error text helps prevent new lines of text from being introduced into a layout, thus bumping content to fit it.
If only one warning is possible, warning text describes how to avoid the warning. If multiple warning are possible, warning text describes how to avoid the most likely warning.

To avoid overwhelming users with unnecessary messages, text field warnings should be a rare occurrence. In Digima it's currently only used for non authenticated email domains.
{% include images.html name="text-fields-warning-message" %}



**Error Message**

When text input isn’t accepted, an error message can display instructions on how to fix it. Error messages are displayed below the input box, replacing helper text until fixed.

Swapping helper text with error text helps prevent new lines of text from being introduced into a layout, thus bumping content to fit it.

If only one error is possible, error text describes how to avoid the error. If multiple errors are possible, error text describes how to avoid the most likely error.
{% include images.html name="text-fields-error-message" %}


---

## Types and States

### Single Line Fields

In single-line fields, as the cursor reaches the right field edge, text longer than the input extends horizontally.
Single-line fields are not suitable for collecting long responses. For those, use a multi-line text field or text area instead.
{% include images.html caption="Default State" name="state-input-default" invisionID="352589921" %}
{% include images.html caption="Hover State" name="state-input-hover" invisionID="352589920" %}
{% include images.html caption="Error State" name="state-input-error" invisionID="352589919" %}
{% include images.html caption="Warning State" name="state-input-warning" invisionID="352589918" %}
{% include images.html caption="Disabled State" name="state-input-disabled" invisionID="352589917" %}


---

### Text Areas

Use the text area field when the field requires a lot of information or a large description.
Text area have a fixed height that scroll vertically once the cursor reaches the bottom of the field, displaying scrollbars.

The max-height value of the field should be used as an affordance to indicate the recommended input size.
For example a call campaign description should remain concise but the size of the note filed of a call outcome should give users the assurance that hey can input as much information as necessary.
{% include images.html caption="Default State " name="type-textarea-default" invisionID="352589916" %}
{% include images.html caption="The text area initial height indicate that a sorter description is recommended" name="type-textarea-hover-small" invisionID="352589915" %}
{% include images.html caption="A bigger initial height shows that long notes are possible and encouraged." name="type-textarea-hover-large" invisionID="352589911" %}
{% include images.html caption="Error State" name="type-textarea-error" invisionID="352589914" %}
{% include images.html caption="Warning State" name="type-textarea-warning" invisionID="352589913" %}
{% include images.html caption="Disabled State" name="type-textarea-disabled" invisionID="352589912" %}


---

### Password

Password are replaced by * by default, users can choose to show the input by clicking on the trailing show icon.
{% include images.html caption="Default State" name="type-input-password-default" invisionID="352589910" %}
{% include images.html caption="Hover State" name="type-input-password-hover" invisionID="352589909" %}
{% include images.html caption="Hover  State" name="type-input-password-error" invisionID="352589908" %}
{% include images.html caption="The warning state could be used to warn users about a weak password." name="type-input-password-warning" invisionID="352589906" %}
{% include images.html caption="Disabled State" name="type-input-password-disabled" invisionID="352589907" %}


---

### Text Add-ons

Text add-ons prefix and/or suffix a text input to provide additional information about the input format.
{% include images.html caption="Default State - A text field with a currency symbols text prefix" name="type-input-prefixed-default" invisionID="352589905" %}
{% include images.html caption="Hover State" name="type-input-prefixed-hover" invisionID="352589904" %}
{% include images.html caption="Error State" name="type-input-prefixed-error" invisionID="352589903" %}
{% include images.html caption="Warning State" name="type-input-prefixed-warning" invisionID="352589902" %}
{% include images.html caption="Disabled State" name="type-input-prefixed-disabled" invisionID="352589901" %}


Example of a text field with a period text suffix.
{% include images.html caption="Default State" name="type-input-sufixed-default" invisionID="352589900" %}
{% include images.html caption="Hover State" name="type-input-sufixed-hover" invisionID="352589899" %}
{% include images.html caption="Error State" name="type-input-sufixed-error" invisionID="352589898" %}
{% include images.html caption="Warning State" name="type-input-sufixed-warning" invisionID="352589897" %}
{% include images.html caption="Disabled State" name="type-input-sufixed-disabled" invisionID="352589896" %}


Example of a text field with a currency prefix and a period text suffix.
{% include images.html caption="Default State " name="type-input-prefixed-sufixed-default" invisionID="352589895" %}
{% include images.html caption="Hover State " name="type-input-prefixed-sufixed-Hover" invisionID="352589894" %}
{% include images.html caption="Error State" name="type-input-prefixed-sufixed-error" invisionID="352589893" %}
{% include images.html caption="Warning State" name="type-input-prefixed-sufixed-warning" invisionID="352589892" %}
{% include images.html caption="Disabled State" name="type-input-prefixed-sufixed-disabled" invisionID="352589891" %}


---

### Button Addons

Text fields can be grouped with a single button.
{% include images.html caption="Single line field" name="type-input-grouped-copy-default" invisionID="352589890" %}
{% include images.html caption="Multilines field" name="type-input-grouped-copy-multilines" invisionID="352589889" %}


Example of an text input prefixed and sufixed by buttons.
{% include images.html caption="Default State" name="type-input-grouped-both-side-default" invisionID="352589888" %}
{% include images.html caption="Hover State" name="type-input-grouped-both-side-hover" invisionID="352589887" %}
{% include images.html caption="Error State" name="type-input-grouped-both-side-error" invisionID="352589886" %}
{% include images.html caption="Warning State" name="type-input-grouped-both-side-warning" invisionID="352589885" %}
{% include images.html caption="Disabled State" name="type-input-grouped-both-side-disabled" invisionID="352589884" %}


---

### Button with Dropdown Addons

Text input can also be grouped with a dropdown button.
{% include images.html caption="Default State" name="type-input-dropdown-addon-default" invisionID="352589883" %}
{% include images.html caption="Hover State" name="type-input-dropdown-addon-hover" invisionID="352589882" %}
{% include images.html caption="Error State" name="type-input-dropdown-addon-error" invisionID="352589881" %}
{% include images.html caption="Warning State" name="type-input-dropdown-addon-warning" invisionID="352589880" %}
{% include images.html caption="Disabled State" name="type-input-dropdown-addon-disabled" invisionID="352589879" %}

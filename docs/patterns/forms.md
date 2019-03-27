---
layout: default
title: Forms
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

Use forms to allow people to enter data for use by the application, or to configure options. Designing forms well requires making decisions about structure, sequence, interface elements, field labels, help, and feedback.


## Anatomy


{% include images.html name="anatomie-Form" %}

1.  **First fields**: The first field should be auto focus by default. This allows users to tab through elements in the form in a logical way.
2.  **Required field**: Mark required fields with an asterisk (\*).
3.  **Disabled fields**: Show disabled fields if users need to know what controls might be available to them.

---

## Elements


### Title

All form should include a left aligned title describing the form. Form titles should be bigger than field group titles.
{% include images.html name="layout-Form-title" %}


---

### Grouping

When a large number of field is present, related ones should be grouped together. Headline should be concise and informative.

if necessary a short paragraph of text can be added to describe the field group in more details.
{% include images.html name="layout-Form-grouping" %}


---

### Error

In addition of displaying a message indicating that the form failed to pass validation, field containing errors should be highlighted with a message describing the error.
{% include images.html name="layout-Form-error" %}


---

### Inline validation

Inline validation should be used on field to avoid users having to submit the form to discover errors.
{% include images.html name="layout-Form-inlinie-validation" %}


---

### Buttons

- A primary button should be used for the main action, and a secondary button to cancel.
- If additional actions are required, primary button should be first, then the secondary button and then finally the cancel button.
- Copy used within a button should be unambiguous and concise, making it clear to the user what action will occur once the button is clicked.
Avoid using terms like "Ok", "Submit" or "Validate" that could confuse users and instead describe the intended action ("Add to group", "Assign"...).
- To help user understand why a form cannot be sent, buttons should not be disabled. Exception to that is when a form is been process.
- When a form is been process all actions (primary, secondary, cancel and close) should be disabled to prevent multiple submissions or users falsely assuming they can cancel a processing form.

{% include images.html caption="Form with a single main action" name="layout-Form-buttons" %}


{% include images.html caption="Form with a main and a secondary action" name="layout-Form-buttons-3-actions" %}


{% include images.html caption="Processing form" name="layout-Form-buttons-processing" %}


---

### Alignment

Form titles and fields should be left aligned and actions should be right aligned. All fields should be stacked on one column.
{% include images.html name="layout-Form-alignment" %}

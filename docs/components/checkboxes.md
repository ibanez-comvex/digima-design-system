---
layout: default
title: Checkboxes
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

Use checkboxes to allow people to select a number of options. Each checkbox is independent of all other checkboxes in the list, and checking one box doesn't uncheck the others.

---

## Best Practices

- Use checkboxes to display potentially unknown options, when users need to compare different options to each other to make a decision and when options are under 6 choices.
- Checkboxes should always be displayed vertically.
- Checkboxes require the use of a button to apply the settings once they are selected.

## Anatomy

{% include images.html name="anatomy-checkbox" %}

1. **Title**: Should be short and concise while clearly describing the available option.
2. **Description** (optional): A short paragraph of text can be added to describe the options in more details.
3. **Checkbox**: Clickable icon that indicate whether an option is checked.
4. **Option label**: Use positive and active wording for checkbox labels, so that it's clear what will happen if the box is checked. Avoid negative statements such as "Don't send me more emails", which would mean that the user would have to check the box in order for something not to happen.


---

## Types

### Normal Checkboxes

The default style of checkboxes used thought-out the app.

{% include images.html caption="Unchecked" name="type-checkbox-unchecked" invisionID="352588457" %}


{% include images.html caption="Unchecked disabled" name="type-checkbox-unchecked-disabled" invisionID="352588444" %}


{% include images.html caption="unchecked hover" name="type-checkbox-unchecked-hover" invisionID="352588456" %}


{% include images.html caption="Checked" name="type-checkbox-checked" invisionID="352588455" %}


{% include images.html caption="Checked disabled" name="type-checkbox-checked-disabled" invisionID="352588454" %}


{% include images.html caption="Error" name="type-checkbox-error" invisionID="352588452" %}


{% include images.html caption="Intermediate" name="type-checkbox-intermediate" invisionID="352588453" %}


---

### Danger Checkboxes

Those checkboxes are mostly used in forms that required users to confirm a set of destructive actions.

{% include images.html caption="Danger unchecked" name="type-checkbox-danger-unckecked" invisionID="352588449" %}


{% include images.html caption="Danger unchecked disabled" name="type-checkbox-danger-unchecked-disabled" invisionID="352588450" %}


{% include images.html caption="Danger unchecked hover" name="type-checkbox-unchecked-danger-hover" invisionID="352588449" %}


{% include images.html caption="Danger checked" name="type-checkbox-danger-checked" invisionID="352588448" %}


{% include images.html caption="Danger checked disabled" name="type-checkbox-danger-checked-disabled" invisionID="352588447" %}


{% include images.html caption="Danger error" name="type-checkbox-danger-error" invisionID="352588445" %}


{% include images.html caption="Danger intermediate" name="type-checkbox-danger-intermediate" invisionID="352588446" %}

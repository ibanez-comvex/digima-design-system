---
layout: default
title: Radio
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

Use radios when you want the person to select a single option from a short list of items. For example, choosing a day of the week.

---

## Best Practices

- Use radios for potentially unknown options, when users need to compare different options to each other to make a decision and when options are under 6 choices.
- Options should be listed in logical order from:
    - Most likely to least likely to be selected.
    - Simplest to most complex operation.
    - Least to most risk.        
- One radio button option should be selected as the default. The safest, most secure, and private options should be considered first. If safety and security aren’t factors, the most likely or convenient option should be selected.
- Radios should always be displayed vertically.
- Radios should not be used to describe complex choices.
- If you need to have an unselected state, just add a radio button with a **None** option.
- If you can't have a comprehensive list of all possible options, add an **Other** option.
- Labels should be concise and provide context.

---

## Anatomy

{% include images.html name="anatomy-radio" %}

1. **Title**: Should be short and concise while clearly describing the available option.
2. **Description** (optional): A short paragraph of text can be added to describe the options in more details.
3. **Current selection**: Indicates the selected option.
4. **Option**: Clicking on another option will de-select the current option.

---

## Types

### Normal Checkboxes

{% include images.html caption="Unchecked" name="type-radio-unchecked" invisionID="352589639" %}


{% include images.html caption="Unchecked disabled" name="type-radio-unchecked-disabled" invisionID="352589638" %}


{% include images.html caption="unchecked hover" name="type-radio-unchecked-hover" invisionID="352589637" %}


{% include images.html caption="Checked" name="type-radio-checked" invisionID="352589636" %}


{% include images.html caption="Error" name="type-radio-error" invisionID="352589635" %}


{% include images.html caption="Checked disabled" name="type-radio-checked-disabled" invisionID="352589634" %}

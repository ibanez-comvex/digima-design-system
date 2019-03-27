---
layout: default
title: Chips
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

Use chips to visually label UI objects for quick recognition and navigation. Chips can be used for email addresses, contact names, exclusion reasons, etc... Chips can be permanent or removable (by displaying the remove icon).
They can also display a status like a warning or an error.

- For indicating status, use a label instead.
- Use badges for indicating users roles.

---

## Anatomy

{% include images.html name="anatomie-tags" %}

1. **Status indicator**: Help visually identify the chip status.
2. **Label**: Display the name of the object been selected.
3. **Remove chip**: Remove chip by clicking the remove icon.

---

## Types

### Default

{% include images.html caption="Static chip used as a flag or as a reference to an object or attribute." name="type-chips-static-info" invisionID="352588524" %}
{% include images.html caption="Removable chip used mainly in multi-select controls." name="type-chips-removable-info-default" invisionID="352588523" %}
{% include images.html caption="Removable chip hover state" name="type-chips-removable-info-hover" invisionID="352588522" %}
{% include images.html caption="Removable chip disabled state" name="type-chips-removable-info-disabled" invisionID="352588521" %}


---

### Warning

Use a warning chips when the object been displayed by the chip is consider valid but has the potential to negatively impact user experience.

Hovering a warning chip should display a tooltip explaining why a warning is been displayed and how to fix it.
{% include images.html caption="Static Warning chip" name="type-chips-static-warning" invisionID="352588520" %}
{% include images.html caption="Removable Warning chip" name="type-chips-removable-warning-default" invisionID="352588519" %}
{% include images.html caption="Removable Warning chip hover state" name="type-chips-removable-warning-hover" invisionID="352588518" %}


---

### Error

Use an error chips when the object been displayed by the chip cannot be process by the application.

Hovering an error chip should display a tooltip explaining the why an error is occurring and if possible how to fix it.
{% include images.html caption="Static error chip" name="type-chips-static-error" invisionID="352588517" %}
{% include images.html caption="Removable error chip" name="type-chips-removable-error-default" invisionID="352588516" %}
{% include images.html caption="Removable error chip hover state" name="type-chips-removable-error-hover" invisionID="352588515" %}

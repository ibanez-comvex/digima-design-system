---
layout: default
title: Section Alerts
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

Page specific alerts always appear below the top-level primary navigation. Use this element to communicate a general alert within a specific page or section.

Color should be used to communicate the severity of the alert. Error messages should alway be displayed before warning or info alerts.

---

## Anatomy

{% include images.html name="anatomy-page-alerts" %}

1. **Message**: A short message describing the severity of the issue, the feature(s) affected and information to remedy the situation.
2. **Action (option)**: A link to additional information that will help users understand or resolve the ongoing issue. External links should open in a new browser tab.
3. **Icon (option)**:  An alert can be dismissible or not depending on its context.


---

## Error

Error messages let the user know that something has gone wrong after they've tried to do something.The copy should clearly communicate to the user what the issue is and provide a clear path for the user to correct the error and get back to work.

Error messages should not be dismissible, instead it should disappear automatically once the issue is resolved.

{% include images.html name="type-page-alerts-error" invisionID="363387296" %}

---

## Warning

Use to warn users about an unexpected event that may negatively impact their experience. The copy should clearly communicate to the user what the issue is and provide a clear path to correct or learn more about the warning.

{% include images.html name="type-page-alerts-warning" invisionID="363387295" %}

---

## Info

Info messages alert the user to additional information without requiring an action. The are used to inform the user about something that might help or impact them.

{% include images.html name="type-page-alerts-info" invisionID="363387294" %}

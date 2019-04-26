---
layout: default
title: Global Alerts
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

Global alerts communicate messages that are specific to one account or an app-wide issue.
They should appear one at a time above the top-level primary navigation. They should be used sparingly to preserve their impact and only to deliver error or warning messages.


- For a page specific error/warning use a banner instead.
- Global alerts should not be used as as a marketing tool.

---

## Anatomy

{% include images.html name="anatomy-global-alerts" %}


1. **Icon**:  Only use the error and warning icons.
2. **Message**: A short message describing the severity of the issue, the feature(s) affected and information to remedy the situation.
3. **Action** (optional): A link to additional information that will help users understand or resolve the ongoing issue. External links should open in a new browser tab.

---

## Critical

Use a critical alert when there is an app-wide performance issue that affects a wide range of users or deeply affects an individual's product usage such as a critical browser incompatibility or an internet-connectivity issue.

The copy should clearly communicate to the user what the issue is and how it may affect their experience. Critical alerts should not be dismissible, instead it should disappear automatically once the issue is resolved.

{% include images.html caption="Message should be clear and concise" name="type-global-alerts-critical" invisionID="359931126" %}

---

## Warning

Use a system alert to communicate an account-level issues or performance that only minimally affect product usage such as a permissions or data issue, planned outages or a non-critical browser incompatibility. System alerts should be dismissible.

{% include images.html caption="Message should be clear and concise" name="type-global-alerts-warning" invisionID="359931126" %}

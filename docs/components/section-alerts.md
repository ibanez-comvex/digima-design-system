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

Page specific alerts are positioned above the area they relate to. They usually relate directly to user input and they disappear once the issue is resolved. They can be paired with inline errors or warnings to
help users solve input issues.

Color is used to communicate the severity of the alert. Error messages should alway be displayed before warning or info alerts.

- For informing users about an error/warning specific to one account or an app-wide issue use global alerts.
- For informing users about the state of a background process after an action has been taken use a flash message.
- Errors have priority over warnings messages and should be display at the very top.

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

{% include images.html caption="Section alert default warning style" name="type-page-alerts-warning-default" invisionID="363884358" %}

{% include images.html caption="Section alert hover warning style" name="type-page-alerts-warning-hover" invisionID="363884357" %}

---

## Info

Info messages alert the user to additional information without requiring an action. The are used to inform the user about something that might help or impact them.

{% include images.html caption="Section alert default info style" name="type-page-alerts-info-default" invisionID="363884356" %}

{% include images.html caption="Section alert hover info style" name="type-page-alerts-info-hover" invisionID="363884355" %}

---

## Position

Section alerts should appear directly within a specific section of the screen.

If the alert is global to the page, the message should appear directly under the page title, if the alert is directly related to a specific component like
a widget, the message should be display directly under the widget title.

{% include images.html caption="Example of a page section warning" name="type-page-alerts-position-settings" %}

{% include images.html caption="Example of a page level warning" name="type-page-alerts-position-page" %}

{% include images.html caption="A component level warning and a page level info message" name="type-page-alerts-position-widget" %}

---

## Stacking

Sections messages can to stack on top of each other. Errors have priority over warnings messages and should be display at the very top.

Avoid stacking too many alerts as this will greatly reduce the scrollable space. Instead show warnings inline when possible.

{% include images.html name="type-page-alerts-stacking" %}

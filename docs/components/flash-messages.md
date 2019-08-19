---
layout: default
title: Flash Messages
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

Flash messages inform users of a process that the app has performed or will perform. They appear temporarily, towards the top of the screen.

They shouldn’t interrupt the user experience, and they don’t require user input to disappear. If hovered, flash message should remain visible until dismissed.
Flash messages should be used to give feedback to users about an action they took.

- For informing users about an error/warning specific to one account or an app-wide issue use global alerts.
- For a section specific error/warning use a section alert instead.

---

## Anatomy

{% include images.html name="anatomy-flash-message" %}

1. **Container**: The container color indicated the nature of the message and its severity.
2. **Message**: A short message describing the event, copy is restricted to 2 lines in length. If the text overflows it should be truncate using an ellipsis.
4. **Dismiss**: Use to close the flash message.

---

## Styles

### Error

Error messages let the user know that something has gone wrong after they've tried to do something. Keep the message simple and direct, and avoid confusing the user with technical details.

{% include images.html caption="The default error style" name="type-flash-message-error" invisionID="363658557" %}

When required, messages can be display on up to 2 lines. However keep in mind that because flash messages are transient in nature, the copy must be concise.

{% include images.html name="type-flash-message-error-multilines" invisionID="363658556" %}

{% include images.html caption="Hover state, clicking the entire hightailed area should dismiss the flash message" name="type-flash-message-error-hover" invisionID="363661865" %}

---

### Warning

Warning messages appear before we request the user to take action. This is usually in anticipation of a significant change. If the warning comes before an action, clearly communicate what will happen if the they proceed, and provide an alternative where possible.

{% include images.html name="type-flash-message-warning" invisionID="363658555" %}

{% include images.html caption="Hover state, clicking the entire hightailed area should dismiss the flash message" name="type-flash-message-warning-hover" invisionID="363661864" %}

---

### Success

Success messages let the user know that they have completed an action. The messages should reaffirm the outcome and get out of the user's way.

{% include images.html name="type-flash-message-success" invisionID="363658554" %}

{% include images.html caption="Hover state, clicking the entire hightailed area should dismiss the flash message" name="type-flash-message-success-hover" invisionID="363661863" %}

---

### Info

Info messages alert the user to additional information without requiring an action, the inform the user about something that might help or impact them. Info messages can also be used for loading states like heavy bulk actions.

{% include images.html name="type-flash-message-info" invisionID="363658553" %}

{% include images.html caption="Hover state, clicking the entire hightailed area should dismiss the flash message" name="type-flash-message-info-hover" invisionID="363661862" %}

{% include images.html name="type-flash-message-info-loading" caption="Let the user know that something is happening by using an info message" invisionID="363668180" %}

---

## Positioning and Stacking

Flash messages appear toward the top of the screen below the main navigation.

When multiple flash messages are displayed, they will stack on top of one another with the most recent me on top. When a user dismisses a flag, any older flags below will come to the top.

{% include images.html name="positioning-flash-message-positioning" invisionID="363658552" %}

{% include images.html name="positioning-flash-message-stacking" invisionID="363658558" %}

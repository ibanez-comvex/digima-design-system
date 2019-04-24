---
layout: default
title: Modals
parent: components
nav_order: 1
---

# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Description

Modals are used to display content in a layer above the app. They should be used when editing or creating small bits of content without losing the context of an underlying page.

Modal should have a consistent closing behavior. Don’t surprise users by popping up a modal. Let a user’s action, such as a button click, following a link or selecting an option, trigger the modal. Uninvited modals may surprise the user and result in a quick dismissal of the window.

Modal should not be too big or contain too much information as this will obscures most of the UI and user will loses the context.

---

## Anatomy

{% include images.html name="anatomy-modal" %}


1. **Title**: The title provides a concise overview of the contents of the modal.
1. **Close icon**: Allow users to close the modal.
2. **Content**: The contents of the dialog. If there is too much content, consider using a drawer or a whole page instead.
3. **Hint/Shortcut** (optional): Provide an alternative to the current action. For example proposing to add contact(s) to a new group when user is viewing the add to existing group modal.   
4. **Actions**: Contain a primary and eventually a secondary action as well as the ability to cancel and close the modal. Copy used within a button should be unambiguous and concise, making it clear to the user what action will occur once the button is clicked.

---

## Autofocus

The first focusable item should be auto-focused within the modal.
{% include images.html name="modal-autofocus" %}

---

## Scrolling

The height of a dialog is determined by the content. Once it reaches a certain threshold, the body content will scroll while the header and footer remain fixed until the bottom of the modal dialog is reached.
{% include images.html caption="Header and footer should remain fixed while the body should be scrollable." name="modal-scrolling" %}

---

## Modal over Modal

Some cases may require a modal above another modal. Due to the various sizes and contexts that a modal can live in, modal over modal is limited to a maximum of 2. However, it's best to avoid this scenario. Be selective about when to use them and consider other design alternatives.
{% include images.html name="modal-over-modal" %}

---

## Types

### Productivity

Use this modal when there are simple productivity-related tasks to be completed. These mostly include form elements.
<a target="blank" href="https://docs.google.com/spreadsheets/d/168ljhKlfHvYJE68rxPE0e614wuitF6PGe8gtczzFfB4/edit?usp=sharing">See full list here.</a>
{% include images.html caption="Example of a productivity modal, user selection" name="modal-productivity-select-users" invisionID="352589140" %}
{% include images.html caption="Contact status creation modal" name="modal-productivity-add-status" invisionID="352589139" %}

---

### Dialog

Refers to a conversation between two people. In user interfaces, a dialog is a “conversation” between the system and the user to often requests confirmation and explain the repercussions of an action.
A dialog should:
- Present the action as a question in the header
- Explain the outcome of the action in the body
- Restate the action in the confirmation button
- Do not use cancel as a label, instead use the opposite statement I.E No, do not delete

Depending on the nature of the action, dialog can be of 3 types.

---

#### Confirm

Use this type of dialog to ask user's confirmation about non destructive actions or an action that can be easily reversed (changing a contact's person in charge, exports, archives, remove from exclusion list, <a target="blank" href="https://docs.google.com/spreadsheets/d/168ljhKlfHvYJE68rxPE0e614wuitF6PGe8gtczzFfB4/edit?usp=sharing">See full list here.</a>)
{% include images.html caption="Example of a confirm dialog" name="modal-dialog-confirm-unset-pic" invisionID="352589136" %}

---

#### Destructive Confirm

Use this type of dialog for destructive actions that are self contained or have a limited impact on other entities (delete status, delete outcome, delete export report, delete call recording,
<a target="blank" href="https://docs.google.com/spreadsheets/d/168ljhKlfHvYJE68rxPE0e614wuitF6PGe8gtczzFfB4/edit?usp=sharing">See full list here.</a>.
{% include images.html name="modal-dialog-confirm-destructive-recording" invisionID="352589138" %}
{% include images.html caption="Deleting a contact status require users to select a fallback" name="modal-dialog-confirm-destructive-status" invisionID="352589137" %}

---

#### Heavy Destructive Confirm

This type of modal should be used for deletion that will cause irreversible loss of information to an extend that might not be clear to the users.

To ensure that the user understand the consequences of his request, he should have to perform a set of actions (input a name, click a set of checkboxes) before proceeding with the deletion.

Those kind of dialogs should be used for actions such as deleting a web form, a web tracking or an email domain.
<a target="blank" href="https://docs.google.com/spreadsheets/d/168ljhKlfHvYJE68rxPE0e614wuitF6PGe8gtczzFfB4/edit?usp=sharing">See full list here.</a>
{% include images.html name="modal-dialog-confirm-hearvy-destructive-domain" invisionID="352589135" %}

---

### Drawer

Drawer modal are used to extend the interface without directing the user to a new page. This is often used on tables to display additional information or as an alternative to a page.
<a target="blank" href="https://docs.google.com/spreadsheets/d/168ljhKlfHvYJE68rxPE0e614wuitF6PGe8gtczzFfB4/edit?usp=sharing">See full list here.</a>
{% include images.html name="modal-drawer-edit-web-form" invisionID="352589134" %}

---

### Special Events

Special moments modals are used to attract users attention about a specific event or a necessary step. They have a large overlapping image and centered content.
{% include images.html name="modal-special-events-call-digima" invisionID="354842801" %}

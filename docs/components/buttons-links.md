---
layout: default
title: Buttons & Links
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

<div id="github-projects">test</div>

## Description

Buttons communicate what action will occur on a page when the user interacts with them.  Copy used within a button should be unambiguous and concise, making it clear to the user what action will occur once the button is clicked.

Avoid using terms like "Ok", "Submit" or "Validate" that could confuse users and instead describe the intended action ("Add to group", "Assign"...).

---

## Anatomy

{% include images.html name="anatomy-button" %}

1. **Container**: The color and style of the container should indicate the importance and function of the button.
2. **Label**: Button label should be unambiguous and concise, clearly explaining what happens when the button is clicked.


---

## Contained Buttons

### Primary

Primary contained buttons are used to highlight the most important action on a page. They should only appear once on a page and can be paired with a primary outlined button.

{% include images.html caption="Default primary button state" name="contained-button-primary-full-default" invisionID="370744648" %}

{% include images.html caption="Hovered primary button state" name="contained-button-primary-full-hover" invisionID="370744647" %}

{% include images.html caption="Focused primary button state" name="contained-button-primary-full-focused" invisionID="370744646" %}

---

### Secondary

Secondary buttons are always paired with a primary contained button and provide an alternative actions on a page.

{% include images.html caption="Default secondary button state" name="contained-button-secondary-outlined-default" invisionID="370744645" %}

{% include images.html caption="Hovered secondary button state" name="contained-button-secondary-outlined-hover" invisionID="370744644" %}

{% include images.html caption="Focused secondary button state" name="contained-button-secondary-outlined-focused" invisionID="370744643" %}

---

### Ternary

Ternary buttons are used for any action on a page that is not considered a primary or secondary action. In Digima they are mostly used for cancel actions in forms.

{% include images.html caption="Default ternary button state" name="contained-button-ternary-full-default" invisionID="370744642" %}

{% include images.html caption="Hovered ternary button state" name="contained-button-ternary-full-hover" invisionID="370744641" %}

{% include images.html caption="Focused ternary button state" name="contained-button-ternary-full-focused" invisionID="370744640" %}


{% include images.html caption="Default ternary outlined button state" name="contained-button-ternary-outlined-default" invisionID="370744636" %}

{% include images.html caption="Hovered ternary outlined button state" name="contained-button-ternary-outlined-hover" invisionID="370744635" %}

{% include images.html caption="Focused ternary outlined button state" name="contained-button-ternary-outlined-focused" invisionID="370744634" %}

---

### Danger

Danger button appears as a final confirmation for a destructive action such as deleting. These are found mostly in confirmation modals for any action that the user can not undo.

{% include images.html caption="Default danger button state" name="contained-button-danger-full-default" invisionID="370744639" %}

{% include images.html caption="Hovered danger button state" name="contained-button-danger-full-hover" invisionID="370744638" %}

{% include images.html caption="Focused danger button state" name="contained-button-danger-full-focused" invisionID="370744637" %}


{% include images.html caption="Default danger outlined button state" name="contained-button-danger-outlined-default" invisionID="370744633" %}

{% include images.html caption="Hovered danger outlined button state" name="contained-button-danger-outlined-hover" invisionID="370744632" %}

{% include images.html caption="Focused danger outlined button state" name="contained-button-danger-outlined-focused" invisionID="370744631" %}

---

### Split

A button with an attached dropdown menu used to group related options. The labelled section should show the majority use case, while the drop menu shows a list of related actions.

{% include images.html caption="Example of a split button" name="contained-button-split-primary-full" invisionID="370741582" %}
{% include images.html caption="Example of a split outlined button style" name="contained-button-split-primary-outlined" invisionID="370741581" %}

---

## Icon Only Buttons

These types of button should be used sparingly and only if the icon is widely used and understood. Hovering it should always display a tooltip that describes the action.

{% include images.html caption="Example of a well known icon that does not need a label" name="icon-only-button-3-dots" invisionID="370741593" %}
{% include images.html caption="Hovering an icon should display a tooltip" name="icon-only-button-table" invisionID="370741592" %}

---

## Text Buttons and links

Links communicate to the user where they will go or what they can expect to see once the link is clicked. Usually links take the user to another page or part of the app. However, links can also function as buttons.

{% include images.html caption="The most common type of links used though-out the app" name="text-link-text-only" %}
{% include images.html caption="Text links or buttons can be paired with an icon to emphasis a specific action" name="text-link-text-icon-white" invisionID="370741591" %}
{% include images.html caption="Links on a dark background use a different color to maintain a good contrast" name="text-link-text-icon-black" invisionID="370741590" %}
{% include images.html caption="Link with a dropdown icon" name="text-link-text-icon-dopdown" invisionID="370741589" %}

---

## States

### Disabled

Use a disabled button to indicate to a user that an action is not available. Hovering it should always display a tooltip that describes why an action is not available.

{% include images.html caption="Example of a disabled button. A tooltip and the not-allowed icon should be displayed on hover" name="button-state-disabled" invisionID="370741580" %}
{% include images.html caption="Example of a disabled link. A tooltip and the not-allowed icon should be displayed on hover" name="button-link-state-disabled-white" invisionID="370741578" %}
{% include images.html caption="Disabled links on a dark background use a different color to maintain a good contrast" name="button-link-state-disabled-black" invisionID="370741576" %}

---

### Loading

When there is a delay between the moment the user click the button and a feedback message is displayed, the clicked button should display a loading animation to let user know that
the form is been process.

{% include images.html caption="Example of a loading button state. Hovering it should display a not-allowed icon." name="button-state-loading" invisionID="370741579" %}
{% include images.html caption="Example of a loading link state. Hovering it should display a not-allowed icon." name="button-link-state-loading-white" invisionID="370741577" %}
{% include images.html caption="Loading links on a dark background use a different color to maintain a good contrast" name="button-link-state-loading-black" invisionID="370741575" %}

---

## Sizes

Buttons are available in 2 size: small and medium.

{% include images.html caption="Example of small buttons" name="button-sizes-small" invisionID="370744630" %}
{% include images.html caption="Example of medium buttons" name="button-sizes-meduim" invisionID="370744629" %}

---

## Groups

Use grouped buttons when there is a close relationship between a number of buttons. Buttons should be grouped logically into sets based on usage and importance.

The most important action should be listed first as a primary button, if a complementary action is available it should be listed next as a secondary button and finally the ternary action.

{% include images.html caption="Example of a 2 buttons group." name="button-group-2-buttons" invisionID="370741574" %}
{% include images.html caption="Example of a 3 buttons group." name="button-group-3-buttons" invisionID="370741573" %}
{% include images.html caption="When more that 3 actions are possible they should be consolidated inside a drop-down menu." name="button-group-more-option" invisionID="370741572" %}

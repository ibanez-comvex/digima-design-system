---
layout: default
title: Profiles
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

Profile pages regroup information about a contact or a company.
- [Inspect the contact profile](https://projects.invisionapp.com/d/main#/console/17798086/370025166/preview)
- [Inspect the company profile](https://projects.invisionapp.com/d/main#/console/17853042/370243914/preview)

## Anatomy

{% include images.html name="anatomie-profile" %}

---

### 1. Title Card

The title cards helps define the uppermost part of a page. It is the first section that users see before scrolling and it provides the core information that users need when viewing the page.

{% include images.html name="anatomie-title-cards" %}

[Learn more about title cards]({{site.baseurl}}/docs/components/title-cards.html)

---

### 2. Blocks

Block are used on profiles to group similar information together. They can be expended, collapsed and reorder.

- [Learn more about blocks anatomy and behavior]({{site.baseurl}}/docs/components/containers.html#blocks)
- [Learn more about tile anatomy and behavior]({{site.baseurl}}/docs/components/containers.html#tiles)

#### Notes

{% include images.html caption="Default notes block state" name="anatomie-blocks-notes-default" invisionID="369022267" %}

{% include images.html caption="Editing notes block state" name="anatomie-blocks-notes-editing" invisionID="369022254" %}

---

#### Details

{% include images.html caption="Default detail block state" name="anatomie-blocks-details-default" invisionID="369022266" %}

{% include images.html caption="Editing detail block state" name="anatomie-blocks-details-editing" invisionID="369022265" %}

{% include images.html caption="Managing detail block fields state" name="anatomie-blocks-details-managing" invisionID="369022264" %}

---

#### Company

{% include images.html caption="Empty company block state" name="anatomie-blocks-company-empty" invisionID="369022263" %}

{% include images.html caption="Associated company block state" name="anatomie-blocks-company-associated" invisionID="369022262" %}

{% include images.html caption="Expended company block state" name="anatomie-blocks-company-expanded" invisionID="369022261" %}

---

#### Groups

{% include images.html caption="Empty group block state" name="anatomie-blocks-group-empty" invisionID="369022260" %}

{% include images.html caption="Associated groups block state" name="anatomie-blocks-group-associated" invisionID="369022257" %}

---

#### Call Campaigns

{% include images.html caption="Empty call campaign block state" name="anatomie-blocks-call-campaign-empty" invisionID="369022259" %}

{% include images.html caption="Associated call campaigns block state" name="anatomie-blocks-call-campaigns-associated" invisionID="369022256" %}

---

#### Contacts

{% include images.html caption="Empty contact block state" name="anatomie-blocks-contact-empty" invisionID="369022258" %}

{% include images.html caption="Associated contacts block state" name="anatomie-blocks-contact-associated" invisionID="369022255" %}

---

### 3. Timeline

The timeline display contact upcoming and past activities in a chronological order. It can be exported and filtered.

{% include images.html name="anatomie-timeline" %}

- [Learn more about timeline]({{site.baseurl}}/docs/patterns/timeline.html)
- [Learn more about timeline cards]({{site.baseurl}}/docs/components/containers.html#cards)

---

## 4. Widgets

Widgets are special modals that let users interact with a contact and register past and future activities. They can be display at 3 different sizes.

### Reduced（default）

When reduced, a widget is displayed at the bottom right corner of the screen and scrolls with the page.
A reduced widget has a max-width of 650px and its height varies depending on its content.

{% include images.html name="widget-behavior-windowed" %}

---

### Full Screen

When in full screen, a widget is centered within the browser window and an overlay is display behind it.
The widget dimensions should be relative to the browser window width and height.

{% include images.html name="widget-behavior-fullscreen" %}

---

### Minimized

When minimized only the header of the widget is visible. The width of the widget is also reduced.

{% include images.html name="widget-behavior-minimize" %}

---

### Leaving an Edited Widget

If a user tries to open a widget while another one is currently been edited, a message should be displayed warning users that changes made to the widget will be lost.

The same message should be displayed if a user try to navigate away from the page while a widget is been edited.

{% include images.html name="widget-behavior-leaving" %}

---

### Send an Email

Users can send emails to contacts using the email widget.

{% include images.html caption="Screen displayed when the email feature is not activated" name="widget-email-no-subscription" invisionID="369032540" %}

{% include images.html caption="Default email widget" name="widget-email-default-windowed" invisionID="369032543" %}

---

### Make a Call

The call widget can have various states.

{% include images.html caption="Screen displayed when no call features are activated" name="widget-call-no-subscription" invisionID="389559766" %}

{% include images.html caption="Screen displayed when no phone number are registed for the contact" name="widget-call-default-no-phone-number" invisionID="389555867" %}

{% include images.html caption="Screen displayed when a contact has a call restriction" name="widget-call-default-call-restriction" invisionID="389555865" %}

{% include images.html caption="Screen displayed when a contact is awaiting a call back" name="widget-call-default-call-back" invisionID="389555864" %}

{% include images.html caption="Screen displayed when no call outcome has been registered after the previous call" name="widget-call-default-add-call-outcome" invisionID="389555863" %}

{% include images.html caption="Default call widget" name="widget-call-default-windowed" invisionID="369032542" %}

{% include images.html caption="Default call widget when all call features are activated and phone number are registered" name="widget-call-default-windowed-dropdown-opened" invisionID="389555862" %}

{% include images.html caption="Screen displayed when the selected contact phone number is in the exclusion list" name="widget-call-default-windowed-in-the-exclusion-list" invisionID="389974679" %}

{% include images.html caption="The call from dorpdown should display the calling methods even when no phone number are registered for a particular call method" name="widget-call-default-windowed-dropdown-no-phone-number" invisionID="389555861" %}

{% include images.html caption="Screen displayed when the browser call method is selected and no phone numbers are assiciated with it" name="widget-call-default-windowed-no-twillo-number" invisionID="389974678" %}

{% include images.html caption="Screen displayed when the Call Digima call method is selected and no phone numbers are assiciated with it" name="widget-call-default-windowed-no-call-digima-subscription" invisionID="389974677" %}

---

#### Call Bar

When the "call contact" button is clicked the call widget should disappear and the call bar should be display at the bottom of the screen.

Users should be able to navigate to any page. Notes written on the widget should be transferred to the call bar.


{% include images.html caption="The call bar should always be displayed a the bottom of the screen" name="widget-call-bar-position" %}

{% include images.html caption="Call bar while calling from a call campaign" name="widget-call-bar-Call-campaign" invisionID="369033493" %}

{% include images.html caption="Call bar while calling from outside of a call campaign" name="widget-call-bar-direct-call" invisionID="369033497" %}

{% include images.html caption="User can type note directly from the call bar. Notes taken on the call widget should be transferred to the call bar" name="widget-call-bar-direct-call-notes" invisionID="369033496" %}

{% include images.html caption="Hover state on the hangup button" name="widget-call-bar-direct-call-hangup-hover" invisionID="369033495" %}

{% include images.html caption="Hover state on the microphone button" name="widget-call-bar-direct-call-microphone-hover" invisionID="369033494" %}


---

### Log an Activity

Users can register a call, email, meeting or a custom activity using the log an activity widget.

{% include images.html name="widget-log-default-windowed" invisionID="369032541" %}

---

## Layout

### Left Column

The left Column has a max-width of 25% and a min-width value of 400px and the following flex value: 25% 0 0.

{% include images.html name="layout-profile-left-col"%}

---

### Central Column

The center Column has a fluid width with a flex-grow value of 1.

{% include images.html name="layout-profile-center-col" %}

---

### Right Column

The right Column has a max-width of 500px and the following flex value: 0 0 25%.

{% include images.html name="layout-profile-right-col" %}

To let user focus on important content on smaller screen, the right column can be hidden.

{% include images.html name="layout-profile-collapse" %}

When the right column is hidden, the central column extend to fill the newly freed space.

{% include images.html name="layout-profile-right-col-collapsed" %}

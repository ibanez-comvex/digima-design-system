---
layout: default
title: Table Cards
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
Table cards show recently used/viewed data on top of their corresponding table. They provide a quick and easy way to access frequently used entities.

They should be easy to scan and provide limited, relevant and actionable information. Elements within a card should be placed in a way that clearly indicates hierarchy.

---

### Anatomy

{% include images.html name="anatomy-cards" %}

1. **Container**: Card containers hold a card elements, their size is determined by the space those elements occupy. Card elevation is expressed by the container.
2. **Content/Title**: Can include either a title like a contact group/call campaign name or an email template.
3. **Supporting text header**: The email template name in email template table card.
4. **Last viewed/used date**: Lasted viewed/used date.
5. **Menu**: Menus contain related actions. They are typically placed in the lower-right corner of a card.

---

### Types

#### Contact Groups

The contact group table cards display the lasted viewed group. A contact group is considered as "viewed" when the current logged in user has displayed a contact group detail page.

{% include images.html caption="Contact group table card default state" name="type-cards-table-groups-default" invisionID="363135152" %}

{% include images.html caption="Contact group table card hover state" name="type-cards-table-groups-hover" invisionID="363135147" %}


#### Email Templates

The email template table cards shows the lasted used template. The word "used" means that an email template has been used in a classic email or a bulk email regardless if the email has been sent or not.

{% include images.html caption="Email template table card default state" name="type-cards-table-email-template-default" invisionID="363135149" %}

{% include images.html caption="Email template table card hover state" name="type-cards-table-email-template-hover" invisionID="363135148" %}


#### Call Campaigns

The call campaign table cards show the lasted used campaign. A call campaign is considered as "used" when at least one call has been initiated from within the campaign.

{% include images.html caption="Call Campaigns table card default state" name="type-cards-table-call-campaigns-default" invisionID="363135151" %}

{% include images.html caption="Call Campaigns table card hover state" name="type-cards-table-call-campaigns-hover" invisionID="363135150" %}

{% include images.html caption="Hovering the progress bar should display the current progress in percentage" name="type-cards-table-call-campaigns-percentage" invisionID="363135146" %}

{% include images.html caption="A public call campaign" name="type-cards-table-call-campaigns-public" invisionID="363135145" %}

{% include images.html caption="A call campaign accessible only to the current logged in user" name="type-cards-table-call-campaigns-private-to-user" invisionID="363135144" %}

---

### Groups

#### Overview

Table cards are grouped in chronological order and are limited to a maximum of 6 on large screens.

{% include images.html name="group-cards-table-latest" %}

#### Extended View

Users can display cards up to a month from the current date by clicking on the see more link.

{% include images.html name="group-cards-table-all" %}

---

### Layout

Up to 6 cards can be displayed simultaneously on large screens. As the available screen space decrease cards are hidden from view.


{% include images.html caption="Large screens" name="layout-cards-table-large" %}

{% include images.html caption="Medium screens" name="layout-cards-table-meduim" %}

{% include images.html caption="Small screens" name="layout-cards-table-Small" %}

{% include images.html caption="User can vertically scroll the card container using arrow contols to display the hidden cards when less than 6 cards are been displayed." name="group-cards-table-small" invisionID="386481569" %}
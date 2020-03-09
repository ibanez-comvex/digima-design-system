---
layout: default
title: Main Navigation
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

The main navigation is used for branding, navigation and actions. It is a persistent UI element that appear at the top of each screen and stay in view upon scroll.

It provide a reliable way to guide users through the app and has a consistent position and content to increase familiarity.

---

## Anatomy

{% include images.html name="anatomy-main-navigation" invisionID="363641585" %}

1. **Logo**: Use to brand the application. Clicking on it should navigate to the dashboard page.
2. **Navigation Links**: Top level navigation links.
3. **Action items**: List all the global actions like reminders, notification, exclusions, exports and imports reports. Actions are consolidated into the tool menu when the screen size is reduced.
4. **Profile menu**: Provide a link to the user's profile and account settings, an external links to support or legal pages and a way for users to logout.

---

## Elements

{% include images.html caption="Main navigation sub-categories" name="elements-main-menu-subcategories" invisionID="363641535" %}

{% include images.html caption="Tool menu" name="elements-main-menu-tools" invisionID="363641534" %}

{% include images.html caption="Profile and account settings menu" name="elements-main-menu-profile" invisionID="363641533" %}

---

<!-- ## Nesting Actions

When a screen is resized, the main navigation bar resizes with it. Actions are consolidated into the tool menu.
The actions move to the tool menu from right to left, making the most-used action the last to be moved to the tool menu.

{% include images.html name="behaviour-main-menu-actions" invisionID="363644350" %}

{% include images.html caption="Actions are consolidated into the tool menu when the screen size is reduced" name="behaviour-main-menu-actions-collapse" invisionID="363644349" %} -->


## Behavior

When the screen is resized, the main navigation bar resizes with it. When there not enought space to fit all the menu elements, the main menu navigation links should be consolidated inside
a sidebar. 

{% include images.html caption="Menu links are consolidated under a single menu item" name="behavor-main-navigation-mobile" invisionID="396835657" %}

{% include images.html caption="Clciking the menu link should all avalable menu items" name="behavor-main-navigation-mobile-menu" invisionID="396835656" %}

---

### Mobile Menu Categories States

{% include images.html caption="Category default state" name="behavor-mobile-menu-categories-closed" invisionID="396835655" %}

{% include images.html caption="Category open state" name="behavor-mobile-menu-categories-open" invisionID="396835654" %}

{% include images.html caption="Category hover state" name="behavor-mobile-menu-categories-hover" invisionID="396835653" %}

{% include images.html caption="Category active state" name="behavor-mobile-menu-categories-active" invisionID="396835652" %}

---

### Mobile Menu Sub-Categories States

{% include images.html caption="Sub-category default state" name="behavor-mobile-menu-sub-categories-default" invisionID="396835743" %}

{% include images.html caption="Sub-category hover state" name="behavor-mobile-menu-sub-categories-hover" invisionID="396835742" %}

{% include images.html caption="Sub-category active state" name="behavor-mobile-menu-sub-categories-active" invisionID="396835741" %}
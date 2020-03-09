---
layout: default
title: Containers
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

Containers are surfaces that display content and actions about a single topic.

They should be easy to scan for relevant and actionable information. Elements, like text and icons, should be placed on them in a way that clearly indicates hierarchy.

---

## Tile

### Anatomy

{% include images.html name="anatomie-tile" %}

1. **Avatar**: (optional) Help users quickly identity what the tile is about
2. **Header text**: The main element that identifies the tile
3. **Supporting text**: (optional) Secondary text
4. **Action**: (optional) Hovering the tile can revels related actions

---

### Types

#### Basic

Use to list simple information like contact groups or call campaigns. Related actions can be displayed on hover.

{% include images.html caption="Default state" name="type-tile-basic-default" invisionID="368269583" %}

{% include images.html caption="Hover state" name="type-tile-basic-hover" invisionID="368269581" %}

{% include images.html caption="Example of an basic tile with long text" name="behavior-block-truncation-basic-default" invisionID="368775570" %}

{% include images.html caption="When hovered extra space should be reserved to the left of the action link" name="behavior-block-truncation-basic-hover" invisionID="368775568" %}

---

#### Avatar

Use to list additional information like a website URL for a company. Related actions can be displayed on hover.

{% include images.html caption="Default state" name="type-tile-avatar-default" invisionID="368269582" %}

{% include images.html caption="Hover state" name="type-tile-avatar-hover" invisionID="368269580" %}

{% include images.html caption="Example of an avatar tile with long text" name="behavior-block-truncation-avatar-default" invisionID="368775571" %}

{% include images.html caption="When hovered extra space should be reserved to the left of the action link" name="behavior-block-truncation-avatar-hover" invisionID="368775569" %}

---

#### Filters

Use to display filters information.

{% include images.html caption="Default state" name="type-tile-filters" invisionID="408364167" %}

{% include images.html caption="Hover state" name="type-tile-filters-tile-hover" invisionID="408364168" %}

{% include images.html caption="Hover state on remove icon" name="type-tile-filters-close-hover" invisionID="408364166" %}

{% include images.html caption="Empty state" name="type-tile-filters-empty-state" invisionID="408364165" %}


---


## Cards

---

### Types

#### Basic Cards

Basic cards are mostly used in timelines to display important contact activities. These activities are usually initiated by a contact like an email open or a web visits activity.

{% include images.html caption="Status update" name="type-card-basic-status-update" invisionID="368524811" %}

{% include images.html caption="Profile update" name="type-card-basic-profile-update" invisionID="369021779" %}

{% include images.html caption="Web form submission" name="type-card-basic-web-form-submissions" invisionID="369021778" %}

{% include images.html caption="Web tracking" name="type-card-basic-web-tracking" invisionID="369021777" %}

{% include images.html caption="Email sent" name="type-card-basic-email-sent" invisionID="369021776" %}

{% include images.html caption="Email opened" name="type-card-basic-email-opened" invisionID="369021775" %}

{% include images.html caption="Email clicked" name="type-card-basic-email-clicked" invisionID="369021774" %}

{% include images.html caption="Call" name="type-card-basic-call" invisionID="369021773" %}

{% include images.html caption="Logged activity" name="type-card-basic-log-activity" invisionID="369021772" %}

---

#### Muted Cards

Muted cards are mainly used in timelines to display less important information. These activities are usually initiated by users like adding a contact to a group or a call campaign.

{% include images.html caption="Example of a muted card type" name="type-card-muted" invisionID="368524810" %}

---

### Anatomy

{% include images.html name="anatomie-card" %}

---

#### 1. Header

Card headers help users identify a card activity at a glance by displaying the name of the activity and an icon.
{% include images.html name="element-card-header" invisionID="368524809" %}

---

#### 2. Description

Card descriptions give users details information about an activity. They can include text links.
{% include images.html name="element-card-description" invisionID="368524805" %}

---

#### 3. Timestamp

Every timeline card should include the date and time at which the related activity occurred.
{% include images.html name="element-card-timestamp" invisionID="368524808" %}

---

#### 4. Menu (optional)

Cards containing actions should be consolidated inside a 3 dots menu.
{% include images.html caption="Example of a card containing a menu" name="element-card-menu-closed" invisionID="368524807" %}
{% include images.html name="element-card-menu opened" invisionID="368524806" %}

---

#### 5. Sections (optional)

Some activities can contain additional information like a recording or a call outcome for call activities.
Each information should be display in a separate section and should stack on top of each other.
{% include images.html name="element-card-sections" invisionID="368524804" %}

---

#### 6. Expendable Text (optional)

To keep vertical scrolling to a minimum, text that are longer than 4 lines should be truncated. Users can click on a link to display the full version.

{% include images.html caption="Example of a truncated text" name="element-card-expandable-text-closed" invisionID="368524803" %}
{% include images.html name="element-card-expandable-text-opened" invisionID="368524802" %}

---

#### 7. Footer (optional)

Card footers show secondary information as well as links and actions. They can expend to reveal related content like the submitted values of a web form submission or the updated values for a profile update activity.

{% include images.html caption="Example of a footer containing textual information" name="element-card-footer-info" invisionID="368524801" %}
{% include images.html caption="Example of a footer containing an action link" name="element-card-footer-action" invisionID="368524800" %}
{% include images.html caption="Expendable footer" name="element-card-footer-expandable-closed" invisionID="368524799" %}
{% include images.html caption="Expended footer" name="element-card-footer-expandable-open" invisionID="368524798" %}

---

## Behavior

### Collapse

Similar activities can be collapsed to save vertical scrolling space.

{% include images.html caption="Example of collapsed group of status update activities" name="type-card-basic-collapsed" invisionID="368529717" %}

{% include images.html name="type-card-basic-uncollapse" invisionID="368529716" %}

---

## Blocks

### Anatomy

{% include images.html name="anatomie-block" %}

1. **Drag handle**: (optional) Give users the ability to reorder blocks
2. **Collapse icon**: (optional) Clicking this icon should collapse/uncollapse the block
3. **Header text**: The main block identifier. Clicking this should collapse/uncollapse the block
4. **Actions**: (optional) Blocks can contain actions like adding a contact to a group, a call campaign or a company
5. **Content**: Blocks mainly contain [form fields]({{site.baseurl}}/docs/components//text-fields.html) and [tiles]({{site.baseurl}}/docs/components/containers.html#tile)
6. **Show/hide details**: (optional) To limit vertical scroll, blocks can be truncated. Users can choose to expand a block by clicking the "show details" link

---

### Behavior

#### Collapse

Blocks can be collapse/uncollapse by either clicking the arrow icon or the block header text. Some blocks can be collapsed by default to save vertical scrolling space.

{% include images.html caption="Example of a collapsed block" name="behavior-block-collapsable-closed" invisionID="368524797" %}
{% include images.html caption="Example of an uncollapsed block" name="behavior-block-collapsable-opened" invisionID="368524796" %}

---

#### Expend

In order to save vertical scrolling space without hiding critical information, some blocks can be truncated.

For example the company block on a contact profile only shows the company name and URL by default, users can choose to expend the block to show additional company properties.

{% include images.html caption="A truncated block example" name="behavior-block-expendale-closed" invisionID="368524790" %}

{% include images.html caption="Clicking the show details button reveals addition information" name="behavior-block-expendale-opened" invisionID="368524789" %}

---

#### Inline Edition

Modifying a field value contained within a block should display a save and cancel button. If a field is focused but no value is modified/entered, the block should remain in its default state.

{% include images.html caption="Editing notes on a contact profile" name="behavior-block-editable-notes" invisionID="368524795" %}

{% include images.html caption="An example of a block been edited" name="behavior-block-editable-details" invisionID="368524794" %}

---

#### Reordering Blocks

Users can drag a block by clicking the mouse button, then moving the mouse while keeping the mouse button pushed down.

When a block is dragged, the dragged block and all surrounding blocks should be automaticity collapsed. As the block is dragged, a target should be display showing the users where the block can be placed.

{% include images.html caption="Default block state" name="behavior-block-drag-default" invisionID="368524793" %}

{% include images.html caption="Drag state" name="behavior-block-drag-dragging" invisionID="368524792" %}

{% include images.html caption="The drag target show users where dragged block can be placed" name="behavior-block-drag-target" invisionID="368524791" %}

{% include images.html name="behavior-block-dragging" %}

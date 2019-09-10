---
layout: default
title: Filters
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

Page headers are meant to provide the core information a user needs to quickly identidy a page. This pattern combine other components like headings, actions, tags, and tabs to create a more consistent user experience.

## Anatomy

{% include images.html name="anatomie-page-header" %}

1.  **Back Arrow**: Allow users to move back to the previous navigation level.
2.  **Heading**: Headings summarizes the page content. Heading truncation should follow the truncation rules.
3.  **Tags**: Displays the current state of a page (for example public/private or open/close for a call campaign).
4.  **Sub-sections**: A page can contain a secondary navigation that users can navigate to using tabs.
5.  **Actions**: Actions modify the unerlying page and its content. Only primary, secondary and drop-down buttons should be used. Sub-sections actions should alway be displayed under the page header. 

---

## Types


### Heading Only

This is the simplest version of the page header pattern.
{% include images.html name="page-header-types-title-only" invisionID="382635792" %}


### Heading as Tabs

When multiple headings are present, they act as first level navigation tabs. Only 2 headings can be present at the same time and they cannot contain sub-categories. 

This type of page header should only be used for pages that haves a stong relationship and where users would benefit from the ablity to quickly navagate between 2 pages. 
{% include images.html name="page-header-types-title-tabs" invisionID="382635791" %}


### With Secondary Information

Secondary information can be displayed under the page title when they provide usefull overall insight about a page.
{% include images.html name="page-header-types-extra-information" invisionID="382635790" %}


### With a Secondary Navigation

Secondary navigation within a page header should be displayed as tabs under the page title.
{% include images.html name="page-header-types-tabs" invisionID="382635793" %}


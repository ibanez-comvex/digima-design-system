---
layout: default
title: Tables
parent: components
nav_order: 6
---

# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


## Description

Data tables display information in a grid-like format of rows and columns. They organize information in a way that facilitate understanding and help users gather insight about a particular set of data. They should be easy to scan.

Additional resources:
- <a target="blank" href="https://projects.invisionapp.com/d/main#/projects/prototypes/18103131">List of Digima table designs.</a>
- <a target="blank" href="https://docs.google.com/spreadsheets/d/17GaNYlvDj1Ktskgd_8b8J8hXkqG-muui1J-bqrA9db0/edit#gid=0">Digima table default configuration.</a>

---

## Anatomy

{% include images.html name="anatomy-tables" %}

---

### 1. Header

Table headers contains global information and actions about an underling table.


#### Bulk actions

Bulk actions should be used for actions a user frequently makes across multiple objects at once. Bulk actions are only available when at least one row is selected.
They should be visible at all times and ordered from left to right from the most used actions to the least used ones.

When no records are selected, bulk actions should be disabled. Hovering a disabled bulk action should inform the user that they need to select at least one record.
{% include images.html caption="Example of disabled bulk acton hover state" name="anatomy-tables-bulk-actions-disabled" %}

When at least one record is selected all available bulk action should become clickable.
{% include images.html name="anatomy-tables-bulk-actions-row-selection" %}

Bulk actions should be visible at all times, however when the space available is insufficient, they can be consolidated into a dropdown button.
{% include images.html name="anatomy-tables-bulk-actions-more-button" %}

---

#### Search

Tables with a large number of data spawning multiple pages should be searchable. The search should be place above the table and search results should be visible within the table.

In order to provide continue feedback to users, the table should display results as users type their search query.  

{% include images.html name="anatomy-tables-Search" %}

---

#### Table Records Counter

When no rows are selected, the table row counter displays the currently available number of rows across all pages.

{% include images.html caption="Currently available rows across all pages" name="anatomy-tables-Counter-default" %}

When row are selected, the counter displays the number of currently selected rows and a link to clear the selection.

{% include images.html caption="Currently selected rows" name="anatomy-tables-Counter-selected" %}

---

### 2. Column headers

Column headers describes the content in the column. They should be limited to a single word and be as concise and as descriptive as possible.

To keep table scannable while still providing necessary information for users, there should be no more than 6 columns for full-width tables.

---

#### Order

Content should be order as follow:

- Selecting/re-ordering: This column should always be visible even when the table is horizontally scrollable.  

- Table identifier: Usually a name that uniquely identifies a specific records.

- Secondary information: To be displayed right after the table identifier. Secondary information should be shown from left to right in order of importance.

- Dates: Dates are visually heavy and often less important than other data within a row. For that reason, they should be the second to last column in a table (if row actions are available).

- Actions: Action buttons should be the last column. They should be always visible even when the table is horizontally scrollable.

{% include images.html caption="Example of a typically table column order " name="anatomy-tables-columns-order" %}

---

#### Alignment

Content should be left aligned except when using a different alignment helps with comprehension. For example, numeric data is easier to read when right aligned. The alignment of column headers should match the content alignment.

{% include images.html caption="Example of a column alignment" name="anatomy-tables-columns-alignment" %}

---

#### Sorting

Some table columns can be sorted to help users find a specific information.
Usually viewing the most recent event or object first is more useful that the opposite. When in doubt, a table should be sorted in descending dates.

To indicate which column is sorted by default, a downward or upward arrow icon should be placed next to the column header’s name.

{% include images.html caption="Hover state on a non sorted column header" name="anatomy-tables-columns-sorting-hover" invisionID="376171415" %}

{% include images.html caption="Example of a column sorted in ascending order" name="anatomy-tables-columns-sorting-sorted-descending" invisionID="376171414" %}

{% include images.html caption="Example of a column sorted in descending order" name="anatomy-tables-columns-sorting-sorted-ascending" invisionID="376171413" %}

{% include images.html caption="Hover state on a column sorted in descending order" name="anatomy-tables-columns-sorting-sorted-ascending-hover" invisionID="376171412" %}

---

#### Select/Unselect action

When at least one record is selected, users can clear the selection by using the unselect action. When no record are selected, clicking this button will select all visible record on the page.

{% include images.html name="anatomy-tables-columns-unselect" %}

---

#### Info

Because of the limited space available, some column header's name can sometimes be too generic. To provide more information to users, additional details can be displayed in a tooltip when hovering the info icon.

{% include images.html name="anatomy-tables-columns-info" %}

---

#### Error

Mainly used in import report to indicate that a column could not be imported. Hovering the error icon should indicate the reasons why the error occurred.

{% include images.html name="anatomy-tables-columns-error" %}

---

### 3. Rows


#### Individual row selection

A row can be selected by clicking its correspond checkbox. When selected, the row should be highlighted and if available, the table bulk actions should become clickable.

{% include images.html name="anatomy-tables-row-selection" %}

---

#### Cross page selection

Since tables in Digima are paginated, clicking the table header checkbox should only select all the rows displayed on the current page. Users have the ability to then select the entire set of data across all pages by clicking the "Select all" link in the table notification banner.

{% include images.html name="anatomy-tables-row-cross-page-selection" %}

---

#### Reordering

Some table rows can be reorder. When a row is dragged, a target should be displayed to help user identify where the dragged row can be released.

{% include images.html caption="Example of a table where rows can be reordered" name="anatomy-tables-row-reordering-default" %}

{% include images.html caption="When a row is dragged, a target should be displayed" name="anatomy-tables-row-reordering-drag" %}

---

#### Expandable/Collapsable 

Rows can be consolidated into a single row that can be expand/collapsed to reveal/hide additional related information. When the "plus" icon is clicked,
any previously expanded row should be automatically collapsed.

{% include images.html caption="Clicking the plus icon expands the table to reveal more information" name="anatomy-tables-row-expandable" invisionID="396218082" %} 

{% include images.html caption="Clicking the close icon collapses the table to hide the additional information" name="anatomy-tables-row-collapsable" invisionID="396218081" %} 

---

#### Actions

Actions a user can take from an individual table row are displayed in the far right column.

The most frequently used action should be listed first. Destructive, single use actions (delete) should be last. Only frequently used actions and action that can be taken with the current context should be displayed.

{% include images.html caption="Example of a table with a single row action" name="anatomy-tables-row-action-hover" %}

When an action in unavailable, the corresponding button should be visually disabled and a tooltip describing why the action cannot be performed should be displayed.

{% include images.html  caption="Example of a role restricted row action" name="anatomy-tables-row-action-hover-disabled" %}

Up to 2 actions can be displayed for a single row.

{% include images.html name="anatomy-tables-row-action-3-actions" %}

When more than 2 actions are possible per row, they should be consolidated into a separate menu.

{% include images.html name="anatomy-tables-row-action-3+" %}

---

#### Null states

There are 3 null states used in table:

- Em dash (—) to show a null state for content without numeric value.
- Zeros (0) are used for numeric content (ex. An email that has an opens count of 0).
- N/A (rare) Use when the content to be displayed is not relevant to that row of data. If content is not applicable consider whether these objects belong in the same table.

{% include images.html caption="Example of a table containing Em dash to signify empty states" name="anatomy-tables-row-empty-state" %}

---

#### Loading State

When a user visit a page containing a table, placeholder content should be displayed instead of empty tables until content is loaded.

{% include images.html caption="Table showing placeholder content" name="anatomy-tables-row-placeholder" %}

---

### 5. Footer

Table footer regroups table density and navigation actions.

#### Data Per Page Density

Users can modify the number of table row displayed on each page to fit their needs. 3 density options are available for every paginated table:
- 25
- 50
- 100

{% include images.html name="anatomy-tables-row-selection-data-density" %}

---

#### Pagination

Pagination controls provide access to all pages, while indicating that more pages exist.

They display:

- Number of rows per page
- Left and right arrows for navigating pages

Pagination should be reflected in the page URL so users can share links to the correct page and use browser back/forward buttons to navigate through pagination history.

{% include images.html caption="Current page style" name="anatomy-tables-row-selection-pagination-current" invisionID="376171418" %}

{% include images.html caption="Hover state on page" name="anatomy-tables-row-selection-pagination-hover" invisionID="376171417" %}

{% include images.html caption="Pagination navigation arrow" name="anatomy-tables-row-selection-pagination-arrow" invisionID="376171416" %}

---

## Filters

Tables can be filtered using the left filter side bar. <a target="blank" href="https://projects.invisionapp.com">Learn more about filtering.</a>

{% include images.html caption="The default tooltip style" name="tables-filter" %}

---

## Density

Data tables can be displayed at varying density to facilitate scanning and help users find the information they are looking for.

### Condensed

Mostly used on tables where users are likely to be browsing a large number of data like the contact, companies or users tables.

{% include images.html caption="The default tooltip style" name="anatomy-tables-density-condensed" %}

---

### Cozy

This style is used on tables that have some or all the characteristics of a multiline table without actually have data combined into multiple lines.

{% include images.html caption="The default tooltip style" name="anatomy-tables-density-cozy" %}

---

### Conformable (Multi Lines)

Used on tables where:
- Users will likely spend most of their time browsing only the most recent data (Emails)
- There is only a few or no filtering options which would discourage users from browsing a table (Call campaigns)
- Combining related and complementary data can make that table more readable and easier to scan (Web tracking, Web form)
- Only a limited number of data is likely to be displayed (contact status)

{% include images.html caption="Example of a comfortable data table style" name="anatomy-tables-density-confortable-users" %}

{% include images.html name="anatomy-tables-density-confortable-emails" %}

---

## Behavior

### Responsive

Tables are usually presented at full width, but can also adapt to the space available.
Column width can be reduced until the minimum supported browser width is reached, at which point tables become horizontally scrollable.

Actionable columns such as checkbox, drag handle and action button columns should always remain visible even when the table is horizontally scrollable.

{% include images.html caption="Example of an horizontally scrollable table" name="responsive-tables-fix-col" invisionID="376171419" %}

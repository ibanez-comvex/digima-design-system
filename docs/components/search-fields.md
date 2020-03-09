---
layout: default
title: Search Fields
parent: components
nav_order: 4
---

# {{page.title}}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Description

Use search fields to allow users to quick filter a set of data. Search fields are mostly present above tables and long scrollable lists like users, contacts or status lists.

---

## Anatomy

{% include images.html name="anatomie-search" %}

1.  **Leading Icon**: Help identify the field as a search field.
2.  **Trailing Icon**: As soon as users start typing, a close icon should be display to give users the ability to clear the field.
3.  **Placeholder**: The placeholder copy should help users predict how the search will behave (Search for [object been searched]).

---

## Best practices and Behavior

- Users should not need to hit enter to start searching. Content should be dynamically updating as text is inputed.
- The search should be cleared and the filtered content should return to its original state only when the clear icon is clicked or the inputed text is manually removed.
- Navigating away form the filtered content and them back using the browser or a UI back button should not clear the search.
- If no results are found an empty state should be displayed
- The search field should always sit directly above the content that is been filtered.
- A message informing users that the search is been process should always be present, even if the processing itself is instantaneous.

---

## States

{% include images.html caption="Default state" name="type-search-default" invisionID="352589689" %}

{% include images.html caption="Hover state" name="type-search-hover" invisionID="352589688" %}

As soon as the user start typing a loading message should be displayed.
{% include images.html caption="Loading state" name="type-search-typing" %}


{% include images.html caption="Results found" name="type-search-filled-results-found" %}


{% include images.html caption="No results found - empty state" name="type-search-filled-no-results" %}


{% include images.html caption="Error state" name="type-search-filled-error" %}

---

## Search In Select

Select field options can be filtered by using a dedicated search.

{% include images.html caption="A search filed inside a list of users" name="type-search-dropdown-default" invisionID="396417328" %}

{% include images.html caption="Example of a search retruning no results" name="type-search-dropdown-no-results" invisionID="396417327" %}

{% include images.html caption="Example of a search returning an error" name="type-search-dropdown-error" invisionID="396417326" %}
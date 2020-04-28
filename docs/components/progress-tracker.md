---
layout: default
title: Progress Tracker
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

Use a progress tracker to guide users through steps or actions across multiple screens, in order to complete a task. 
Progress tracker tasks must have 3 or more steps. The tracker shows users where they are in the process, and can be used to navigate through the process by selecting already visited steps.


---

## Anatomy

{% include images.html name="anatomie-progress-tracker" %}

1. **Visited step**: Steps that have already been visited have clickable links, so that users can navigate back to them.
2. **Current step**: Shows the current step that the user is on.
3. **Unvisited step**: Shows steps that user has not visited yet.


---

## Best practices

- Use labels that clearly indicate the purpose of the step. Keep options to a single line of text, be short and concise (1-2 words).
- If a task needs more than 6 steps, consider simplifying the process or breaking it up into multiple tasks.
- If there are less than 3 steps, consider using a button labelled "Next".
- If the setps are not required or the steps could be perfom in no particluar order, use a different design pattern

---

## States

{% include images.html caption="Unvisited step" name="type-progress-tracker-unvisited" invisionID="415425817" %}

{% include images.html caption="Current step" name="type-progress-tracker-active" invisionID="415425818" %}

{% include images.html caption="Visited step" name="type-progress-tracker-visited" invisionID="415425819" %}

---

## Position

Progress tracker should be place directly under the page title.

{% include images.html name="type-progress-tracker-position" %}
---
layout: default
title: Switches
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

Switches toggle the state of a single setting on or off. They are the preferred way to adjust settings.

---

## Best Practices

- Toggles should never require users to press a button to apply the settings (use checkboxes instead).
- Avoid creating a switch that includes the text “on” and “off” within the graphic itself. The switch alone should be sufficient.

## Anatomy

{% include images.html name="anatomy-switches" %}

1. **Text label**: The option that the switch controls should be made clear from the corresponding inline label.
2. **Switches**: A switch is successfully toggled when the user slides a switch thumb to the other side of the track, and the state of the switch changes.
3. **Tooltip**: Hovering a switch should display a tooltip that should describe what happens when the switch is toggled.

---

## Types

### Medium Switches

{% include images.html caption="Unchecked" name="type-meduim-switches-unchecked-default" invisionID="359701243" %}


{% include images.html caption="Unchecked hover" name="type-meduim-switches-unchecked-hover" invisionID="359701233" %}


{% include images.html caption="unchecked disabled" name="type-meduim-switches-unchecked-disabled" invisionID="359701241" %}

Because a switch shows the actual status of something, sometimes there is a delay in its change of state. In such cases, a processing status animation can be used.

{% include images.html caption="Unchecked processing" name="type-meduim-switches-unchecked-processing" invisionID="359708513" %}


{% include images.html caption="Checked" name="type-meduim-switches-checked-default" invisionID="359701239" %}


{% include images.html caption="Checked hover" name="type-meduim-switches-checked-hover" invisionID="359701237" %}


{% include images.html caption="Checked disabled" name="type-meduim-switches-checked-disabled" invisionID="359701235" %}


{% include images.html caption="Checked processing" name="type-meduim-switches-checked-processing" invisionID="359708511" %}


### Small Switches

{% include images.html caption="Unchecked" name="type-small-switches-unchecked-default" invisionID="359701242" %}


{% include images.html caption="Unchecked hover" name="type-small-switches-unchecked-hover" invisionID="359701232" %}


{% include images.html caption="Unchecked disabled" name="type-small-switches-unchecked-disabled" invisionID="359701240" %}


{% include images.html caption="Unchecked processing" name="type-small-switches-unchecked-processing" invisionID="359708512" %}


{% include images.html caption="Checked" name="type-small-switches-checked-default" invisionID="359701238" %}


{% include images.html caption="Checked hover" name="type-small-switches-checked-hover" invisionID="359701236" %}


{% include images.html caption="Checked disabled" name="type-small-switches-checked-disabled" invisionID="359701234" %}


{% include images.html caption="Checked processing" name="type-small-switches-checked-processing" invisionID="359708510" %}

---
layout: default
title: Avatars
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

Avatars are images that can be used by both users and contacts as their profile picture. To avoid confusion, contact avatars can only use placeholders avatars and should only be displayed on contact profiles.
Users can upload an image to personalized their avatar.

---

## Anatomy

{% include images.html name="anatomy-avatars" %}

1. **Image**: Avatars house an image that represents either a user or a contact.
1. **Status**: On contact profiles, avatars can show the contact's current pipeline status color.
2. **Tooltip**: When an avatar is part of a stacked group or when there is limited space available, the name of the user/contact should be displayed on hover in a tooltip.

---

## Avatar Types

Users have the choice of uploading an image to personalized their avatar or use one of the 3 placeholder avatars. Contacts will used the placeholder avatar corresponding to their gender.

{% include images.html caption="Gender neutral placeholder" name="type-avatar-placeholder-default" invisionID="360180774" %}

{% include images.html caption="Male placeholder" name="type-avatar-placeholder-male" invisionID="360180767" %}

{% include images.html caption="Female placeholder" name="type-avatar-placeholder-female" invisionID="360180766" %}

{% include images.html caption="User defined avatar" name="type-avatar-placeholder-user-defined" invisionID="360180765" %}

---

## Avatar Sizes

Medium size avatars are used in users list when paired with the user name.

{% include images.html caption="Medium avatar" name="size-avatars-meduim" invisionID="360180773" %}

Large avatars are used in users list when paired with the user name and a sub-text like an email address.

{% include images.html caption="Large avatar" name="size-avatars-large" invisionID="360180772" %}

The x-large avatar size is used in the user profile dropdown menu.

{% include images.html caption="x-large avatar" name="size-avatars-x-large" invisionID="360180771" %}

The biggest size available for avatar is used to identify contacts on profile pages.

{% include images.html caption="xx-large avatar" name="size-avatars-xx-large" invisionID="360180770" %}

---

## Avatar Groups

Avatar can be grouped together in a stacked when there is limited space available. If a stacked group contain more than 6 avatars, 5 are shown, the rest are represented by a number. Hovering an avatar should
display the corresponding user name.

{% include images.html caption="Example of stacked avatars" name="group-avatars-5" invisionID="360180768" %}

{% include images.html caption="Example of truncated stacked avatars" name="group-avatars-6+" invisionID="360180769" %}

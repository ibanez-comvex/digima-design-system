---
layout: default
title: Typography
parent: foundations
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

Text is the primary way users digest content and accomplish work, so it’s important to use good typographic principles to establish a clear visual hierarchy and to maximize legibility.

<div class="code-example" markdown="1">

  <div class="font-container">
    <p class="mb-0 title">Jumbo</p>
    <p class="mb-0 dg-5">The quick brown fox jumps over the lazy dog.</p>
    <p class="caption">Font Size: 32px | Line Height: 48px</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Page Title</p>
    <p class="mb-0 dg-4">The quick brown fox jumps over the lazy dog.</p>
    <p class="caption">Font Size: 24px | Line Height: 36px</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Section Title</p>
    <p class="mb-0 dg-3">The quick brown fox jumps over the lazy dog.</p>
    <p class="caption">Font Size: 20px | Line Height: 32px</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Section Subtitle</p>
    <p class="mb-0 dg-2">The quick brown fox jumps over the lazy dog.</p>
    <p class="caption">Font Size: 16px | Line Height: 24px</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Body</p>
    <p class="mb-0 dg-1">The quick brown fox jumps over the lazy dog.</p>
    <p class="caption">Font Size: 14px | Line Height: 20px</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Caption</p>
    <p class="mb-0 dg-0">The quick brown fox jumps over the lazy dog.</p>
    <p class="caption">Font Size: 12px | Line Height: 20px</p>
  </div>

</div>

---


## Type Scale

The typography scale is designed to show a clear hierarchical relationships between elements while at the same time been divisible by 4 to maintain the Digima grid.

| Fonts usage           | Font-size  | line height       | Size Increments |
|:----------------------|:-----------|:------------------|:----------------|
|   Jumbo               | 32px       | 48px              | +8              |
|   Page titles         | 24px       | 36px              | +4              |
|   Section Title       | 20px       | 32px              | +4              |
|   Section Subtitle    | 16px       | 24px              | +2              |
|   Body                | 14px       | 20px              | +2              |
|   Microcopy           | 12px       | 20px              | -               |

{% include images.html name="typography-scale" caption="This graph shows how each increment is designed to match the corresponding font size usage" %}

---


## Font Stack

The Digima app use the following font Stack:

```yaml
'Lato', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
```
---

## Formatting

Text in Digima can have the following format. Because italic does not exist in Japanese, it has been purposely excluded from that list.

---

### Weight

All fonts sizes can be bold or regular.

<div class="code-example" markdown="1">
  <p class="mb-0 dg-1 text-grey-dk-300 text-bold">The quick brown fox jumps over the lazy dog.</p>
</div>

<div class="code-example" markdown="1">
  <p class="mb-0 dg-1 text-grey-dk-300">The quick brown fox jumps over the lazy dog.</p>
</div>

---

### Alignments

Fonts can be left, center or right aligned. Right alinement is exclusively used on tables to display numerical data.

<div class="code-example" markdown="1">
  <p class="mb-0 dg-1 text-grey-dk-300 text-left">The quick brown fox jumps over the lazy dog.</p>
</div>

<div class="code-example" markdown="1">
  <p class="mb-0 dg-1 text-grey-dk-300 text-center">The quick brown fox jumps over the lazy dog.</p>
</div>

<div class="code-example" markdown="1">
  <p class="mb-0 dg-1 text-grey-dk-300 text-right">The quick brown fox jumps over the lazy dog.</p>

</div>
---

### Links

Use when you are linking just a few words of text, or when a link is standalone. Buttons should be used instead of links for actions and should be underlined only when hovered.

<div class="code-example" markdown="1">
  <p class="mb-0 dg-1 text-blue-200">The quick brown fox jumps over the lazy dog.</p>
</div>

<div class="code-example dark-theme" markdown="1">
  <p class="mb-0 dg-1 text-cyan-500">The quick brown fox jumps over the lazy dog.</p>
</div>

---

## Usage

### Jumbo

This size should rarely be used within Digima and is mostly reserved for marketing purpuse.

<div class="code-example" markdown="1">
  <p class="mb-0 title">Primary Black</p>
  <p class="mb-0 dg-5 text-grey-dk-300">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 32px | Line Height: 48px | Color: nd-900</p>
</div>

<div class="code-example dark-theme" markdown="1">
  <p class="mb-0 title">Primary White</p>
  <p class="mb-0 dg-5 text-white">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 32px | Line Height: 48px | Color: nl-0</p>
</div>

---

### Page Title

 This size is used strictly for page titles throughout Digima products. This font size is the largest size used in a page content hierarchy.

<div class="code-example" markdown="1">
  <div class="font-container">
    <p class="mb-0 title">Primary Black</p>
    <p class="mb-0 dg-4 text-grey-dk-300">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 24px | Line Height: 36px| Color: nd-900</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Ternary Black</p>
  <p class="mb-0 dg-4 text-grey-dk-100">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 24px | Line Height: 36px| Color: nd-600</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Disabled Black</p>
  <p class="mb-0 dg-4 text-grey-dk-000">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 24px | Line Height: 36px| Color: nl-800</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Default</p>
    <p class="mb-0 dg-4 text-blue-200">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 24px | Line Height: 36px| Color: blue-600</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Underline</p>
    <p class="mb-0 dg-4 text-blue-200 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 24px | Line Height: 36px| Color: blue-600 Style: underline</p>
  </div>
</div>

<div class="code-example dark-theme" markdown="1">
  <div class="font-container">
    <p class="mb-0 title">Primary White</p>
    <p class="mb-0 dg-4 text-white">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 24px | Line Height: 36px| Color: nl-0</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Ternary White</p>
  <p class="mb-0 dg-4 text-grey-lt-300">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 24px | Line Height: 36px| Color: nl-700</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Disabled White</p>
  <p class="mb-0 dg-4 text-grey-dk-000">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 24px | Line Height: 36px| Color: nl-800</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Default</p>
    <p class="mb-0 dg-4 text-cyan-500">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 24px | Line Height: 36px| Color: cyan-500</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Underline</p>
    <p class="mb-0 dg-4 text-cyan-500 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 24px | Line Height: 36px| Color: cyan-500 Style: underline</p>
  </div>
</div>

---

### Section Title

This size is the first child of the page content hierarchy.

<div class="code-example" markdown="1">
  <div class="font-container">
    <p class="mb-0 title">Primary Black</p>
    <p class="mb-0 dg-3 text-grey-dk-300">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 20px | Line Height: 32px| Color: nd-900</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Ternary Black</p>
  <p class="mb-0 dg-3 text-grey-dk-100">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 20px | Line Height: 32px| Color: nd-600</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Disabled Black</p>
  <p class="mb-0 dg-3 text-grey-dk-000">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 20px | Line Height: 32px| Color: nl-800</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Default</p>
    <p class="mb-0 dg-3 text-blue-200">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 20px | Line Height: 32px| Color: blue-600</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Underline</p>
    <p class="mb-0 dg-3 text-blue-200 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 20px | Line Height: 32px| Color: blue-600 Style: underline</p>
  </div>
</div>

<div class="code-example dark-theme" markdown="1">
  <div class="font-container">
    <p class="mb-0 title">Primary White</p>
    <p class="mb-0 dg-3 text-white">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 20px | Line Height: 32px| Color: nl-0</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Ternary White</p>
  <p class="mb-0 dg-3 text-grey-lt-300">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 20px | Line Height: 32px| Color: nl-700</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Disabled White</p>
  <p class="mb-0 dg-3 text-grey-dk-000">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 20px | Line Height: 32px| Color: nl-800</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Default</p>
    <p class="mb-0 dg-3 text-cyan-500">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 20px | Line Height: 32px| Color: cyan-500</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Underline</p>
    <p class="mb-0 dg-3 text-cyan-500 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 20px | Line Height: 32px| Color: cyan-500 Style: underline</p>
  </div>
</div>

---

### Section Subtitle

This size should be used for child content under Section Titles.

<div class="code-example" markdown="1">
  <div class="font-container">
    <p class="mb-0 title">Primary Black</p>
    <p class="mb-0 dg-2 text-grey-dk-300">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 16px | Line Height: 24px| Color: nd-900</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Ternary Black</p>
  <p class="mb-0 dg-2 text-grey-dk-100">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 16px | Line Height: 24px| Color: nd-600</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Disabled Black</p>
  <p class="mb-0 dg-2 text-grey-dk-000">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 16px | Line Height: 24px| Color: nl-800</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Default</p>
    <p class="mb-0 dg-2 text-blue-200">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 16px | Line Height: 24px| Color: blue-600</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Underline</p>
    <p class="mb-0 dg-2 text-blue-200 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 16px | Line Height: 24px| Color: blue-600 Style: underline</p>
  </div>
</div>

<div class="code-example dark-theme" markdown="1">
  <div class="font-container">
    <p class="mb-0 title">Primary White</p>
    <p class="mb-0 dg-2 text-white">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 16px | Line Height: 24px| Color: nl-0</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Ternary White</p>
  <p class="mb-0 dg-2 text-grey-lt-300">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 16px | Line Height: 24px| Color: nl-700</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Disabled White</p>
  <p class="mb-0 dg-2 text-grey-dk-000">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 16px | Line Height: 24px| Color: nl-800</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Default</p>
    <p class="mb-0 dg-2 text-cyan-500">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 16px | Line Height: 24px| Color: cyan-500</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Underline</p>
    <p class="mb-0 dg-2 text-cyan-500 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 16px | Line Height: 24px| Color: cyan-500 Style: underline</p>
  </div>
</div>

---

### Body

This is the default font size of Digima. It is the size of the majority of the content.

<div class="code-example" markdown="1">
  <div class="font-container">
    <p class="mb-0 title">Primary Black</p>
    <p class="mb-0 dg-1 text-grey-dk-300">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: nd-900</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Secondary Black</p>
    <p class="mb-0 dg-1 text-grey-dk-200">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: nd-900</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Ternary Black</p>
  <p class="mb-0 dg-1 text-grey-dk-100">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: nd-600</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Disabled Black</p>
  <p class="mb-0 dg-1 text-grey-dk-000">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: nl-800</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Default</p>
    <p class="mb-0 dg-1 text-blue-200">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: blue-600</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Underline</p>
    <p class="mb-0 dg-1 text-blue-200 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: blue-600 Style: underline</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Brand Primary</p>
    <p class="mb-0 dg-1 text-lime-700">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: lime-700</p>
  </div>  

  <div class="font-container">
    <p class="mb-0 title">Brand Secondary</p>
    <p class="mb-0 dg-1 text-purple-200">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: violet-800</p>
  </div>    

  <div class="font-container">
    <p class="mb-0 title">Warning Default</p>
    <p class="mb-0 dg-1 text-yellow-400">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: yellow-600</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Warning Underline</p>
    <p class="mb-0 dg-1 text-yellow-400 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: yellow-600</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Error Default</p>
    <p class="mb-0 dg-1 text-red-400">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: red-700</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Error Underline</p>
    <p class="mb-0 dg-1 text-red-400 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: red-700</p>
  </div>

</div>

<div class="code-example dark-theme" markdown="1">
  <div class="font-container">
    <p class="mb-0 title">Primary White</p>
    <p class="mb-0 dg-1 text-white">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: nl-0</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Secondary White</p>
    <p class="mb-0 dg-1 text-grey-lt-200">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: nl-600</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Ternary White</p>
  <p class="mb-0 dg-1 text-grey-lt-300">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: nl-700</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Disabled White</p>
  <p class="mb-0 dg-1 text-grey-dk-000">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: nl-800</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Default</p>
    <p class="mb-0 dg-1 text-cyan-500">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: cyan-500</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Underline</p>
    <p class="mb-0 dg-1 text-cyan-500 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: cyan-500 Style: underline</p>
  </div>
  <div class="font-container">
    <p class="mb-0 title">Brand Primary</p>
    <p class="mb-0 dg-1 text-lime-700">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: lime-700</p>
  </div>  

  <div class="font-container">
    <p class="mb-0 title">Brand Secondary</p>
    <p class="mb-0 dg-1 text-purple-00">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 14px | Line Height: 20px | Color: violet-400</p>
  </div>    

</div>


---

### Microcopy

This is the smallest size used in Digima and is reserved to annotate a related information. This size should be used sparingly.

<div class="code-example" markdown="1">
  <div class="font-container">
    <p class="mb-0 title">Primary Black</p>
    <p class="mb-0 dg-0 text-grey-dk-300">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: nd-900</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Secondary Black</p>
    <p class="mb-0 dg-0 text-grey-dk-200">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: nd-900</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Ternary Black</p>
  <p class="mb-0 dg-0 text-grey-dk-100">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: nd-600</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Disabled Black</p>
  <p class="mb-0 dg-0 text-grey-dk-000">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: nl-800</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Default</p>
    <p class="mb-0 dg-0 text-blue-200">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: blue-600</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Underline</p>
    <p class="mb-0 dg-0 text-blue-200 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: blue-600 Style: underline</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Brand Primary</p>
    <p class="mb-0 dg-0 text-lime-700">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: lime-700</p>
  </div>  

  <div class="font-container">
    <p class="mb-0 title">Brand Secondary</p>
    <p class="mb-0 dg-0 text-purple-200">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: violet-800</p>
  </div>    

  <div class="font-container">
    <p class="mb-0 title">Warning Default</p>
    <p class="mb-0 dg-0 text-yellow-400">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: yellow-600</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Warning Underline</p>
    <p class="mb-0 dg-0 text-yellow-400 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: yellow-600</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Error Default</p>
    <p class="mb-0 dg-0 text-red-400">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: red-700</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Error Underline</p>
    <p class="mb-0 dg-0 text-red-400 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: red-700</p>
  </div>

</div>

<div class="code-example dark-theme" markdown="1">
  <div class="font-container">
    <p class="mb-0 title">Primary White</p>
    <p class="mb-0 dg-0 text-white">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: nl-0</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Secondary White</p>
    <p class="mb-0 dg-0 text-grey-lt-200">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: nl-600</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Ternary White</p>
  <p class="mb-0 dg-0 text-grey-lt-300">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: nl-700</p>
  </div>

<div class="font-container">
  <p class="mb-0 title">Disabled White</p>
  <p class="mb-0 dg-0 text-grey-dk-000">The quick brown fox jumps over the lazy dog.</p>
  <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: nl-800</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Default</p>
    <p class="mb-0 dg-0 text-cyan-500">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: cyan-500</p>
  </div>

  <div class="font-container">
    <p class="mb-0 title">Link Underline</p>
    <p class="mb-0 dg-0 text-cyan-500 text-underline">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: cyan-500 Style: underline</p>
  </div>
  <div class="font-container">
    <p class="mb-0 title">Brand Primary</p>
    <p class="mb-0 dg-0 text-lime-700">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: lime-700</p>
  </div>  

  <div class="font-container">
    <p class="mb-0 title">Brand Secondary</p>
    <p class="mb-0 dg-0 text-purple-00">The quick brown fox jumps over the lazy dog.</p>
    <p class="mb-0 caption">Font Size: 12px | Line Height: 20px | Color: violet-400</p>
  </div>    

</div>


---

## Line Length

Too wide or narrow lines of text are difficult to read and make it harder for people to focus. Setting an optimal line length will break up content into easily digestible information.

Line lengths for body text should be between 70 to 100 characters including spacing for latin fonts.
Because Japanese characters have a larger letter width, line length should be between 15 to 35 characters for Japanese fonts.

Since the Digima app support browser width down to 1024px, a line length can not always be specified. It's good practice to design for an ideal line length range under normal circumstances, and use responsive design techniques to anticipate different contexts.

{% include images.html name="typography-latin-line-length" caption="Optimal line length should be between 70 to 100 characters for latin fonts" %}

{% include images.html name="typography-japanese-line-length" caption="Optimal line length should be between 15 to 35 characters for Japanese fonts" %}

---
favorite: true
title: CSS grid and custom properties
tags:
  - css
  - Javascript
scope: s-article
---

When building client sites, it was a common request to adjust grid layouts based on content types. For example, if the content type was a blog article, we wanted to display three items per row and include a gap between the items equal to `1rem`. If the content type was a calendar event, we wanted two items per row and increase the gap to `2rem`.

To do this, we would typically create grid variants based on type – `grid--article`, `grid--event`, etc. This required us to know the content types before hand and increased the amount of CSS needed for our grid object.

Now we can make use of CSS grid and custom properties to create a flexible grid system. Below we create our grid object and create a custom property for `grid-gap` and `grid-items-per-row` and set their default values.

```javascript/4-7
const inputs = document.querySelectorAll(".input-control input");

function handleUpdate() {
  const suffix = this.dataset.sizing || ""; // Returns the value of data-sizing or "" empty string.
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
```

Now we can use of grid object with our defaults as seen below. With this we'd expect to see three items per row with a grid gap of `1rem`.

```html
<h1>Update CSS Variables with <span class="highlight">JS</span></h1>

<div class="controls">
  <div class="input-control">
    <label for="spacing">Spacing</label>
    <!-- name, value and data-sizing for JavaScript work. -->
    <input type="range" name="spacing" min="10" max="200" value="10" data-sizing="px" />
  </div>

  <div class="input-control">
    <label for="blur">Blur:</label>
    <!-- name, value and data-sizing for JavaScript work. -->
    <input type="range" name="blur" min="0" max="25" value="3" data-sizing="px" />
  </div>

  <div class="input-control">
    <label for="base">Base Color:</label>
    <!-- name, value for JavaScript work. -->
    <input type="color" name="base" value="#FFD700" />
  </div>
</div>

<div class="image-wrapper">
  <img src="img.jpg" alt="Cool" />
</div>
```

If we want to override the defaults, we can set our custom properties inline. Now we'd have a grid with two items per row and a grid gap of `2rem`.

```html
<div class="o-grid" style="--grid-gap: 2rem; --grid-items-per-row: 2;">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

[Here's a demo on CodePen](https://codepen.io/alexcarpenter/pen/Vwwgywd) that you can play with.

### The bones (HTML structure)

Here is the final result of our markup:

```html/6,12,18
<h1>Update CSS Variables with <span class="highlight">JS</span></h1>

<div class="controls">
  <div class="input-control">
    <label for="spacing">Spacing</label>
    <!-- name, value and data-sizing for JavaScript work. -->
    <input
      type="range"
      name="spacing"
      min="10"
      max="200"
      value="10"
      data-sizing="px"
    />
  </div>

  <div class="input-control">
    <label for="blur">Blur:</label>
    <!-- name, value and data-sizing for JavaScript work. -->
    <input
      type="range"
      name="blur"
      min="0"
      max="25"
      value="3"
      data-sizing="px"
    />
  </div>

  <div class="input-control">
    <label for="base">Base Color:</label>
    <!-- name, value for JavaScript work. -->
    <input type="color" name="base" value="#FFD700" />
  </div>
</div>

<div class="image-wrapper">
  <img src="img.jpg" alt="Cool" />
</div>
```

---
favorite: true
title: Image Hover Effects
tags:
  - CSS
  - CSS Animation
scope: s-article
---

[![Writescape home page (empty feed page)](/assets/images/cards/hover-effects.png)](/assets/images/cards/hover-effects.png)

## 1. The curious bear hover effect

The overlay is based on bottom (0% height). Therefore, normally it has no height to appearance.

<p class="codepen" data-height="550" data-theme-id="light" data-default-tab="result" data-user="ahmedhosna95" data-slug-hash="QWyoWJg" style="height: 550; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="QWyoWJg"></p>

When we hover the image box element, the overlay will be switching to start from top and begin growing from there (0% height) to reach bottom and be (100% height) with a (0.7 opacity). Now, the overlay takes up 100% height of the parent element. Then again when the mouse leaves the element, it will be switching to start from bottom and begin shrinking in the same time from top (100% height) to reach to bottom and be (0% height) with (0 opacity) as it was.

## 2. The curious cat Hover Effect

The overlay is based on bottom (100% height). Therefore, normally it's existed but transparent (0 opacity).

<p class="codepen" data-height="550" data-theme-id="light" data-default-tab="result" data-user="ahmedhosna95" data-slug-hash="WNrmbrX" style="height: 550; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="WNrmbrX"></p>

When we hover the image box element, the overlay will be switching to start from top and in the same time it begin shrinking from bottom (100% height) to reach top and be (0% height). Now, the overlay takes up (0% height) of the parent element and based on top but not appearance because it's height equal 0%. Then again when the mouse leaves the element, it will be back to its normal case, switching to start from bottom and begin growing in the same time from bottom (0% height) to reach top and be (100% height) with a (0 opacity) as it was.

##### ...to be continued.
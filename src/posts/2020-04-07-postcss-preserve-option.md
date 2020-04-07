---
favorite: true
title: Combining the Powers of SASS Variables, Custom Properties and PostCSS in Mobile-First Design.
tags:
  - css
  - Javascript
  - html
scope: s-article
---

While I was practicing through this cool [pen](https://codepen.io/ahmedhosna95/pen/KKpvNGY) on how to apply and use my knowledge in CSS using Mobile-First Design, and trying to become familiar with the so-called [Modular Scale](https://every-layout.dev/rudiments/modular-scale/) and how could I make it responsive in parallel with the Mobile-First approach, I used [Zell's approach](https://zellwk.com/blog/responsive-modular-scale/) with some changes, and after I set variants to the base scale size according to media breakpoints, it ended up in a something great, but unfortunately, I had a hard time for over a week with a pretty little problem in ***IE11***!

![Combining the Powers of SASS Variables, Custom Properties and PostCSS in Mobile-First Design.](https://i.ibb.co/2tdSm8J/cdpn.png)

## The problem

First of all, CSS Custom Properties not working in ***IE11***, because the latter does not support the first. Therefore, we are here about to use SASS Variables, CSS custom properties and PostCSS combination to generate regular css fallback to CSS Custom Properties automatically, to get ***IE11*** in the game. And may the Lord forgive us! :)

By default, PostCSS provides you with fallback for all CSS Custom Properties we wrote inside the scope of the `:root` selector, and properties using CSS Custom Properties, too. It performs this operation just once when it take its source and compiled it to regular CSS.

And as a consequence, when we deal with any custom property inside `@media` rule from inside the scope of `:root` selector, we will get fallback only for the same custom properties that had been written outside `@media`rule.

PostCSS input:

```css
:root {
  /* Mobile-First Approach  */

  --font-size: 10px; /* for small devices */

  @media (min-width: 48em) {
    --font-size: 30px; /* for medium devices */
  }
}

.box { padding: var(--font-size) }
```

You will get:

```css
:root { --font-size: 10px; }

@media (min-width: 48em) {
  :root { --font-size: 30px; }
}

/* Small devices get this: */
.box {
  font-size: 10px; /* fallback property that has been compiled once and for all! */
  font-size: var(--padding); /* 10px */
}

/* The problem root starts from here */

/* Medium devices get the same block of code above but with a new value for the custom property var(--font-size):  */

.box {
  font-size: 10px; /* The fallback property is as it was, even though the breakpoint has been changed. And this will results in a different appearnce in IE11. */
  font-size: var(--font-size); /* 30px. I'M STILL COOL, RIGHT? */
}
```

Is screens narrower than $medium-breakpoint everything is fine: */

/* In screen  wider than $medium-breakpoint,
the fallback property exactly stays the same,
while value of the actual property was changed accordingly to its value in the new breakpoint: */

At the moment, everything is working fine in all browsers that support CSS custom properties, because we override the fallback property with the actual css custom property that have our needed value at any media query breakpoint.

But if we take a look at our web page in ***IE11***, we will get a different appearance in a screen wide larger that breakpoint, because the value of padding property not changed accordingly to the change that happens on the actual css custom property in that new breakpoint.

Consider what CSS will look in IE:

```css
.box {
  padding: 10px;  /*this fallback for the custom property that has been set to small devices (mobile-first)*/
  p̵a̵d̵d̵i̵n̵g̵:̵ ̵v̵a̵r̵(̵-̵-̵p̵a̵d̵d̵i̵n̵g̵)̵;̵  /*this custom property will not work*/
}
````

> ### Note:
>
> If you had [reconfigured](https://www.npmjs.com/package/postcss-custom-properties#preserve "postcss-custom-properties options") your PostCSS `preserve` option to `false` to tell PostCSS not to preserve the Custom Properties in their original form, go right now and remove `false` from the `preserve` option. By default PostCSS preserve the Custom Properties for you.
>
>  You say why? Consider this pen:
> <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="ahmedhosna95" data-slug-hash="ExjedYJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ExjedYJ"></p>
>
> Try to uncomment the second line that involves postcss-cssnext plugin and you will not be able to see the font-size changing at any media breakpoint on window resizing, because this plugin here by default makes PostCSS does not preserve the Custom Properties in their original form. ِAnd from this point, you can not change the value of any ***custom property*** according to a media query breakpoint within `:root` selector. in other words, you will not see the *custom property* as the actual property right after its *fallback property* In the compiled CSS. This is what not preserving means to PostCSS.
>
> Make sure of that and let's try to fix the actual problem by writing a regular css fallback code.


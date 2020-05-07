---
favorite: true
title: What setting up preserve option to false means in PostCSS?
tags:
  - css
  - Javascript
  - html
scope: s-article
---

If you had [reconfigured](https://www.npmjs.com/package/postcss-custom-properties#preserve "postcss-custom-properties options") your PostCSS `preserve` option to `false` to tell PostCSS not to preserve the Custom Properties in their original form, go right now and remove `false` from the `preserve` option. By default PostCSS preserve the Custom Properties for you.

You say why? Consider this pen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="ahmedhosna95" data-slug-hash="ExjedYJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ExjedYJ"></p>

Try to uncomment the second line that involves postcss-cssnext plugin and you will not be able to see the font-size changing at any media breakpoint on window resizing, because this plugin here by default makes PostCSS does not preserve the Custom Properties in their original form. ِAnd from this point, you can not change the value of any ***custom property*** according to a media query breakpoint within `:root` selector. in other words, you will not see the *custom property* as the actual property right after its *fallback property* In the compiled CSS. This is what not preserving means to PostCSS.


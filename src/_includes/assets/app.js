Array.from(document.querySelectorAll(".js-counts")).forEach((item) => {
  item.style.setProperty(
    "counter-reset",
    `counts ${item.childElementCount + 1}`
  );
});

//@ts-check
//! This script replaces the image src of images that have the data-dark-src attribute set to the value of it, when in darkmode
// Put this in the footer, so that it does not need an onload event to wait for everything to be loaded

if (window.matchMedia) {
  const imagesWithVariants = [
    ...document.querySelectorAll("img[data-dark-src]"),
  ].map((img) => ({
    img,
    light: img.src,
    dark: img.getAttribute("data-dark-src"),
  }));
  const set = (colorScheme) => {
    for (const img of imagesWithVariants) {
        img.img.src = img[colorScheme];
    }
  };
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    set("dark");
  }
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      set(event.matches ? "dark" : "light");
    });
}

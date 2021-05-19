const catImage = document.querySelector(".container-images img:nth-child(1)");
const mountainImage = document.querySelector(
  ".container-images img:nth-child(2)"
);
const iceCreamImage = document.querySelector(
  ".container-images img:nth-child(3)"
);
const title = document.querySelector(".title");
const txt = document.querySelector(".txt");

const TL = gsap.timeline();

// TL.to(catImage, { opacity: 1, y: 0 })
//   .to(mountainImage, { opacity: 1, y: 0 })
//   .to(iceCreamImage, { opacity: 1, y: 0 })
//   .to(title, { opacity: 1, y: 0 });

TL.to(catImage, { autoAlpha: 1, y: 0 })
  .to(mountainImage, { autoAlpha: 1, y: 0 })
  .to(iceCreamImage, { autoAlpha: 1, y: 0 })
  .to(title, { autoAlpha: 1, y: 0 });

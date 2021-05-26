const catImage = document.querySelector(".container-images img:nth-child(1)");
const mountainImage = document.querySelector(
  ".container-images img:nth-child(2)"
);
const iceCreamImage = document.querySelector(
  ".container-images img:nth-child(3)"
);
const title = document.querySelector(".title");
const txt = document.querySelector(".txt");

// const TL = gsap.timeline();

// TL.to(catImage, { opacity: 1, y: 0 })
//   .to(mountainImage, { opacity: 1, y: 0 })
//   .to(iceCreamImage, { opacity: 1, y: 0 })
//   .to(title, { opacity: 1, y: 0 });

// TL.to(catImage, { autoAlpha: 1, y: 0, duration: 1 }, 1)
//   .to(mountainImage, { autoAlpha: 1, y: 0, duration: 1 }, 0)
//   .to(iceCreamImage, { autoAlpha: 1, y: 0, duration: 1 }, ">");
// .to(title, { autoAlpha: 1, y: 0, duration: 1 }, "-=0.75")
// .to(txt, { autoAlpha: 1, y: 0, duration: 1 }, "-=0.75");

const TL = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power4",
  },
  // repeat: -1,
  // repeatDelay: 0.5,
  // yoyo: true,
  paused: true,
});

// TL.to(catImage, { autoAlpha: 1, y: 0 })
//   .to(mountainImage, { autoAlpha: 1, y: 0 })
//   .to(iceCreamImage, { autoAlpha: 1, y: 0 })
//   .to(title, { autoAlpha: 1, y: 0 })
//   .addLabel("endAnim")
//   .to(txt, { autoAlpha: 1, y: 0 });

// setTimeout(() => {
//   TL.play("endAnim");
// }, 1000);

TL.to(catImage, { autoAlpha: 1, y: 0 })
  .to(mountainImage, { autoAlpha: 1, y: 0 })
  .to(iceCreamImage, { autoAlpha: 1, y: 0 })
  .to(title, { autoAlpha: 1, y: 0 })
  .add(() => {
    console.log("Fin de timeline");
  })
  .to(txt, { autoAlpha: 1, y: 0 });

setTimeout(() => {
  TL.play();
}, 1000);

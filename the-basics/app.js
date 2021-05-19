const catImage = document.querySelector(".container-images img:nth-child(1)");
const btnCat = document.querySelector(".cat-fade");

/* .to() METHOD */
// gsap.to(catImage, { x: 100, y: 100, scale: 2, duration: 2 });

// gsap.to("h1", { color: "red", backgroundColor: "blue", duration: 1 });

/* .from() METHOD */
// gsap.from(catImage, { opacity: 0, duration: 3 });

// btnCat.addEventListener("click", () => {
//     gsap.from(catImage, { opacity: 0, duration: 3 });
//   });

/* .fromTo() METHOD */
// btnCat.addEventListener("click", () => {
//   gsap.fromTo(catImage, { opacity: 0 }, { opacity: 1, duration: 3 });
// });

/* REPEAT AND DELAY */
// btnCat.addEventListener("click", () => {
//   gsap.to(catImage, {
//     x: 100,
//     y: 100,
//     scale: 2,
//     duration: 2,
//     delay: 0.2,
//     repeat: 1,
//     repeatDelay: 2,
//   });
// });

/* EASINGS */
// gsap.to(".container-images img", {
//   y: 300,
//   scale: 1.2,
//   duration: 2,
//   ease: "power1.in",
// });

// gsap.to(".container-images img", {
//   y: 300,
//   scale: 1.2,
//   duration: 2,
//   ease: "bounce.out",
// });

/* STAGGER */
// gsap.to(".container-images img", {
//   y: 300,
//   scale: 1.2,
//   duration: 2,
//   ease: "power1",
//   stagger: 0.1,
// });

// gsap.to(".container-images img", {
//   y: 300,
//   scale: 1.2,
//   duration: 2,
//   ease: "power1",
//   stagger: {
//     each: 0.5,
//     from: "center",
//   },
// });

// gsap.to(".container-images img", {
//   y: 300,
//   scale: 1.2,
//   duration: 2,
//   ease: "power1",
//   stagger: function (index) {
//     return index * 0.5;
//   },
// });

gsap.to(".container-btns button", { duration: 0.2, x: 50, stagger: 0.2 });

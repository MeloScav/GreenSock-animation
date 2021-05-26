const navLinks = document.querySelectorAll("nav a");
const navImages = document.querySelectorAll("nav img");
const title = document.querySelector("h1");
const verticalLine = document.querySelector(".middle-line");
const grappesLogo = document.querySelector(".home-content img");
const homeBtn = document.querySelector(".home-content button");

window.addEventListener("load", () => {
  const TLFADE = gsap.timeline();

  TLFADE.to(title, { autoAlpha: 1, y: 0, delay: 0.2 })
    .to(verticalLine, { height: 170 }, "-=0.2")
    .to(grappesLogo, { autoAlpha: 1, y: 0 }, "-=0.2")
    .to(homeBtn, { autoAlpha: 1, y: 0 }, "-=0.2")
    .to(navLinks, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1 }, "-=0.2")
    .to(navImages, { autoAlpha: 1, y: 0 });
});

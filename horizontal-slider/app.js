const btnRight = document.querySelector(".btn-next");
const btnLeft = document.querySelector(".btn-prev");
const container = document.querySelector(".container");
const allSlides = Array.from(document.querySelectorAll(".slide"));
const indexIndic = document.querySelector(".counter span:nth-child(1)");

let index = 0;

const animRight = () => {
  const TLRight = gsap.timeline();

  TLRight.to(allSlides[index], { duration: 0.6, x: 0 });
};

btnRight.addEventListener("click", () => {
  index++;
  animRight();
});

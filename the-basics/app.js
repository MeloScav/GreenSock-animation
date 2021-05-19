const catImage = document.querySelector(".container-images img:nth-child(1)");
const btnCat = document.querySelector(".cat-fade");

// gsap.to(catImage, { x: 100, y: 100, scale: 2, duration: 2 });

// gsap.to("h1", { color: "red", backgroundColor: "blue", duration: 1 });

// gsap.from(catImage, { opacity: 0, duration: 3 });

btnCat.addEventListener("click", () => {
  gsap.from(catImage, { opacity: 0, duration: 3 });
});

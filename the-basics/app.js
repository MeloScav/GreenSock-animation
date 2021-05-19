const catImage = document.querySelector(".container-images img:nth-child(1)");

gsap.to(catImage, { x: 100, y: 100, scale: 2, duration: 2 });

gsap.to("h1", { color: "red", backgroundColor: "blue", duration: 1 });

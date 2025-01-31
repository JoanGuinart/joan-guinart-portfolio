import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const portadaScrollContainer = document.querySelector("#Portada");
  const scrollPointer = document.querySelector(".scroll-pointer");

  document.addEventListener("mousemove", (e) => {
    console.log("moviment");
    console.log(scrollPointer);
    console.log(e.clientX, e.clientY);

    const height = scrollPointer.clientHeight;
    const width = scrollPointer.clientWidth;

    setTimeout(() => {
      scrollPointer.style.left = `${e.clientX - width / 2}px`;
      scrollPointer.style.top = `${e.clientY - height / 2}px`;
    }, 100);
  });

  const portada = gsap.timeline({
    scrollTrigger: {
      trigger: portadaScrollContainer,
      start: "top top",
      end: "+=2000",
      pin: true,
      scrub: 1,
    },
  });

  portada
    .fromTo(
      ".nom-nom",
      { y: 0, lineHeight: "80%" },
      {
        y: -window.innerHeight / 2,
        lineHeight: "140%",
        duration: 2,
        ease: "power2.in",
      }
    )
    .fromTo(
      ".text-text",
      { y: 0, lineHeight: "80%" },
      {
        y: window.innerHeight / 2,
        lineHeight: "180%",
        duration: 2,
        ease: "power2.in",
      },
      "<"
    )
    .fromTo(
      ".nom",
      { y: 0 },
      {
        y: -window.innerHeight / 1.3,
        duration: 2,
        ease: "power2.in",
      },
      "<"
    )
    .fromTo(
      ".text",
      { y: -1 },
      {
        y: window.innerHeight / 1.3,
        duration: 2,
        ease: "power2.in",
      },
      "<"
    );

  gsap.to(".lorem", {
    y: window.innerHeight / 2,
    scrollTrigger: {
      trigger: ".projectes",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});

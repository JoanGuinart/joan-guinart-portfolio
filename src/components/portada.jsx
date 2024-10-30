import gsap from "gsap";
import "@styles/portada.scss";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portada = () => {
  const container = useRef();

  const scrollPointer = useRef();

  useGSAP(() => {
    const portada = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=4000",
        pin: true,
        scrub: 0.5,
      },
    });

    portada
      .fromTo(
        ".nom-nom",
        { y: 0 },
        { y: -window.innerHeight / 2, duration: 4, ease: "power2.in" }
      )
      .fromTo(
        ".text-text",
        { y: 0 },
        { y: window.innerHeight / 2, duration: 4, ease: "power2.in" },
        "<"
      )
      .fromTo(
        ".nom",
        { y: 0 },
        {
          y: -window.innerHeight / 2,
          duration: 4,
          ease: "power2.in",
        },
        "<"
      )
      .fromTo(
        ".text",
        { y: -1 },
        {
          y: window.innerHeight / 2,
          duration: 4,
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
        scrub: 0.5,
      },
    });
  });

  useEffect(() => {
    const containerEl = container.current;
    const scrollPointerEl = scrollPointer.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      scrollPointerEl.style.transform = `translate3d(${clientX - 25}px, ${
        clientY - 25
      }px, 0)`;
    };

    const handleScroll = () => {
      const scrollY = containerEl.scrollTop;
      scrollPointerEl.style.transform += ` translateY(${scrollY}px)`;
    };

    containerEl.addEventListener("mousemove", handleMouseMove);
    containerEl.addEventListener("scroll", handleScroll);

    return () => {
      containerEl.removeEventListener("mousemove", handleMouseMove);
      containerEl.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="Portada" className="portada scroll-container" ref={container}>
        <div className="scroll-pointer" ref={scrollPointer}>
          SCROLL
        </div>
        <div id="nom" className="nom">
          <h1 className="nom-nom">Joan Guinart</h1>
        </div>
        <div className="text">
          <h2 className="text-text">Frontend Developer</h2>
        </div>
        <div id="test" className="test">
          <p className="lorem">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            asperiores laudantium ab inventore nam neque atque molestias, odit
            tempore adipisci cumque nemo saepe perferendis enim minus! Minima ab
            labore non.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Illum asperiores laudantium ab inventore nam neque atque molestias,
            odit tempore adipisci cumque nemo saepe perferendis enim minus!
            Minima ab labore non.Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Illum asperiores laudantium ab inventore nam neque
            atque molestias, odit tempore adipisci cumque nemo saepe perferendis
            enim minus! Minima ab labore non.
          </p>
        </div>
      </div>
      <div id="Projectes" className="projectes">
        <div className="projecte"></div>
      </div>
      <div id="Projectes" className="projectes">
        <div className="projecte"></div>
      </div>
    </>
  );
};

export default Portada;

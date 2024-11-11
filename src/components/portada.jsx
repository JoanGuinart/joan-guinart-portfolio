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
        end: "+=2000",
        pin: true,
        scrub: 2,
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
          <h1 className="nom-nom e1">
            <span className="joan">Joan</span>{" "}
            <span className="guinart">Guinart</span>
          </h1>
        </div>
        <div className="text">
          <h2 className="text-text e1">
            <span>Frontend</span> <span>Developer</span>
          </h2>
          <p className="cv e3">CV</p>
          <p className="email e3">Email</p>
        </div>
        <div id="test" className="test">
          <p className="lorem e4">
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
    </>
  );
};

export default Portada;

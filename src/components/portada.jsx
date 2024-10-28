import gsap from "gsap";
import "@styles/portada.scss";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portada = () => {
  const container = useRef();

  useGSAP(() => {
    const portada = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=1000",
        pin: true,
        scrub: 1,
        markers: true,
      },
    });

    portada
      .fromTo(".nom", { y: 0 }, { y: -window.innerHeight / 2, duration: 2 })
      .fromTo(
        ".text",
        { y: -1 },
        { y: window.innerHeight / 2, duration: 2 },
        "<"
      );
  });

  return (
    <>
      <div id="Portada" className="portada" ref={container}>
        <div id="nom" className="nom">
          <h1>Joan Guinart</h1>
        </div>
        <div className="text">
          <h2>Frontend Developer</h2>
        </div>
        <div id="test" className="test"></div>
      </div>
      <div id="Projectes" className="projectes">miu miau</div>
    </>
  );
};

export default Portada;

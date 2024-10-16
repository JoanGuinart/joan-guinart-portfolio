import gsap from "gsap"; // Importem la biblioteca GSAP per a animacions
import "@styles/portada.scss"; // Importem els estils per al component
import { useRef } from "react"; // Importem useRef per referenciar elements del DOM
import { useGSAP } from "@gsap/react"; // Importem el hook useGSAP per facilitar l'ús de GSAP amb React
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importem el plugin ScrollTrigger per animacions amb desplaçament

// Registrem el plugin ScrollTrigger a GSAP
gsap.registerPlugin(ScrollTrigger);

const Portada = () => {
  // Creem una referència per al contenidor de la portada
  const container = useRef();

  // Utilitzem el hook useGSAP per crear animacions amb GSAP
  useGSAP(() => {
    // Creem un timeline per gestionar les animacions
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current, // L'element que activa l'animació
        start: 0, // Inici de l'animació quan la part superior del contenidor coincideix amb la part superior de la finestra
        isTouch: 2,
        end: "max", // Final de l'animació després de 500 píxels de desplaçament
        pin: true, // Fixa el contenidor durant l'animació
        scrub: 1, // Fa que l'animació segueixi el desplaçament de la pàgina
        markers: true, // Activa marcadors per ajudar a depurar (podeu desactivar-los en producció)
      },
    });

    // Animacions
    tl.fromTo(
      ".nom", // Seleccionem l'element .nom
      { y: 0 }, // Estat inicial: no es desplaça i és totalment visible
      { y: -200, duration: 2 } // Estat final: es desplaça 200 píxels cap amunt i segueix visible
    )
      .fromTo(
        ".imatge", // Seleccionem l'element .imatge
        { y: 0, filter: "grayscale(1)" }, // Estat inicial: no es desplaça i és totalment visible
        { y: -50, x: 200, filter: "grayscale(0)", duration: 1 }, // Estat final: es desplaça 50 píxels cap amunt i 200 píxels cap a la dreta, segueix visible
        "<" // Inicia aquesta animació al mateix temps que l'anterior
      )
      .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 1 }, ">")
      .fromTo(".text", { y: 0, opacity: 1 }, { y: -200, opacity: 0 }, ">");
  });

  // Retornem el JSX del component
  return (
    <>
      <div id="Portada" className="portada" ref={container}>
        <div id="nom" className="nom">
          <h1>Joan Guinart</h1>
        </div>
        <div className="imatge"></div>
        <div className="text">
          Hello! I'm a FrontEnd developer with a strong track record in
          effectively tackling complex challenges while pursuing new goals. My
          technical expertise and soft skills enable me to deliver innovative
          solutions, collaborate effectively in team settings, and meet tight
          deadlines, thus contributing to project success. worker.
        </div>
      </div>
      <div id="test" className="test" style={{ height: "1000px" }}></div>{" "}
      {/* Espai per permetre el desplaçament */}
    </>
  );
};

export default Portada; // Exportem el component Portada

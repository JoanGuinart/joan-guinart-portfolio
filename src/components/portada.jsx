import { useEffect } from "react";
import { gsap } from 'gsap';
import "@styles/portada.scss";
import ScrollMagic from "scrollmagic"
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'; // Para el debugging
 

const Portada = () => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();
  
    // Aquí se configura el timeline y la escena de ScrollMagic
    const timeline = gsap.timeline();
    
    // Código de animación
    timeline.to('.nom', { duration: 1, top: '10%', opacity: 1 }, 1);
    
    new ScrollMagic.Scene({
      triggerElement: '#Portada',
      duration: '300%',
      triggerHook: 0,
    })
      .setPin('#Portada')
      .setTween(timeline)
      .addIndicators()
      .addTo(controller);
  
    return () => {
      controller.destroy(true);
    };
  }, []);
  

  return (
    <>
      <div id="Portada" className="portada">
        <div className="nom" style={{ position: 'relative', opacity: 0 }}>
          <h1>Joan Guinart</h1>
        </div>
        <div className="imatge">imatge</div>
      </div>
      <div className="test1" style={{ height: '1000px' }}></div>
    </>
  );
};

export default Portada;

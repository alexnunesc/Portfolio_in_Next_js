'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Footer from "../footer/Footer";
import styles from "./Projetos.module.scss";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projetos() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      offset: 100, // Deslocamento em pixels antes da animação ser acionada
      once: false,

      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      delay: 0, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  }, []);

  return (
    <main id="Projetos" className={ styles.mainProjects }>
      {/* <h1>Projetos</h1> */}
      <Link href="#inicio" className={ styles.voltarTop }>Volta ao topo ^ </Link>
      <section className={ styles.sectionProjects }>
        <div className={ styles.imgs } data-aos="fade-right">
          <Link className={ styles.imgs } href="https://imusic-mauve.vercel.app/search" target="_blank" rel="noopener noreferrer">
            <Image src="/1.png" alt="projeto um" width={800} height={0} />
            <img src="https://skillicons.dev/icons?i=github,react,js,scss" />
          </Link>
        </div>
        <div className={ styles.imgs } data-aos="fade-left">
          <Link className={ styles.imgs } href="https://formstrybe.netlify.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/2.png" alt="projeto dois" width={800} height={0} />
            <img src="https://skillicons.dev/icons?i=github,html,css,js" />
          </Link>
        </div>
      </section>
    <Footer />
    </main>
  )
}

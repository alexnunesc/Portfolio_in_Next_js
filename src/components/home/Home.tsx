import Head from 'next/head';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { ThemeContext } from '../../hooks/ThemeProvider';
import styles from './Home.module.scss';

const Home = () => {
  const el = useRef(null);
  const { buildWhatsAppLink } = useContext(ThemeContext) as any;

  useEffect(() => {
    const options = {
      strings: [
        "web developer."
      ],
      typeSpeed: 150,
      // backSpeed: 150,
      loop: false
    };

    const typed = new Typed(el.current, options);

    return () => typed.destroy();
  }, []);

  return (
    <div id='inicio' className={ styles.homeMain }>
    <Head>
      <title>Home | Alex</title>
    </Head>

      <div className={ styles.backgrounds }>
        <section className={`${styles.cols} ${styles.cols0}`}>

          <div className={ styles.textInital }>
            <span className={ styles.topLine }>Olá</span>
            <h1>Eu sou Alex <br/> </h1>
            
          </div>
          <span className={ styles.multiText } style={{ whiteSpace: 'pre' }} ref={el}>.</span>

          <p>Estou buscando conhecimento e oportunidades para crescer profissionalmente.</p>
          <p>Sempre comprometido a aprender e a superar novos desafios que impulsionem meu conhecimento no desenvolvimento web.</p>


        </section>

        <section className={ styles.staks }>
          <div className={ styles.div01 } />
          <div className={ styles.div02 } />
          <div className={ styles.div03 } />
        </section>

        <section className={ styles.btns }>
          <Link href="/cvfront.pdf" locale={false} target='_blank'>
              <button>Download CV</button>
          </Link>
          <Link href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer"><button>Dê-me um alô 🖖🏽</button></Link>
        </section>
      </div>
    </div>
  )
}

export default Home;

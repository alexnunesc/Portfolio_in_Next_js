import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './Home.module.scss';

// imgs
// import background from '../../img/background.png';


const Home = () => {
  const el = useRef(null);

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

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>


        </section>

        <section className={ styles.staks }>
          <div className={ styles.div01 } />
          <div className={ styles.div02 } />
          <div className={ styles.div03 } />
        </section>

        <section className={ styles.btns }>
          <button>download CV</button>
          <Link href="/projetos"><button>hice me</button></Link>
        </section>
      </div>

      {/* <div className={ styles.teste1 }>
        <h1>teste</h1>
        <div className={ styles.teste2 }>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br/>
        Iusto delectus quam modi. Maiores maxime voluptates ut doloribus nulla eligendi sapiente corporis debitis quis, ex dicta in! Voluptatibus nemo eaque non?</div>
      </div> */}

    </div>
  )
}

export default Home;

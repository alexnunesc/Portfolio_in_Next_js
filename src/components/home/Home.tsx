// import { Inter } from 'next/font/google'
// import Head from 'next/head'
// import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Home | Alex</title>
//       </Head>
    
//       <main
//         className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//       >
//         <h1>Hello Word in Next.js</h1>
//         <Link href="/projetos">Projetos</Link>
//       </main>
//     </>
//   )
// }

import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './Home.module.scss';

// imgs
// import background from '../../img/background.png';


const Home = () => {
  const el = useRef(null);
  // const typed = useRef(null);

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

    
    <div className={ styles.homeMain }>
    <Head>
      <title>Home | Alex</title>
    </Head>

      <div className={ styles.backgrounds }>
        <section className={`${styles.cols} ${styles.cols0}`}>

          <div className={ styles.textInital }>
            <span className={ styles.topLine }>Olá</span>
            <h1>Eu sou Alex <br/> </h1>
            <div className={ styles.div01 } />
            <div className={ styles.div02 } />
            <div className={ styles.div03 } />
            
          </div>
          <span className={ styles.multiText } style={{ whiteSpace: 'pre' }} ref={el}>.</span>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>


        </section>

        <div className={ styles.btns }>

          <button>download CV</button>
          <Link href="/projetos"><button>hice me</button></Link>
          

        </div>
      </div>

    </div>
  )
}

export default Home;

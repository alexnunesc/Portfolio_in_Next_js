// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../footer/Footer";
import styles from "./Projetos.module.scss";

export default function Projetos() {
  return (
    <main id="Projetos" className={ styles.mainProjects }>
      {/* <h1>Projetos</h1> */}
      <Link href="#inicio" className={ styles.voltarTop }>Volta ao topo ^ </Link>
      <section className={ styles.sectionProjects }>
        <div className={ styles.imgs }>
          <Link className={ styles.imgs } href="https://imusic-mauve.vercel.app/search" target="_blank" rel="noopener noreferrer">
            <Image src="/1.png" alt="projeto um" width={800} height={0} />
            <img src="https://skillicons.dev/icons?i=github,react,js,scss" />
          </Link>
        </div>
        <div className={ styles.imgs }>
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

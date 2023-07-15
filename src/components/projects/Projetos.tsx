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
          <Image src="/1.png" alt="projeto um" width={800} height={0} />
          <img src="https://skillicons.dev/icons?i=github,react,js,scss" />
        </div>
        <div className={ styles.imgs }>
          <Image src="/2.png" alt="projeto dois" width={800} height={0} />
          {/* <h2>Tecnologis</h2> */}
          <img src="https://skillicons.dev/icons?i=github,html,css,js" />
        </div>
      </section>
    <Footer />
    </main>
  )
}

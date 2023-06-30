// import { useContext } from 'react';
// import styles from './Header.module.scss';

// // icons
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import ModeNightIcon from '@mui/icons-material/ModeNight';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { ThemeContext } from '../../hooks/ThemeProvider';

// export default function Header() {
  
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <header className={styles.headerMain}>
//       <nav className={styles.headerNav}>
//         <ul className={styles.uls}>
//           <li>
//             <a href="#project">Home</a>
//             <hr />
//           </li>
//           <li>
//             <a href="#project">Projetos</a>
//             <hr />
//           </li>
//           <li>
//             <a href="#project">Sobre</a>
//             <hr />
//           </li>
//         </ul>
//       </nav>
//       <section className={styles.iconsHeader}>
//         <span>ANC</span>
//         <GitHubIcon className={ styles.icons } />
//         <LinkedInIcon className={ styles.icons } />
//         <WhatsAppIcon className={ styles.icons } />
//         <button onClick={toggleTheme}>
//           {theme === 'dark' ? <LightModeIcon /> : <ModeNightIcon /> }
//         </button>
//       </section>
//     </header>
//   )
// }



import { useContext } from 'react';
import styles from './Header.module.scss';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ThemeContext } from '../../hooks/ThemeProvider';

export default function Header() {
  
  const { theme, toggleTheme } = useContext(ThemeContext);

  // const [menuOpen, setMenuOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 600);
  //   };

  //   handleResize(); // Verificar inicialmente

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // console.log(menuOpen);
  


  return (
    <header className={styles.headerMain}>
      {/* {isMobile && (
        
        <button
        type="button"
        // className={styles.menuBtn}
        onClick={() => toggleMenu()}
        >Menu</button>
        )
      } */}
      {/* <nav className={ menuOpen ? styles.headerNav : styles.headerNavClose}> */}
      <nav className={ styles.headerNav }>
        <ul className={styles.uls}>
          <li>
            <a href="#home">Home</a>
            <hr />
          </li>
          <li>
            <a href="#project">Projetos</a>
            <hr />
          </li>
          <li>
            <a href="#project">Sobre</a>
            <hr />
          </li>
        </ul>
      </nav>
  
      <section className={styles.iconsHeader}>
        <span>ANC</span>
        <GitHubIcon className={ styles.icons } />
        <LinkedInIcon className={ styles.icons } />
        <WhatsAppIcon className={ styles.icons } />
        <button onClick={toggleTheme}>
          {theme === 'dark' ? <LightModeIcon /> : <ModeNightIcon /> }
        </button>
      </section>
    </header>
  )
}


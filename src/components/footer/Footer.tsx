import { ThemeContext } from '@/hooks/ThemeProvider';
import styles from './Footer.module.scss';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import { useContext } from 'react';

export default function Footer() {
  const { theme, toggleTheme, buildWhatsAppLink } = useContext(ThemeContext) as any;
  return (
    <footer className={styles.mainFooter}>
      <span>Copyright &copy; 2023 ANC </span>

      <Link className={ styles.icons } href='https://github.com/alexnunesc' target="_blank" rel="noopener noreferrer" >
        <GitHubIcon />
      </Link>

      <Link className={ styles.icons } href='https://www.linkedin.com/in/alexnunesc/' target="_blank" rel="noopener noreferrer" >
        <LinkedInIcon />
      </Link>

      <Link className={ styles.icons } href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
      </Link>
  </footer>
  )
}

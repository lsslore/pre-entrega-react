// Header.jsx

import { Link } from 'react-router-dom';
import Nav from './Nav';
import styles from './Header.module.css';

// Componente de encabezado que contiene el logo y la barra de navegación

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>NEON TECH</Link>
      <Nav />
    </header>
  );
};

export default Header;
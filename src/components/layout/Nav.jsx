// Nav.jsx

import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

// Componente de navegación que contiene enlaces a las diferentes secciones de la app

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>
        Inicio
      </Link>
      <Link to="/productos" className={styles.link}>
        Productos
      </Link>
      <Link to="/admin/productos/nuevo" className={styles.link}>
        Agregar producto
      </Link>
      <Link to="/carrito" className={`${styles.link} ${styles.linkCarrito}`}>
        Carrito
      </Link>
    </nav>
  );
};

export default Nav;

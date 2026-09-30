// Home.jsx

import { Link } from 'react-router-dom';
import styles from './Home.module.css';

//pág. de inicio de la app. Muestra un mensaje de bienvenida y un enlace al catálogo de productos.

const Home = () => {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>BIENVENIDOS A NEON TECH</h1>
      <p className={styles.subtitulo}>Tu tienda de tecnología con estilo cyberpunk.</p>
      <Link to="/productos" className={styles.boton}>
        Ver Catálogo
      </Link>
    </div>
  );
};

export default Home;
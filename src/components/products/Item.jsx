// Item.jsx

import { Link } from "react-router-dom";
import styles from "./Item.module.css";
import BotonFavorito from "./BotonFavorito";
import { useState } from "react";

// Componente que representa un producto individual en la lista de productos.

const Item = ({ id, nombre, precio, imagen }) => {
  const [cantidad, setCantidad] = useState(0);

  return (
    <div className={styles.card}>
      <img src={imagen} alt={nombre} className={styles.imagen} />
      <BotonFavorito />
      <div>
        <h3 className={styles.titulo}>{nombre}</h3>
        <p className={styles.precio}>${precio}</p>
        <div className={styles.contador}>
          <button
            type="button"
            className={styles.contadorBoton}
            onClick={() => setCantidad((actual) => Math.max(0, actual - 1))}
            disabled={cantidad === 0}
            aria-label="Disminuir cantidad"
          >
            −
          </button>
          <span aria-label={`Cantidad de ${nombre}`}>{cantidad}</span>
          <button
            type="button"
            className={styles.contadorBoton}
            onClick={() => setCantidad((actual) => actual + 1)}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>
      </div>
      <Link to={`/producto/${id}`} className={styles.boton}>
        Ver Detalle
      </Link>
    </div>
  );
};

export default Item;

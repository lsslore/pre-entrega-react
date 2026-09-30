import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ProductDetail.module.css";

// Componente para mostrar el detalle de un producto

const ProductDetail = () => {
  const { id } = useParams();
  const [detalle, setDetalle] = useState({
    id: null,
    producto: null,
    loading: true,
    error: false,
  });

  useEffect(() => {
    let cancelado = false;
    fetch("/data/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los productos");
        }
        return respuesta.json();
      })
      .then((productos) => {
        const itemEncontrado = productos.find((p) => p.id === id);
        if (!cancelado) {
          setDetalle({
            id,
            producto: itemEncontrado,
            loading: false,
            error: false,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        if (!cancelado) {
          setDetalle({ id, producto: null, loading: false, error: true });
        }
      });
    return () => {
      cancelado = true;
    };
  }, [id]);

  const loading = detalle.id !== id || detalle.loading;
  const error = detalle.id === id && detalle.error;
  const producto = detalle.id === id ? detalle.producto : null;

  if (loading) return <p className={styles.mensaje}>Cargando detalle...</p>;
  if (error)
    return <p className={styles.mensaje}>No se pudo cargar el producto.</p>;
  if (!producto)
    return <p className={styles.mensaje}>Producto no encontrado.</p>;

  return (
    <div className={styles.contenedor}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className={styles.imagen}
      />
      <div className={styles.info}>
        <h2>{producto.nombre}</h2>
        <span className={styles.categoria}>{producto.categoria}</span>
        <p className={styles.descripcion}>{producto.descripcion}</p>
        <h3 className={styles.precio}>${producto.precio}</h3>

        <div className={styles.acciones}>
          <button className={styles.botonComprar}>Agregar al Carrito</button>
          <Link to="/productos" className={styles.linkVolver}>
            Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

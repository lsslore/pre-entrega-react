// ItemListContainer.jsx

import { useState, useEffect } from "react";
import ItemList from "./ItemList";

//carga los productos del JSON y controla el estado de carga.
// Luego le pasa los datos a ItemList.

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los productos");
        }
        return respuesta.json();
      })
      .then(setProductos)
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2 style={{ color: "var(--neon-green)" }}>Catálogo de Productos</h2>

      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p role="alert">
          No se pudieron cargar los productos. Intenta nuevamente.
        </p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;

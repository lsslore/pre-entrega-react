import styles from "./FormProducto.module.css";

const FormProducto = ({
  manejarCambio,
  manejarCambioImagen,
  manejarEnvio,
  datosForm,
  archivoImagen,
  cargando,
}) => (
  <form className={styles.formulario} onSubmit={manejarEnvio}>
    <h1 className={styles.titulo}>Agregar Nuevo Producto</h1>

    <label className={styles.campo} htmlFor="nombre">
      <span>Nombre</span>
      <input
        className={styles.input}
        id="nombre"
        name="nombre"
        type="text"
        value={datosForm.nombre}
        onChange={manejarCambio}
        required
      />
    </label>

    <label className={styles.campo} htmlFor="precio">
      <span>Precio</span>
      <input
        className={styles.input}
        id="precio"
        name="precio"
        type="number"
        min="0"
        step="0.01"
        value={datosForm.precio}
        onChange={manejarCambio}
        required
      />
    </label>

    <label className={styles.campo} htmlFor="stock">
      <span>Stock</span>
      <input
        className={styles.input}
        id="stock"
        name="stock"
        type="number"
        min="0"
        step="1"
        value={datosForm.stock}
        onChange={manejarCambio}
        required
      />
    </label>

    <label className={styles.campo} htmlFor="archivoImagen">
      <span>Imagen del producto</span>
      <input
        className={styles.input}
        id="archivoImagen"
        name="imagen"
        type="file"
        onChange={manejarCambioImagen}
        disabled={cargando}
      />
      {archivoImagen && <span>{archivoImagen.name}</span>}
    </label>

    <button className={styles.boton} type="submit" disabled={cargando}>
      {cargando ? "Guardando.." : "Guardar Producto"}
    </button>
  </form>
);

export default FormProducto;

// Cart.jsx
import styles from './Cart.module.css';

// Componente de la página del carrito de compras

const Cart = () => {
  return (
    <div className={styles.contenedor}>
      <h2>Carrito de Compras</h2>
      <p className={styles.texto}>El carrito está vacío por el momento.</p>
    </div>
  );
};

export default Cart;
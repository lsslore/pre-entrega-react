// ItemList.jsx

import Item from "./Item";
import styles from "./ItemList.module.css";

// recibe el arreglo y lo recorre para crear un Item por producto.

const ItemList = ({ productos }) => {
  return (
    <div className={styles.grilla}>
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default ItemList;

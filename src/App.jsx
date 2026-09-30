//se importan los componentes de react-router-dom para manejar la navegación en la app

import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/products/ItemListContainer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import FormProductoContainer from "./components/products/FormProductoContainer";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="productos" element={<ItemListContainer />} />
        <Route path="producto/:id" element={<ProductDetail />} />
        <Route path="carrito" element={<Cart />} />
        <Route
          path="admin/productos/nuevo"
          element={<FormProductoContainer />}
        />
      </Route>
    </Routes>
  );
}

export default App;

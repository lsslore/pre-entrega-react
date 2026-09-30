// Layout.jsx

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

//Footer';
// Componente de layout que envuelve el contenido principal con un encabezado y un pie de pág.

const Layout = () => (
  <div className="app-layout">
    <Header />
    <main className="main-content">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
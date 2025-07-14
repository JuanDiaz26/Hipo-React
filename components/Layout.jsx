import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'; // Ajustá si Footer está en otra carpeta

const Layout = () => {
  return (
    <>
      {/* Contenido principal de cada página */}
      <Outlet />

      {/* Footer que se muestra siempre */}
      <Footer />
    </>
  );
};

export default Layout;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import Sorteo from '../components/Sorteo.jsx';
import Layout from '../components/Layout.jsx'; // Asegurate de tener este archivo

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Todas las rutas van envueltas en el Layout (Footer abajo) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sorteo" element={<Sorteo />} />
          {/* Agregá más rutas aquí cuando quieras */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

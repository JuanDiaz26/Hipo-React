import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx'; // Importa la página de Inicio

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* Aquí agregarías otras rutas como /contacto, /nosotros, etc */}
      </Routes>
    </Router>
  );
};

export default App;

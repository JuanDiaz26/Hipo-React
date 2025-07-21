import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import Sorteo from '../components/Sorteo.jsx';
import Programas from '../pages/Programas.jsx'; // <- agregado
import Resultados from '../pages/Resultados.jsx'; // <- agregado
import Cartas from '../pages/Cartas.jsx'; // <- agregado
import Inscripcion from '../pages/Inscripcion.jsx'; // <- agregado
import Estadisticas from '../pages/Estadisticas.jsx'; // <- agregado
import Layout from '../components/Layout.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sorteo" element={<Sorteo />} />
          <Route path="/programas" element={<Programas />} /> 
          <Route path="/resultados" element={<Resultados />} /> 
          <Route path="/cartas" element={<Cartas />} />
          <Route path="/inscripcion" element={<Inscripcion />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

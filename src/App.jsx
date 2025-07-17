import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import Sorteo from '../components/Sorteo.jsx';
import Programas from '../pages/Programas.jsx'; // <- agregado
import Layout from '../components/Layout.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sorteo" element={<Sorteo />} />
          <Route path="/programas" element={<Programas />} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

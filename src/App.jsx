import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import Sorteo from '../components/Sorteo.jsx';
import Programas from '../pages/Programas.jsx'; // <- agregado
import Resultados from '../pages/Resultados.jsx'; // <- agregado
import Cartas from '../pages/Cartas.jsx'; // <- agregado
import Inscripcion from '../pages/Inscripcion.jsx'; // <- agregado
import Estadisticas from '../pages/Estadisticas.jsx'; // <- agregado
import Escalas from '../pages/Escalas.jsx'; // <- agregado
import Ultimas from '../pages/UltimasCarreras.jsx'; // <- agregado
import Agencias from '../pages/Agencias.jsx'; // <- agregado
import ComoApostar from '../pages/ComoApostar.jsx'; // <- agregado
import TiposApuestas from '../pages/TiposApuestas.jsx'; // <- agregado
import Contacto from '../pages/Contacto.jsx'; // <- agregado
import Historia from '../pages/Historia.jsx'; // <- agregado
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
          <Route path="/escalas" element={<Escalas />} />
          <Route path="/ultimascarreras" element={<Ultimas />} />
          <Route path="/agencias" element={<Agencias />} />
          <Route path="/comoapostar" element={<ComoApostar />} />
          <Route path="/tiposapuestas" element={<TiposApuestas />} />
          <Route path="/contacto" element={<Contacto />} />    
          <Route path="/historia" element={<Historia />} />         
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

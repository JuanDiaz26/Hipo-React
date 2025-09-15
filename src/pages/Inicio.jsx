import React from 'react';
import HeaderInicio from '../../components/HeaderInicio.jsx';
import MainContainer from '../../components/MainContainer.jsx';
import Noticias from "../../components/Noticias.jsx";
import VideosRecientes from '../../components/VideosRecientes.jsx';
import EstadisticasInicio from '../../components/EstadisticasInicio.jsx';



const Inicio = () => {
  return (
    <>
      <HeaderInicio />
      <MainContainer />
      <Noticias />
      <VideosRecientes />
      <EstadisticasInicio />
    </>
  );
};

export default Inicio;
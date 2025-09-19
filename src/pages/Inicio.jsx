import React from 'react';
import HeaderInicio from '../../components/HeaderInicio.jsx';
import MainContainer from '../../components/MainContainer.jsx';
import Noticias from "../../components/Noticias.jsx";
import VideosRecientes from '../../components/VideosRecientes.jsx';
import EstadisticasInicio from '../../components/EstadisticasInicio.jsx';
import SpotBatalla from '../../components/SpotBatalla.jsx';




const Inicio = () => {
  return (
    <>
      <HeaderInicio />
      <MainContainer />
      <SpotBatalla />
      <Noticias />
      <VideosRecientes />
      <EstadisticasInicio />
    </>
  );
};

export default Inicio;
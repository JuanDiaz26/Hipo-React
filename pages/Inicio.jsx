import React from 'react';
import HeaderInicio from '../components/HeaderInicio.jsx';
import MainContainer from '../components/MainContainer.jsx';
import Noticias from "../components/Noticias";
import VideosRecientes from '../components/VideosRecientes.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



const Inicio = () => {
  return (
    <>
      <HeaderInicio />
      <MainContainer />
      <Noticias />
      <VideosRecientes />
    </>
  );
};

export default Inicio;
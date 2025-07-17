import React from "react";
import "./HeaderInicio.css";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar"; // Importamos el nuevo componente


<div className="contenedorBotonesCentro">
  <Link to="/apuestas" className="button" id="buttonApp" data-tooltip="Size: 20Mb">
    <div className="button-wrapper">
      <div className="text">
        <i className="bi bi-google-play iconoBotonCentro"></i>App de apuestas
      </div>
      <span className="icon">...</span>
    </div>
  </Link>

  <Link to="/programa" className="button" id="buttonPrograma" data-tooltip="Size: 20Mb">
    <div className="button-wrapper">
      <div className="text">
        <i className="bi bi-newspaper iconoBotonCentro"></i>Programa Oficial
      </div>
      <span className="icon">...</span>
    </div>
  </Link>
</div>


const HeaderInicio = () => {
  return (
    <header id="header-inicio">
      <img
        className="imagen-fondo-movil"
        src="../src/assets/fondo.webp"
        alt="Imagen portada hipodromodetucuman"
        loading="lazy"
      />
      <div className="capa"></div>

      {/* NAVBAR REUTILIZABLE */}
      <Navbar variant="inicio" />

      {/* CENTRO VIDEO */}
      <div className="contenedor-centro-video">
        <a className="navbar-brand" href="#">
          <img
            className="logo-visible"
            src="../src/assets/logohipoblanco.png"
            alt="Logo HipodromodeTucuman"
            loading="lazy"
          />
        </a>
        <h3 className="titulo-centro">Hipódromo de Tucumán</h3>
        <br />
        <div className="contenedorBotonesCentro">
  <a
    href="https://ejemplo.com/app"
    target="_blank"
    rel="noopener noreferrer"
    className="button"
    id="buttonApp"
  >
    <div className="button-wrapper">
      <div className="text">
        <i className="bi bi-google-play iconoBotonCentro"></i>App de apuestas
      </div>
      <span className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
          />
        </svg>
      </span>
    </div>
  </a>

  <a
    href="https://drive.google.com/descarga-programa"
    target="_blank"
    rel="noopener noreferrer"
    className="button"
    id="buttonPrograma"
  >
    <div className="button-wrapper">
      <div className="text">
        <i className="bi bi-newspaper iconoBotonCentro"></i>Programa Oficial
      </div>
      <span className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
          />
        </svg>
      </span>
    </div>
  </a>
</div>
      </div>

      {/* REDES SOCIALES */}
      <div className="redes-inicio">
        <a href="https://www.facebook.com/hipodromotuc" target="_blank" rel="noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://wa.me/+5493812067808?text=Hola%20buenas,%20una%20consulta." target="_blank" rel="noreferrer">
          <i className="bi bi-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/hipodromodetucuman/" target="_blank" rel="noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@HipodromodeTucuman" target="_blank" rel="noreferrer">
          <i className="bi bi-youtube"></i>
        </a>
      </div>
    </header>
  );
};

export default HeaderInicio;

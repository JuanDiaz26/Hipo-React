import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./HeaderInicio.css";
import { Link } from 'react-router-dom';

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

      {/* NAVBAR */}
      <div className="contenedor-navegador">
        <nav className="navbar navbar-dark navbar-expand-md fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/index.html">
              <img
                className="logo-hipo-inicio logo-none"
                src="../src/assets/logohipoblanco.png"
                alt="Logo HipodromodeTucuman"
                loading="lazy"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Hipódromo de Tucumán
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active not-bold" href="index.html">
                      <i className="bi bi-house-fill"></i> Inicio
                    </a>
                  </li>

                  {/* Carreras */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link not-bold dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-flag-fill"></i> Carreras
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="pages/programas.html">Programas</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="pages/resultados.html">Resultados</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="pages/cartas.html">Cartas de Llamadas</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="pages/inscripcion.html">Inscripción</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="pages/estadisticas.html">Estadísticas</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="pages/escala.html">Escala de premios</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="pages/videosReunion.html">Últimas carreras</a></li>
                    </ul>
                  </li>

                  {/* Apuestas */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link not-bold dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-cash-coin"></i> Apuestas
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="/pages/agencias.html">Agencias</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="/pages/como-apostar.html">Cómo apostar?</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="/pages/tipos-de-apuestas.html">Tipos de apuestas</a></li>
                    </ul>
                  </li>

                  {/* Contacto */}
                  <li className="nav-item">
                    <a className="nav-link not-bold" href="pages/contacto.html">
                      <i className="bi bi-telephone-fill"></i> Contacto
                    </a>
                  </li>

                  {/* Institucional */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link not-bold dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-building-fill"></i> Institucional
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="/pages/historia.html">Historia</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="/pages/carrerasDestacadas.html">Carreras Destacadas</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="/pages/museo.html">Museo</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="/pages/escuela.html">Escuela de Jockeys</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

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

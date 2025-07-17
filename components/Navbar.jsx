import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

const Navbar = ({ variant }) => {
  const isInicio = variant === "inicio";

  return (
    <div className={`contenedor-navegador ${isInicio ? "navbar-inicio" : "navbar-pages"}`}>
      <nav
        className={`navbar navbar-expand-md fixed-top ${isInicio ? "navbar-dark navbar-inicio-estilo" : "navbar-dark navbar-pages-estilo"}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="logo-hipo-inicio logo-none"
              src={isInicio ? "../src/assets/logohipoblanco.png" : "../src/assets/logohipocolor.png"}
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
                  <a className="nav-link active not-bold" href="/">
                    <i className="bi bi-house-fill"></i> Inicio
                  </a>
                </li>

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
                    <li><a className="dropdown-item" href="/programas">Programas</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/pages/resultados.html">Resultados</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/pages/cartas.html">Cartas de Llamadas</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/pages/inscripcion.html">Inscripción</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/pages/estadisticas.html">Estadísticas</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/pages/escala.html">Escala de premios</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/pages/videosReunion.html">Últimas carreras</a></li>
                  </ul>
                </li>

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

                <li className="nav-item">
                  <a className="nav-link not-bold" href="/pages/contacto.html">
                    <i className="bi bi-telephone-fill"></i> Contacto
                  </a>
                </li>

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
  );
};

export default Navbar;

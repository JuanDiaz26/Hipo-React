import React from "react";
import Navbar from "../components/Navbar";
import "./TablasPages.css";

const Historia = () => {
  return (
    <>
      <header className="header-pages">
        <Navbar />
      </header>
    <main className="main-inicio main-pages">
      <a
        className="whatsapp-icon whatsapp-icon-page1"
        href="https://wa.me/+5493812067808?text=Hola%20buenas,%20una%20consulta."
        target="_blank"
        title="Hace tu consulta mediante nuestro chat de whatsapp"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp wp-icon"></i>
      </a>

      <div className="container-titulo-pages">
        <h3 className="titulo-pages">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
            className="bi bi-record-fill punto-color-titulo" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
          </svg>
          Historia
        </h3>
      </div>

      <div className="separador-pages"></div>

      <div className="contenedorHistoria">

        {/* Historia general */}
        <div className="historia">
          <figure>
            <img src="..src/assets/hipo-inicios.png" alt="imagen inicios del hipodromo" loading="lazy" />
            <figcaption>
              Miles de personas asistieron a la inauguración del centro hípico, el 2 de agosto de 1942.
            </figcaption>
          </figure>
          <p>
            <strong>El hipódromo de Tucumán</strong> es el principal centro hípico del norte argentino.
            Ubicado a menos de un kilómetro y medio de <strong>Plaza Independencia</strong>, su antiguo y característico arco de entrada,
            donde nace la avenida Irineo Leguisamo, se enfrenta al lago de San Miguel.
            <strong> Fundado el 2 de agosto de 1942</strong>, el Hipódromo pertenece a la provincia y está administrado actualmente por la
            <strong> Caja Popular de Ahorros.</strong>
          </p>
        </div>

        {/* Aspecto social */}
        <div>
          <div className="container-titulo-pages">
            <h3 className="titulo-pages">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                className="bi bi-record-fill punto-color-titulo" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
              </svg>
              Aspecto social
            </h3>
          </div>
          <div className="separador-pages"></div>
          <div className="historia">
            <p>
              Unos <strong>100 empleados</strong> trabajan mensualizados y jornalizados. Además, hay <strong>30 entrenadores de caballos</strong>, <strong>30 jockeys y aprendices</strong>.
              Más de <strong>80 peones, capataces, vareadores, domadores, herreros, talabarteros, proveedores de forrajes, transportistas y veterinarios</strong> están vinculados directa e indirectamente con esta actividad.
            </p>
            <figure>
              <img src="..src/assets/hipo-aspecto-social.png" alt="imagen del aspecto social del hipódromo" loading="lazy" />
              <figcaption>Aproximadamente 500 familias viven del turf en la villa hípica o sector de caballerizas y zonas aledañas.</figcaption>
            </figure>
          </div>
        </div>

        {/* Plantel equino */}
        <div>
          <div className="container-titulo-pages">
            <h3 className="titulo-pages">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                className="bi bi-record-fill punto-color-titulo" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
              </svg>
              Plantel equino
            </h3>
          </div>
          <div className="separador-pages"></div>
          <div className="plantelEquino historia">
            <figure>
              <img src="..src/assets/hipo-plantel-equino.png" alt="imagen del plantel equino del hipódromo" loading="lazy" />
              <figcaption>En ambas pistas del Hipódromo están alojados permanentemente y entrenan aproximadamente 300 caballos.</figcaption>
            </figure>
            <p>
              Entre ellos se encuentran puros <strong>SPC (Sangre Pura de Carreras)</strong>, cuadreros, de equitación y caballos auxiliares para doma o training liviano.
              El Hipódromo cuenta en total con <strong>30 cuerpos de caballerizas</strong>, con vivienda para los cuidadores, cuartos de ración, montureros, duchas y otras comodidades para el desarrollo del entrenamiento de los caballos.
            </p>
          </div>
        </div>

      </div>
    </main>
    </>
  );
};

export default Historia;

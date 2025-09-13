import React from "react";
import Navbar from "../../components/Navbar";
import "./TablasPages.css";

const Agencias = () => {
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
          rel="noreferrer"
          title="Hace tu consulta mediante nuestro chat de whatsapp"
        >
          <i className="bi bi-whatsapp wp-icon"></i>
        </a>

        <div className="container-titulo-pages">
          <h3 className="titulo-pages">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-record-fill punto-color-titulo"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10"
              />
            </svg>{" "}
            Agencias
          </h3>
        </div>

        <div className="separador-pages"></div>

        <div className="container-agencias">
          <div className="map-card">
            <div className="map-header">
              <p className="descripcion-mapa">
                Elegí tu agencia más cómoda a la hora de jugar
              </p>
            </div>

            <div className="map-wrapper">
              <iframe
                className="map-embed"
                src="https://www.google.com/maps/d/embed?mid=1rIMAV8UP-Tx-pRr32uf7Vgjk0i_Mcok&ehbc=2E312F"
                title="Mapa agencias"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="legend-grid">
              <div className="legend-item">
                <img
                  className="legend-icon legend-ubicacion"
                  src="./src/assets/ubicacion-color.png"
                  alt="Hipódromo de Tucumán"
                  loading="lazy"
                />
                <strong>Hipódromo de Tucumán</strong>
              </div>

              <div className="legend-item">
                <img
                  className="legend-icon legend-congreso"
                  src="./src/assets/caballo-blanco.png"
                  alt="Agencia sucursal Congreso"
                  loading="lazy"
                />
                <strong>Agencia sucursal Congreso</strong>
              </div>

              <div className="legend-item">
                <img
                  className="legend-icon legend-mitre"
                  src="./src/assets/caballo-blanco.png"
                  alt="Agencia sucursal Mitre"
                  loading="lazy"
                />
                <strong>Agencia sucursal Mitre</strong>
              </div>
            </div>

            <div className="map-actions">
              <a
                className="btn-map"
                href="https://www.google.com/maps/d/viewer?mid=1rIMAV8UP-Tx-pRr32uf7Vgjk0i_Mcok"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir mapa en Google Maps"
              >
                <i className="bi bi-geo-alt-fill"></i>
                Abrir en Google Maps
              </a>
              <a
                className="btn-map btn-outline"
                href="https://www.google.com/maps/search/?api=1&query=Hip%C3%B3dromo%20de%20Tucum%C3%A1n"
                target="_blank"
                rel="noreferrer"
                aria-label="Cómo llegar al Hipódromo de Tucumán"
              >
                <i className="bi bi-signpost"></i>
                Cómo llegar al Hipódromo
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Agencias;

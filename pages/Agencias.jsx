import React from "react";
import Navbar from "../components/Navbar";
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
          <div className="container-mapa">
            <strong className="descripcion-mapa">
              Elegí tu agencia más cómoda a la hora de jugar
            </strong>
            <iframe
              className="mapa-iframe"
              src="https://www.google.com/maps/d/embed?mid=1rIMAV8UP-Tx-pRr32uf7Vgjk0i_Mcok&ehbc=2E312F"
              width="80%"
              height="350"
              allowFullScreen
              loading="lazy"
              title="Mapa agencias"
            ></iframe>

            <div className="iconos-mapa">
              <div className="img-caballo">
                <img
                  className="img-ubicacion"
                  src="../src/assets/ubicacion-color.png"
                  alt="icono mapita"
                  loading="lazy"
                />
                <strong>Hipódromo de Tucumán</strong>
              </div>
              <div className="img-caballo">
                <img
                  className="img-congreso"
                  src="../src/assets/caballo-blanco.png"
                  alt="icono de un caballo"
                  loading="lazy"
                />
                <strong>Agencia sucursal Congreso</strong>
              </div>
              <div className="img-caballo">
                <img
                  className="img-mitre"
                  src="../src/assets/caballo-blanco.png"
                  alt="icono de un caballo"
                  loading="lazy"
                />
                <strong>Agencia sucursal Mitre</strong>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Agencias;

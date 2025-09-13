import React from "react";
import Navbar from "../../components/Navbar";
import "./TablasPages.css";

// ✅ Importá las imágenes desde src/assets (ojo con MAY/min)
import paso1 from "../assets/paso1.webp";
import paso2 from "../assets/paso2.webp";
import paso3 from "../assets/paso3.webp";
import paso4 from "../assets/paso4.webp";
import paso5 from "../assets/paso5.webp";
import paso6 from "../assets/paso6.webp";
import paso7 from "../assets/paso7.webp";

const ComoApostar = () => {
  const pasos = [
    {
      numero: 1,
      texto: "Por call center te enviaremos el link ejecutable de la aplicación",
      img: paso1,
    },
    {
      numero: 2,
      texto:
        'Ingresar al navegador y presionar "Agrega Hip. Tucumán a la pantalla principal" o presionar "Instalar aplicación"',
      img: paso2,
    },
    {
      numero: 3,
      texto: "Instalado se mostrará el siguiente aviso:",
      img: paso3,
      extraClass: "img-paso3grande",
    },
    {
      numero: 4,
      texto: "En la pantalla del dispositivo se observará el acceso directo de la aplicación",
      img: paso4,
    },
    {
      numero: 5,
      texto: "Si no tiene usuario debe registrarse",
      img: paso5,
    },
    {
      numero: 6,
      texto: "Aquí tiene un ejemplo para completar el registro",
      img: paso6,
    },
    {
      numero: 7,
      texto:
        "Una vez creada la cuenta ingresamos al e-mail con el cual nos registramos, buscamos el mail de activación e ingresamos nuevamente al link de la app",
      img: paso7,
    },
  ];

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
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-record-fill punto-color-titulo" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
            </svg>{" "}
            Cómo apostar?
          </h3>
        </div>

        <div className="separador-pages"></div>

        <div className="container-button-app">
          <strong className="titulos-descargar-call">
            Descargá la aplicación desde el siguiente link:
          </strong>
          <a
            href="https://hiptuc.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="button buttonWpApostar"
            id="buttonDownloadApp"
          >
            <span className="button-content button-est">
              <i className="bi bi-download"></i> Descargar
            </span>
          </a>

          <strong className="titulos-descargar-call">
            O solicita la app desde nuestro call center
          </strong>

          <a
            href="https://wa.me/+5493812067808?text=Hola%20buenas,%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="button buttonWpApostar"
            id="buttonCallCenter"
          >
            <span className="button-content button-est">
              <i className="bi bi-whatsapp"></i> Call Center
            </span>
          </a>

          <div className="pasos">
            <h3 className="titulo-pages">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-record-fill punto-color-titulo" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
              </svg>{" "}
              Paso a paso
            </h3>

            <div className="separador-pages"></div>

            <div className="container-paso-a-paso">
              {pasos.map((paso) => (
                <div className="paso-a-paso" key={paso.numero}>
                  <i className={`bi bi-${paso.numero}-circle pasos-numeros`}></i>
                  <span className="titulos-pasos">{paso.texto}</span>
                  <img
                    className={`img-pasos ${paso.extraClass || ""}`}
                    src={paso.img}
                    alt={`Paso ${paso.numero}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ComoApostar;

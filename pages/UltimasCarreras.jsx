import React from "react";
import Navbar from "../components/Navbar";
import "./TablasPages.css";

const UltimasCarreras = () => {
  const videos = [
    {
      titulo: '1º Carrera - Premio "Cat Student"',
      ganador: 'Conectate',
      src: "https://www.youtube.com/embed/P2B85J6UvjA?si=48nHZb-3bMW7ubU8",
    },
    {
      titulo: '2º Carrera - Premio "Crazy Tordo 2016"',
      ganador: 'Say Long',
      src: "https://www.youtube.com/embed/mZxCPJz3OMo?si=XeNuQ11CVOHEVvOb",
    },
    {
      titulo: '3º Carrera - Premio "Don Pamperito"',
      ganador: 'Hidden Enemy',
      src: "https://www.youtube.com/embed/XzZK6tffJkc?si=BNIscdF0v_y1a8ta",
    },
    {
      titulo: '4º Carrera - Premio "Grumpy 2018"',
      ganador: 'Paru Inkas',
      src: "https://www.youtube.com/embed/wA8Lz-TytUM?si=2DRPK_SwIgcdqitK",
    },
    {
      titulo: '5º Carrera - Premio "Dr. Miguel Critto"',
      ganador: 'Euro Spring',
      src: "https://www.youtube.com/embed/-AYMXknuTzk?si=RGOSdclC650R4hIo",
    },
    {
      titulo: '6º Carrera - Premio "Jorge Correa"',
      ganador: 'Minchito',
      src: "https://www.youtube.com/embed/qZ8yClNqmoQ?si=Ett4AAb8u2EwnGnR",
    },
    {
      titulo: '7º Carrera - Clásico "82º Aniv. Hipódromo de Tucumán"',
      ganador: 'El Gran Cabron',
      src: "https://www.youtube.com/embed/kG7H9-34bic?si=wpjcLQlOdE_S_u_C",
    },
    {
      titulo: '8º Carrera - Premio "Slew Of Valid"',
      ganador: 'Galore',
      src: "https://www.youtube.com/embed/sBDce_zQPiw?si=24kJr2i3z_oYLqbq",
    },
    {
      titulo: '9º Carrera - Clásico "Tres Haras"',
      ganador: 'ER Tintorera',
      src: "https://www.youtube.com/embed/8OpFpq4RwsY?si=1ehVD0pXdwWkiOmc",
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
            </svg>
            Últimas carreras
          </h3>
        </div>

        <div className="separador-pages"></div>

        <div className="container-fluid mt-4 container-fluid-videos">
          <div className="row">
            {videos.map((video, index) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" dangerouslySetInnerHTML={{ __html: video.titulo }} />
                    <p className="card-text">
                      <i className="bi bi-award-fill medalla-oro"></i> {video.ganador}
                    </p>
                  </div>
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="iframe-video"
                      src={video.src}
                      title={`Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default UltimasCarreras;

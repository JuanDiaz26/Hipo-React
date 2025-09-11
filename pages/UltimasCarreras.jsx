import React from "react";
import Navbar from "../components/Navbar";
import "./TablasPages.css";

const UltimasCarreras = () => {
  const videos = [
  { carrera: '1º Carrera', 
    subtitulo: 'Premio "Día Mundial de la Higiene"', 
    ganador: 'Lord Lancelot', 
    src: 'https://www.youtube.com/embed/fCQyNCiMkSU?si=5T0BG2dyga31LcgE'
  },
  { carrera: '2º Carrera', 
    subtitulo: 'Premio "Artilu"', 
    ganador: 'El Patriarca', 
    src: 'https://www.youtube.com/embed/jqP0bpHeuqw?si=6KpEfhaPX4aSUrDu' 
  },
  { carrera: '3º Carrera', 
    subtitulo: 'Premio "Tabaiana"', 
    ganador: 'Caetano', 
    src: 'https://www.youtube.com/embed/1Dta32XyNHU?si=9z9eQiGsYL19-vBQ' 
  },
  { carrera: '4º Carrera', 
    subtitulo: 'Premio "Taraza"', 
    ganador: 'Nayla Plus', 
    src: 'https://www.youtube.com/embed/1-bC3ui2Fro?si=AesRzVDJyGM3Az_h' 
  },
  { carrera: '5º Carrera', 
    subtitulo: 'Concertada', 
    ganador: 'Tormentoso', 
    src: 'https://www.youtube.com/embed/NpAl2e6vujA?si=3G9vxbmv6yFWOcSI' 
  },
  { carrera: '6º Carrera', 
    subtitulo: 'Premio "Adolfo Aguilar"', 
    ganador: 'Low Fool', 
    src: 'https://www.youtube.com/embed/t5RvXCRjO24?si=K1V2-FqhuEGgL0WK' 
  },
  { carrera: '7º Carrera', 
    subtitulo: 'Premio "Francisco Llanes"', 
    ganador: 'Jan de Liche', 
    src: '' 
  },
  { carrera: '8º Carrera', 
    subtitulo: 'Premio "Domingo Faustino Sarmiento"', 
    ganador: 'Smashing Master', 
    src: 'https://www.youtube.com/embed/dp3HSWIMcUk?si=h_6JQMf-DHu-SQOf' 
  },
  { carrera: '9º Carrera', 
    subtitulo: 'Premio "Día del Inmigrante"', 
    ganador: 'Smiling Nich', 
    src: 'https://www.youtube.com/embed/b4rIQN0J9RI?si=6hLK27mdrAkJXQVp' 
  },
  { carrera: '10º Carrera', 
    subtitulo: 'Especial "Oscar N. Bravo"', 
    ganador: 'Twitch Hurricane', 
    src: 'https://www.youtube.com/embed/-57rr4UPQys?si=2r4RcQRgd4rLMCrH' 
  },
  { carrera: '11º Carrera', 
    subtitulo: 'Premio "Día del Maestro"', 
    ganador: 'Lord of Moyvore', 
    src: 'https://www.youtube.com/embed/uDMN0JSfsEY?si=azBTiGBNjid2J2vw' 
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
            <h5 className="card-title">
              {video.carrera} <br /> {video.subtitulo}
            </h5>
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

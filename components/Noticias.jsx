import React from "react";
import "./Noticias.css";

// 👇 Import de imágenes desde src/assets
import suffokImg from "../src/assets/suffok.jpg";
import mockjoyImg from "../src/assets/mockjoy.jpg";
import findelmundoImg from "../src/assets/findelmundo.jpg";

const noticias = [
{
  id: 1,
  titulo: 'Standartd brilló en el Clásico 83º Aniversario del Hipódromo de Tucumán',
  texto: `Con José A. Vizcarra en las riendas, el pupilo del stud Piedra Grande se impuso con autoridad en el Clásico "83º Aniversario Hipódromo de Tucumán", disputado sobre 1.600 metros. El zaino de 6 años, entrenado por C.A. Assad, marcó un tiempo de 1'38" 1/5 y superó por 2 1/2 cuerpos a Golden Warrior. De esta forma, Standartd sumó una nueva victoria en su primera presentación en Tucumán.`,
  imagen: suffokImg, // colocar aquí la imagen importada del caballo
  fecha: "10Ago25",
  video: "", // colocar el link de YouTube cuando esté disponible
},
  {
    id: 2,
    titulo: 'Mock Joy dio el golpe en el Estrellas Tucumanas Junior',
    texto: `Representando al stud 5 De Copas, el zaino preparado por S.D. Cuellar y conducido por Matías Rodríguez, se quedó con el clásico reservado para productos de 3 años. Con una sólida actuación, cruzó el disco al frente en 1'12" 4/5 para los 1.200 metros.`,
    imagen: mockjoyImg,
    fecha: "27Jul25",
    video: "youtube.com", // completar cuando tengas el link
  },
  {
    id: 3,
    titulo: 'En el final de la jornada, ganó Fin del Mundo',
    texto: `La décima carrera tuvo un cierre con nombre propio: Fin del Mundo se impuso en el Premio "Dr. Ernesto Padilla", marcando el broche de oro de la fecha. Con Matías Rodríguez en la silla, el defensor del stud Sta Federación (Sde), al cuidado de C.A. Assad, cronometró 1'26" 3/5 para los 1.400 metros.`,
    imagen: findelmundoImg,
    fecha: "27Jul25",
    video: "youtube.com", // agregar link cuando lo tengas
  },
];

const Noticias = () => {
  return (
    <section className="main-noticias">
      <h2 className="titulo-seccion">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-record-fill punto-color-titulo"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"
          />
        </svg>
        Noticias
      </h2>

      <div className="contenedor-noticias">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-1">
          {noticias.map((noti) => (
            <div className="col" key={noti.id}>
              <div className="card h-100">
                <img
                  src={noti.imagen}
                  className="card-img-top"
                  alt={noti.titulo}
                  loading="lazy"
                />
                <div className="card-body-noti">
                  <h5 className="card-titulo-noti">{noti.titulo}</h5>
                  <p className="card-parrafo-noti">{noti.texto}</p>
                </div>
                <div className="mt-auto">
                  <div className="card-footer">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        <i className="bi bi-calendar-date text-secondary"></i>{" "}
                        {noti.fecha}
                      </small>
                      {noti.video && (
                        <a
                          href={noti.video}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-youtube i-youtu"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Noticias;

import React from "react";
import "./Noticias.css";

const noticias = [
  {
    id: 1,
    titulo: 'El Gran Cabron se lleva el Clásico "82º Aniv. Hipódromo de Tucumán"',
    texto: `El pupilo del stud Los Tios, bajo el cuidado de Hector Peralta, se quedó con el Clasico en un tiempo de 1'38"4/5. Conducido por Jose Vizcarra, se impuso por 4 cuerpos sobre Watchtower.`,
    imagen: "/img/el-gran-cabron-noti.webp",
    fecha: "05Ago24",
    video: "https://www.youtube.com/embed/kG7H9-34bic?si=wpjcLQlOdE_S_u_C",
  },
  {
    id: 2,
    titulo: "Galore se queda con la cuadrera",
    texto: `El zaino cuidado por Daniel Ramos, ganó la carrera de 500 metros en un tiempo de 27"3/5. Conducido por Lucas Gonzalez, logró imponerse por 2 1/2 cuerpos.`,
    imagen: "/img/galore.webp",
    fecha: "05Ago24",
    video: "https://www.youtube.com/embed/sBDce_zQPiw?si=24kJr2i3z_oYLqbq",
  },
  {
    id: 3,
    titulo: "Homenaje a Jorge Correa por 50 años de servicio.",
    texto: `Ayer se realizó un emotivo homenaje al fotógrafo Jorge Correa, un ícono del Hipódromo de Tucumán, por sus 50 años de servicio. Se dedicó una carrera a su nombre como premio y se le entregó una distinción en reconocimiento a su destacada trayectoria.`,
    imagen: "/img/jorge.webp",
    fecha: "05Ago24",
    video: null,
  },
];

const Noticias = () => {
  return (
    <section className="main-noticias">
      <h2 className="titulo-hipica titulo-left titulo-noticias">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
  className="bi bi-record-fill punto-color-titulo" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>
        &nbsp; Noticias
      </h2>

      <div className="contenedor-noticias">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-1">
          {noticias.map((noti) => (
            <div className="col" key={noti.id}>
              <div className="card h-100">
                <img src={noti.imagen} className="card-img-top" alt={noti.titulo} loading="lazy" />
                <div className="card-body-noti">
                  <h5 className="card-titulo-noti">{noti.titulo}</h5>
                  <p className="card-parrafo-noti">{noti.texto}</p>
                </div>
                <div className="mt-auto">
                  <div className="card-footer">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        <i className="bi bi-calendar-date text-secondary"></i> {noti.fecha}
                      </small>
                      {noti.video && (
                        <a href={noti.video} target="_blank" rel="noopener noreferrer">
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

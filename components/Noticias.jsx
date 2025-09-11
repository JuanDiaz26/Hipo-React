  import React from "react";
  import "./Noticias.css";

  // 👇 Import de imágenes desde src/assets
  import noticia1 from "../src/assets/noticia-1.jpg";
  import noticia2 from "../src/assets/noticia-2.JPG";
  import noticia3 from "../src/assets/noticia-3.JPG";

  const noticias = [
{
  id: 1,
  titulo: 'Twitch Hurricane se llevó el Especial "Oscar N. Bravo"',
  texto: `Con Héctor A. Suárez en la monta, el pupilo del stud Don Valiente se quedó con el Especial "Oscar N. Bravo", sobre 1.400 metros. El zaino de 6 años, preparado por C.A. Assad, superó por 1 cuerpo a Golden Warrior.`,
  imagen: noticia1,
  fecha: "07Sep25",
  video: "https://www.youtube.com/watch?v=-57rr4UPQys"
},
{
  id: 2,
  titulo: 'El Patriarca debutó con triunfo en el Premio "Artilu"',
  texto: `Con José A. Vizcarra en la conducción, el potrillo del stud Seba y Cami tuvo un estreno soñado al ganar el Premio "Artilu", sobre 800 metros. El hijo de El Moisés, entrenado por L.O. Brito, se impuso con 3 1/2 cuerpos de ventaja sobre El Barba Roja.`,
  imagen: noticia2,
  fecha: "07Sep25",
  video: "https://www.youtube.com/watch?v=jqP0bpHeuqw"
},
{
  id: 3,
  titulo: 'Lord of Moyvore cerró la jornada en el Premio "Día del Maestro"',
  texto: `Con Facundo R. Morán en las riendas, el pupilo del stud 5 De Copas se quedó con la 11ª y última carrera, el Premio "Día del Maestro", sobre 1.300 metros. El zaino de 6 años, entrenado por S.D. Cuellar, superó por 3 cuerpos a Vikins Terror.`,
  imagen: noticia3,
  fecha: "07Sep25",
  video: "https://www.youtube.com/watch?v=uDMN0JSfsEY"
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
                    <div className="card-footer d-flex align-items-center">
  <small className="text-muted">
    <i className="bi bi-calendar-date text-secondary"></i>{" "}
    {noti.fecha}
  </small>

  {noti.video && (
    <a
      href={noti.video}
      target="_blank"
      rel="noopener noreferrer"
      className="ms-auto video"   // <-- empuja a la derecha
    >
      <i className="bi bi-youtube i-youtu"></i>
    </a>
  )}
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

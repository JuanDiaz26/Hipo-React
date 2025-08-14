  import React from "react";
  import "./Noticias.css";

  // 👇 Import de imágenes desde src/assets
  import noticia1 from "../src/assets/Clasico.jpg";
  import noticia2 from "../src/assets/Potrillo.jpg";
  import noticia3 from "../src/assets/Cashisking.jpg";

  const noticias = [
{
  id: 1,
  titulo: 'Standartd brilló en el Clásico 83º Aniversario del Hipódromo de Tucumán',
  texto: `Con José A. Vizcarra en las riendas, el pupilo del stud Piedra Grande ganó con autoridad el Clásico "83º Aniversario", sobre 1.600 metros. El zaino de 6 años, entrenado por C.A. Assad, superó por 2 1/2 cuerpos a Golden Warrior.`,
  imagen: noticia1,
  fecha: "10Ago25",
  video: "youtube.com",
},
  {
  id: 2,
  titulo: 'Lucky Sant se quedó con el Premio Juan Santos Leguizamón',
  texto: `En la prueba para potrillos de 3 años, Lucky Sant, del stud Rubio's y con José A. Vizcarra, ganó con solvencia el Premio "Juan Santos Leguizamón". El pupilo de D.S. Ramos marcó 45" 3/5 y superó por 1/2 pescuezo a Curioso Honey. Tercero quedó Miel Escondida a 1 cuerpo. El zaino, hijo de Winning Prize, suma ahora 1 triunfo extraoficial en 3 salidas.`,
  imagen: noticia2,
  fecha: "10Ago25",
  video: "youtube.com",
},
{
  id: 3,
  titulo: 'Cashisking dio el batacazo en el Premio "Dr. Miguel Critto"',
  texto: `En una sorpresiva actuación, Cashisking, del stud "El Pony Leguizamón" y con Francisco M. Brito en la silla, se impuso en el Premio "Dr. Miguel Critto" con un dividendo de $57,90. El hijo de Forge superó por 1 cuerpo a Grand Silvi y relegó a Piu Rimout al tercer lugar, dejando apuestas vacantes. Fue su segundo triunfo en 12 presentaciones en Tucumán.`,
  imagen: noticia3,
  fecha: "10Ago25",
  video: "youtube.com"
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

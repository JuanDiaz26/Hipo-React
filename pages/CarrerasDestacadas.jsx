import React from "react";
import Navbar from "../components/Navbar";
import "./TablasPages.css";

const CarrerasDestacadas = () => {
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
          rel="noopener noreferrer"
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
            Carreras Destacadas
          </h3>
        </div>

        <div className="separador-pages"></div>

        <div className="contenedorHistoria">
          {/* Gran Premio Batalla de Tucumán */}
          <div className="premioBatalla">
            <strong className="titulos-descargar-call center">
              Gran Premio Batalla de Tucumán
            </strong>
            <div className="historia">
              <figure>
                <img
                  src="..src/assets/hipo-gran-premio.png"
                  alt="imagen del Gran Premio Batalla de Tucumán"
                  loading="lazy"
                />
                <figcaption>
                  La disputa del Gran Premio Batalla de Tucumán atrae a más de
                  20,000 espectadores todos los 24 de septiembre.
                </figcaption>
              </figure>
              <p>
                Esta <strong>carrera interprovincial</strong> ha ganado{" "}
                <strong>enorme prestigio</strong> al reunir en sus pistas a los{" "}
                <strong>mejores caballos de pura sangre</strong> que actúan en
                el interior del país y calificados fondistas de perfil clásico,
                que corren en los <strong>máximos hipódromos del país</strong>,
                como <strong>Palermo</strong>, <strong>San Isidro</strong> y{" "}
                <strong>La Plata</strong>.
              </p>
            </div>
          </div>

          {/* Clásico Caja Popular de Ahorros */}
          <div className="premioBatalla">
            <strong className="titulos-descargar-call center">
              Clásico Caja Popular de Ahorros
            </strong>
            <div className="historia">
              <p>
                Este clásico se celebra en honor al{" "}
                <strong>
                  aniversario de la Caja Popular de Ahorros de la Provincia de
                  Tucumán
                </strong>
                . Este evento se ha convertido en una{" "}
                <strong>tradición significativa</strong> dentro del calendario
                hípico regional. La institución se fundó bajo el mandato del{" "}
                <strong>gobernador de Tucumán, Ernesto Padilla</strong>, el{" "}
                <strong>13 de julio de 1915</strong> en respuesta a la crisis
                económica mundial provocada por la Primera Guerra Mundial con el
                objetivo de <strong>proteger los ahorros de la población</strong>.
              </p>
              <figure>
                <img
                  src="..src/assets/cajapopular.jpeg"
                  alt="imagen caja popular de ahorros"
                  loading="lazy"
                />
                <figcaption>
                  Fachada histórica de la Caja Popular de Ahorros de Tucumán.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Carrera de las Estrellas */}
          <div className="premioBatalla">
            <strong className="titulos-descargar-call center">
              Carrera de las Estrellas
            </strong>
            <div className="historia">
              <figure>
                <img
                  src="..src/assets/hipo-gran-premio.png"
                  alt="imagen carrera de las estrellas"
                  loading="lazy"
                />
                <figcaption>
                  La disputa del Gran Premio Batalla de Tucumán atrae a más de
                  20,000 espectadores todos los 24 de septiembre.
                </figcaption>
              </figure>
              <p>
                Las <strong>Carreras de las Estrellas</strong>, iniciadas en
                Argentina en 1991 e inspiradas por la{" "}
                <strong>Breeders' Cup</strong> de Estados Unidos, son uno de los
                eventos hípicos más importantes del país. Organizadas por la{" "}
                <strong>Fundación Equina Argentina (FEAR)</strong>, reúnen a los
                mejores caballos en diversas categorías. En{" "}
                <strong>Tucumán</strong>, estas carreras replican el formato y
                prestigio de Buenos Aires, ofreciendo a los{" "}
                <strong>caballos de 3 años</strong> y a los propietarios del
                norte la oportunidad de competir en un evento de alto nivel sin
                tener que desplazarse a la capital.
              </p>
            </div>
          </div>

          {/* Estrellas Tucumanas */}
          <div className="premioBatalla">
            <strong className="titulos-descargar-call center">
              Estrellas Tucumanas
            </strong>
            <div className="historia">
              <p>
                Las Carreras de las Estrellas Tucumanas son un evento hípico
                inspirado en las tradicionales{" "}
                <strong>Carreras de las Estrellas</strong> que se celebran en{" "}
                <strong>Buenos Aires</strong>. Estas carreras tienen como
                objetivo destacar a los{" "}
                <strong>caballos de 4 años y más edad</strong> que están inscriptos en el{" "}
                <strong>programa de las Estrellas</strong>, asegurando una
                competencia de <strong>alto nivel</strong> y{" "}
                <strong>calidad</strong>.
              </p>
              <figure>
                <img
                  src="..src/assets/hipo-gran-premio.png"
                  alt="imagen carrera de las estrellas"
                  loading="lazy"
                />
                <figcaption>
                  La disputa del Gran Premio Batalla de Tucumán atrae a más de
                  20,000 espectadores todos los 24 de septiembre.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Clásico Carlos Pellegrini */}
          <div className="premioBatalla">
            <strong className="titulos-descargar-call center">
              Clásico Carlos Pellegrini
            </strong>
            <div className="historia">
              <p>
                El <strong>Clásico Carlos Pellegrini</strong>, celebrado
                anualmente en el <strong>Hipódromo de San Isidro</strong> en{" "}
                <strong>Buenos Aires, Argentina</strong>, es una prestigiosa
                carrera de turf en honor a <strong>Carlos Pellegrini</strong>,
                expresidente argentino y amante del deporte ecuestre. Esta
                competencia destaca por atraer a los mejores caballos de
                Argentina y Sudamérica, cubriendo una distancia de{" "}
                <strong>2400 metros</strong>.
              </p>
              <figure>
                <img
                  src="..src/assets/hipo-gran-premio.png"
                  alt="imagen clasico carlos pellegrini"
                  loading="lazy"
                />
                <figcaption>
                  La disputa del Gran Premio Batalla de Tucumán atrae a más de
                  20,000 espectadores todos los 24 de septiembre.
                </figcaption>
              </figure>
              <p>
                En <strong>Tucumán</strong> se realiza un evento también
                conocido como <strong>Clásico Carlos Pellegrini</strong>, aunque
                con premios y categorías inferiores comparado con su homólogo en
                la capital. Este evento es significativo para la región norteña
                al proporcionar una plataforma para que los propietarios y
                criadores locales compitan a alto nivel sin necesidad de viajar
                largas distancias.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CarrerasDestacadas;

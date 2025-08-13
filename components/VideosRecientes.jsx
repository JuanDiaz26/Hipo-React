import React from 'react';
import { Link } from 'react-router-dom';
import './VideosRecientes.css';


const VideosRecientes = () => {
  return (
    <section className="seccion-videos">
      <h2 className="titulo-seccion">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
          className="bi bi-record-fill punto-color-titulo" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
        </svg>
        Últimas carreras
      </h2>

      <div className="container-fluid mt-4 container-fluid-videos">
        <div className="row">

          {/* Tarjeta 1 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">10º Carrera - Clásico "83º<br />Aniv. Hipódromo de Tucumán"</h5>
                <p className="card-text">
                  <i className="bi bi-award-fill medalla-oro"></i> Standartd
                </p>
              </div>
              <div className="ratio ratio-16x9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/C2JBFKN1lcg?si=bEQwmsd5L3avGOT1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">11º Carrera - Premio<br /> "Dr. Miguel Critto"</h5>
                <p className="card-text">
                  <i className="bi bi-award-fill medalla-oro"></i> Cashisking
                </p>
              </div>
              <div className="ratio ratio-16x9">
                <iframe className="iframe-video" src="https://www.youtube.com/embed/sBDce_zQPiw?si=qeUWw7A_Hyl3PFrK"
                  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">6º Carrera - Premio <br /> "Juan Santos Leguizamon"</h5>
                <p className="card-text">
                  <i className="bi bi-award-fill medalla-oro"></i> Lucky Sant
                </p>
              </div>
              <div className="ratio ratio-16x9">
                <iframe className="iframe-video" src="https://www.youtube.com/embed/8OpFpq4RwsY?si=eJtarnQuprwoXRaJ"
                  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>

        </div>

        <div className="contenedor-boton-video">
          <Link to="/UltimasCarreras" className="boton-videos">Ver más</Link>
        </div>
      </div>
    </section>
  );
};

export default VideosRecientes;

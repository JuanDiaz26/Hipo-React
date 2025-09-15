import React from 'react';
import Navbar from '../../components/Navbar';
import './TablasPages.css'; // Asegurate que este archivo contenga los estilos específicos

const resultados = [
  {
    nombre: "Resultados nº 15 - 7 de Septiembre",
    link: "https://drive.google.com/file/d/1AumQD64c2eHCwvn_J3i1jBYLk7ULucTs/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 14 - 24 de Agosto",
    link: "https://drive.google.com/file/d/1ci_xKblTg7sm1xZiQ1CJSXc4DkCdc4Yu/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 13 - 10 de Agosto",
    link: "https://drive.google.com/file/d/1SU_hKJt_u5NBOPGYGx2FK78gcyuI633A/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 12 - 27 de Julio",
    link: "https://drive.google.com/file/d/1e03-agk3AwNXKCF4cL_Wpme9Z5kVKak2/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 11 - 13 de Julio",
    link: "https://drive.google.com/file/d/1G4T-wsD4jwbHPiqdDKqQGjX9WQcYQCjk/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 10 - 22 de Junio",
    link: "https://drive.google.com/file/d/1w-WnAUoBQS0yGqe9urnv2EZv-5wIygNe/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 9 - 8 de Junio",
    link: "https://drive.google.com/file/d/1RKb7v3LurZ6yGVmIpG1IKpv-mJT4cD5M/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 8 - 25 de Mayo",
    link: "https://drive.google.com/file/d/1Bpq7ROtbMkdU4GmCv4RyObyz-O-D0DRz/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 7 - 11 de Mayo",
    link: "https://drive.google.com/file/d/1JrobO1VpOGyGt5ZXExa3CoofGaClCGkC/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 6 - 26 de Abril",
    link: "https://drive.google.com/file/d/1tZERDZEWWxoLuNa-efPJBiIVm9jAJ4gT/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 5 - 13 de Abril",
    link: "https://drive.google.com/file/d/1JuutLaLY9ZvlBq3iDARAUqx-PislO8Su/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 4 - 30 de Marzo",
    link: "https://drive.google.com/file/d/1JSYaTslo1zW_aOYzhKse7bw2AMOv2saQ/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 3 - 16 de Marzo",
    link: "https://drive.google.com/file/d/1IsvZBH4KPjechMBypfvsVOH4GMZVvNEX/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 2 - 23 de Febrero",
    link: "https://drive.google.com/file/d/1BpV9tgmYhfIiwO6UP020EfNJ4NwP81A4/view?usp=sharing",
  },
  {
    nombre: "Resultados nº 1 - 16 de Febrero",
    link: "https://drive.google.com/file/d/1r7wfjByHpbCLs0gkNAp3s-tnURG4O5px/view?usp=sharing",
  },
];



const Resultados = () => {
  return (
    <>
      <Navbar variant="pages" />
      <main className="main-inicio main-pages">
        <div className="container-titulo-pages">
          <h3 className="titulo-pages">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
              className="bi bi-record-fill punto-color-titulo" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
            </svg>
            Resultados
          </h3>
        </div>

        <div className="separador-pages"></div>

        <div className="container-programas">
          <table>
            <thead>
              <tr className="titulos-tabla-programas">
                <th>Reunión</th>
                <th>Descargar</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((resultado, index) => (
                <tr key={index}>
                  <td>{resultado.nombre.toUpperCase()}</td>
                  <td>
                    <a href={resultado.link} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-file-pdf-fill logo-pdf" title="Descargar Resultado Oficial"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Resultados;

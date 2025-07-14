import React, { useState } from 'react';
import './Sorteo.css';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const Sorteo = () => {
  const [largada, setLargada] = useState(Array(15).fill(null));
  const [animando, setAnimando] = useState(false);

  const sortear = () => {
    const numeros = Array.from({ length: 15 }, (_, i) => i + 1);
    const mezclados = numeros.sort(() => Math.random() - 0.5);
    setAnimando(true);
    const nuevos = Array(15).fill(null);

    mezclados.forEach((num, index) => {
      setTimeout(() => {
        nuevos[index] = num;
        setLargada([...nuevos]);
        if (index === 14) setAnimando(false);
      }, index * 150);
    });
  };

  const descargarPDF = () => {
    const doc = new jsPDF();

    const rows = largada.map((num, i) => [i + 1, num ?? '-']);

    autoTable(doc, {
      head: [['ALFABÉTICO', 'LARGADA']],
      body: rows,
      startY: 25,
      styles: { halign: 'center' },
      headStyles: { fillColor: [23, 71, 157] },
      theme: 'grid',
    });

    doc.setFontSize(14);
    doc.text('Sorteo de Partidores - Reunión 13/07/2025', 10, 15);
    doc.setFontSize(10);
    doc.text('Sorteo avalado por la Secretaría de Carreras del Hipódromo de Tucumán', 10, doc.lastAutoTable.finalY + 10);

    doc.save('sorteo_partidores.pdf');
  };

  return (
    <div className="sorteo-wrapper">
      <h1 className="titulo-sorteo">🎲 Sorteo de Partidores</h1>

      <div className="info-bloque">
        <p className="fecha-reunion">Reunión Nº 13/07/2025</p>
        <p className="descripcion">
          El sorteo de partidores se realiza ordenando alfabéticamente los ejemplares
          inscriptos. Luego, se sortean 15 números al azar y se asignan según ese orden.
        </p>
      </div>

      <div className="sorteo-grid">
        <table className="sorteo-tabla">
          <thead>
            <tr>
              <th>ALFABÉTICO</th>
              <th>LARGADA</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 15 }, (_, index) => (
              <tr key={index} className={largada[index] ? 'aparece' : ''}>
                <td>{index + 1}</td>
                <td>{largada[index] ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="botonera">
          <button
            onClick={sortear}
            className="btn-sorteo"
            disabled={animando}
          >
            {animando ? 'Sorteando...' : 'Sortear'}
          </button>

          <button
            onClick={descargarPDF}
            className="btn-descargar"
            disabled={largada.every(val => val === null)}
          >
            Descargar PDF
          </button>
        </div>
      </div>

      <div className="leyenda-legal">
        Sorteo avalado por la Secretaría de Carreras del Hipódromo de Tucumán
      </div>
    </div>
  );
};

export default Sorteo;
import React, { useState } from "react";
import { Link } from "react-router-dom";

const months = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

const daysOfWeek = ["D", "L", "M", "X", "J", "V", "S"];

const linksData = [
  { year: 2025, month: 7, day: 13, url: "/carreras/13-julio" },
  { year: 2025, month: 7, day: 27, url: "/carreras/27-julio" },
  { year: 2025, month: 8, day: 10, url: "/carreras/10-agosto" },
  { year: 2025, month: 8, day: 24, url: "/carreras/24-agosto" },
  { year: 2025, month: 9, day: 7,  url: "https://drive.google.com/file/d/1-DB8lVcb_sUzjWB9AzZeceLvtkEasS1d/view?usp=sharing" },
  { year: 2025, month: 9, day: 24, url: "https://drive.google.com/file/d/145bSVII0wFVvLTcyn-zVTksaiRS9_X0H/view?usp=sharing" },
];

const isExternal = (url) => /^https?:\/\//i.test(url);

const fmtFecha = (y, m, d) => {
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("es-AR", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
};

const Calendar = () => {
  const today = new Date();
  const [currentYear] = useState(2025);
  const [currentMonth, setCurrentMonth] = useState(
    today.getFullYear() === 2025 ? today.getMonth() : 0
  );

  const prevMonth = () => currentMonth > 0 && setCurrentMonth(p => p - 1);
  const nextMonth = () => currentMonth < 11 && setCurrentMonth(p => p + 1);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const daysArray = Array(firstDayOfMonth).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  return (
    <div className="calendar">
      <div className="header-calendario">
        <button className="prev" onClick={prevMonth}>&lt;</button>
        <h2 id="month-year">{months[currentMonth]} {currentYear}</h2>
        <button className="next" onClick={nextMonth}>&gt;</button>
      </div>

      <div className="week-days">
        {daysOfWeek.map((d, i) => <div key={i} className="week-day">{d}</div>)}
      </div>

      <div className="days">
        {daysArray.map((day, index) => {
          if (day === null) return <div key={index} className="empty" />;

          const linkData = linksData.find(
            it => it.year === currentYear && it.month === currentMonth + 1 && it.day === day
          );

          const hasLink = Boolean(linkData);
          const externo = hasLink && isExternal(linkData.url);
          const title = hasLink
            ? (externo
                ? `Abrir enlace externo — ${fmtFecha(currentYear, currentMonth + 1, day)}`
                : `Ver carreras — ${fmtFecha(currentYear, currentMonth + 1, day)}`)
            : undefined;

          const aria = hasLink
            ? (externo
                ? `Abrir enlace externo del ${fmtFecha(currentYear, currentMonth + 1, day)}`
                : `Ver carreras del ${fmtFecha(currentYear, currentMonth + 1, day)}`)
            : undefined;

          return (
            <div
              key={index}
              className={`day ${hasLink ? "carrera" : ""} ${externo ? "externo" : "interno"}`}
            >
              {hasLink ? (
                externo ? (
                  <a
                    href={linkData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                    aria-label={aria}
                    className="day-link externo-link"
                  >
                    {day}<span className="ext-icon" aria-hidden>🔗</span>
                  </a>
                ) : (
                  <Link
                    to={linkData.url}
                    title={title}
                    aria-label={aria}
                    className="day-link interno-link"
                  >
                    {day}
                  </Link>
                )
              ) : (
                <span className="day-text">{day}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

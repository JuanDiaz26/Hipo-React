import React, { useState } from "react";
import { Link } from "react-router-dom";

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const daysOfWeek = ["D", "L", "M", "X", "J", "V", "S"];

const linksData = [
  { year: 2024, month: 2, day: 4, url: "/estadisticas" },
  { year: 2024, month: 2, day: 18, url: "/resultados" },
  { year: 2024, month: 8, day: 25, url: "#" },
];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const prevMonth = () => {
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
    setCurrentYear(prev => (currentMonth === 0 ? prev - 1 : prev));
  };

  const nextMonth = () => {
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
    setCurrentYear(prev => (currentMonth === 11 ? prev + 1 : prev));
  };

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
        {daysOfWeek.map((day, index) => <div key={index} className="week-day">{day}</div>)}
      </div>
      <div className="days">
        {daysArray.map((day, index) => {
          if (day === null) return <div key={index} className="empty"></div>;

          const linkData = linksData.find(item => item.year === currentYear && item.month === currentMonth + 1 && item.day === day);
          return (
            <div key={index} className={`day ${linkData ? "carrera" : ""}`}>
              {linkData ? (
                linkData.url !== "#" ? (
                  <Link to={linkData.url}>{day}</Link>
                ) : (
                  <span>{day}</span>
                )
              ) : (
                <span>{day}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const daysOfWeek = ["D", "L", "M", "X", "J", "V", "S"];

const linksData = [
  { year: 2025, month: 7, day: 13, url: "/carreras/13-julio" },
  { year: 2025, month: 7, day: 27, url: "/carreras/27-julio" },
  { year: 2025, month: 8, day: 10, url: "/carreras/10-agosto" },
  { year: 2025, month: 8, day: 24, url: "/carreras/24-agosto" },
];


const Calendar = () => {
  const today = new Date();

  const [currentYear] = useState(2025); // Siempre 2025

  const [currentMonth, setCurrentMonth] = useState(
    today.getFullYear() === 2025 ? today.getMonth() : 0
  );

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth(prev => prev + 1);
    }
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

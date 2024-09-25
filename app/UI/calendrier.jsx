import React, { useState } from "react";

const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const Calendar = ({ selectedDate, onDateClick }) => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const cells = [];
  for (let i = 0; i < firstDay; i++) {
    cells.push(
      <div key={`empty-${i}`} className="flex items-center justify-center border border-gray-300 p-2 bg-white"></div>
    );
  }
  daysArray.forEach(day => {
    cells.push(
      <div
        key={day}
        onClick={() => onDateClick(day)}
        className={`flex items-center justify-center border border-gray-300 p-2 cursor-pointer ${
          selectedDate?.getDate() === day ? "bg-blue-500 text-white" : "bg-white"
        }`}
      >
        {day}
      </div>
    );
  });
  const rows = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(
      <div key={`row-${i}`} className="flex">
        {cells.slice(i, i + 7)}
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map(day => (
          <div key={day} className="flex items-center justify-center font-medium text-gray-600 bg-white">
            {day}
          </div>
        ))}
      </div>
      {rows}
    </div>
  );
};

const CalendarToggle = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (day) => {
    const now = new Date();
    const newDate = new Date(now.getFullYear(), now.getMonth(), day);
    setSelectedDate(newDate);
    setShowCalendar(false); // Optionnel : Fermer le calendrier après la sélection
  };

  const formatDate = (date) => {
    if (!date) return "Sélectionner une date";
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="relative">
      <div
        onClick={() => setShowCalendar(!showCalendar)}
        className="cursor-pointer flex items-center p-2 bg-white rounded-lg shadow-md border border-gray-300"
        style={{ width: "200px" }} // Fixez la largeur ici
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac467bb542a975c9c5fcb7e819b5d96a3646e4e726b463e890863bae35864938?"
          className="shrink-0 w-7 aspect-square"
          alt="Calendar Icon"
        />
        <span className="ml-2 text-xl font-semibold flex-1 text-ellipsis overflow-hidden">
          {formatDate(selectedDate)}
        </span>
      </div>
      {showCalendar && (
        <div className="absolute top-full left-0 mt-2 w-full z-10">
          <Calendar selectedDate={selectedDate} onDateClick={handleDateClick} />
        </div>
      )}
    </div>
  );
};

export default CalendarToggle;

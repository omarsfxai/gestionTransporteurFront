import React, { useState } from "react";
import "country-flag-icons/react/3x2"; // Importe les drapeaux

const countries = [
  { code: "FR", name: "France" },
  { code: "US", name: "United States" },
  { code: "DE", name: "Germany" },
  { code: "JP", name: "Japan" },
  // Ajoutez plus de pays selon vos besoins
];

const CountrySelect = ({ control, name, title }) => {
  const [selectedCountry, setSelectedCountry] = useState("FR"); // Initialisez avec "FR" pour France

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <img
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCountry}.svg`}
        alt={`${selectedCountry} flag`}
        style={{ width: "24px", height: "auto", paddingLeft:"20px",paddingTop:"10px" }}
      />
      <select
        id="country-select"
        onChange={handleChange}
        {...control}
        name={name}
        value={selectedCountry}
        className="appearance-none bg-transparent border-none focus:outline-none pt-[10px] pl-[10px]"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      {/* <span className="ml-1 pt-[10px] pr-[100px]">
        <svg
          className="w-4 h-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span> */}
    </div>
  );
};

export default CountrySelect;

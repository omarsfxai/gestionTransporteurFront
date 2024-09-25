// Importations nécessaires
import React, { useState } from "react";
import "country-flag-icons/react/3x2"; // Importe les drapeaux

const countries = [
  { code: "FR", name: "France" },
  { code: "US", name: "United States" },
  { code: "DE", name: "Germany" },
  { code: "JP", name: "Japan" },
  // Ajoutez plus de pays selon vos besoins
];

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <div>
      <div className="flex gap-5 justify-between items-start px-5 py-3 mt-8 max-w-full whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid w-[360px]">
        <div className="flex flex-col">
          <div className="text-xs leading-5 text-gray-400">Pays</div>
          <div >
            <select
              id="country-select"
              onChange={handleChange}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code} >
                  {country.name}
                </option>
              ))}
            </select>
            {selectedCountry && (
              <div>
                <span className="mr-3 mt-2">
                  <img
                    src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCountry}.svg`}
                    alt={`${selectedCountry} flag`}
                    style={{ width: "24px", height: "auto" }}
                  />
                </span>
                {
                  countries.find((country) => country.code === selectedCountry)
                    ?.name
                }
              </div>
            )}
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/35628c05632e0e1510284dc47844b3368592900552e8b4af94e4267618ed95f2?"
          className="shrink-0 mt-3.5 w-6 aspect-square"
        />
      </div>
    </div>
  );
};

export default CountrySelect;

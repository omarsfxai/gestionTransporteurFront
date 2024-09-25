import React from "react";

// Composant Select réutilisable
const Select = ({
  options,         // Liste des options au format [{ value: 'value1', label: 'Label 1' }, ...]
  value,           // Valeur sélectionnée actuellement
  onChange,        // Fonction appelée lorsque la valeur change
  placeholder,     // Texte de l'espace réservé (placeholder)
  className,       // Classe CSS personnalisée
  id,              // ID du select
  name,            // Nom du select
  disabled = false // Indique si le select est désactivé
}) => {
  return (
    <div className={`relative ${className}`}>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-[40px] w-[170px]"
      >
        <option value="" disabled>
          {placeholder || "Select an option"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

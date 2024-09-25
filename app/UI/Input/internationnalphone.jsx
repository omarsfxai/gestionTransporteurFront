import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Styles for react-phone-number-input

function PhoneNumberInput({
  label,
  required,
  placeholder,
  value,
  onChange,
  error,
  register, // Ensure register is passed as a prop
}) {
  return (
    <div className="flex gap-4 mt-1.5">
      <div className="flex flex-col justify-center px-5 py-2.5 bg-white rounded-lg border border-gray-300 border-solid">
        <label className="text-xs leading-5 text-gray-400">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
        <PhoneInput
          international
          defaultCountry="FR"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`p-1 text-sm leading-5 focus:outline-none focus:border-tw-primary bg-transparent w-[350px]`}
          {...register('telephone', { 
            required: {
              value: true,
              message: 'Téléphone est obligatoire',
            },
            validate: (value) =>
              value.length > 4 || 'Téléphone est obligatoire',
          })}
        />
        {error && (
          <span className="text-xs text-red-600 font-semibold mt-1">
            {error.message}
          </span>
        )}
      </div>
    </div>
  );
}

export default PhoneNumberInput;

import React, { useState } from "react";
import { mdiEyeOutline, mdiEyeOffOutline } from "@mdi/js";
import Icon from "@mdi/react";

function Input({ label, placeholder = " ", register, type }) {
  const [inputType, setInputType] = useState(type);

  const toggleVisible = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div className="flex flex-col justify-center px-5 py-2.5 mt-2 max-w-full bg-white rounded-lg border border-gray-300 border-solid w-[360px]">
      <span className="text-xs leading-5 text-gray-400">{label}</span>
      <div className="flex items-center gap-5 justify-between text-sm leading-5 whitespace-nowrap text-stone-900">
        {type === "password" && (
          <span className="absolute top-[13px] right-[18px] cursor-pointer" onClick={toggleVisible}>
            <Icon path={inputType === "text" ? mdiEyeOutline : mdiEyeOffOutline} size={1} />
          </span>
        )}
        <input
          {...register}
          type={inputType}
          className="flex-grow p-1 h-1 text-sm leading-5 text-stone-900 border-none outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default Input;

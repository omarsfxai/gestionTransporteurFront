import React, { useState } from "react";
import { mdiEyeOutline, mdiEyeOffOutline } from "@mdi/js";
import Icon from "@mdi/react";

function Input({ type: initialType, label, placeholder = " ", required, ...props }) {
  const [type, setType] = useState(initialType);
  const toggleVisible = () => {
    if (type === "password") {
      setType("text");
    } else if (type === "text") {
      setType("password");
    } else if (type === "time") {
      setType("date");
    } else {
      setType("time");
    }
  };

  return (
    <div className="flex flex-col my-1 2xl:my-3 2xl:py-2 py-[5px] relative max-w-full bg-white rounded-lg border border-gray-300 w-[400px]">
      <label className="font-semibold text-xs text-darkgrey mx-1 absolute top-[-2px] left-4 bg-white dark:bg-bgdark px-3 z-[2]">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="flex items-center gap-5 justify-between text-sm leading-5 whitespace-nowrap text-stone-900">
        {initialType === "password" && (
          <span className="absolute top-[13px] right-[18px] cursor-pointer" onClick={toggleVisible}>
            <i className="text-grey" aria-hidden="true">
              {type === "text" ? <Icon path={mdiEyeOutline} size={1} /> : <Icon path={mdiEyeOffOutline} size={1} />}
            </i>
          </span>
        )}
        <input
          {...props}
          type={type}
          className="flex-grow p-1 h-2 h-[40px] w-[200px] rounded-[12px] text-sm leading-5 text-stone-900 border border-gray-300 rounded-md outline-none"
          placeholder={placeholder}
          onFocus={(e) => setType(e.target.type)}
        />
      
      </div>
    </div>
  );
}

export default Input;

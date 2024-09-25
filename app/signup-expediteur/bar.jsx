import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Bar({ role, onExpediteurClick, onTransporteurClick }) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleExpediteurClick = () => {
    setIsClicked(true);
    onExpediteurClick();
  };

  const handleTransporteurClick = () => {
    setIsClicked(true);
    onTransporteurClick();
  };

  return (
    <div className="flex gap-5 self-stretch text-base font-semibold text-center max-md:flex-wrap">
      <button
        type="button"
        onClick={handleExpediteurClick}
        className={`justify-center px-3.5 py-6 rounded-md border border-solid ${
          isClicked
            ? "text-white bg-cyan-800 border-cyan-800"
            : "text-cyan-800 bg-white border-cyan-800"
        }`}
      >
        Je suis expediteur
      </button>
      <button
        type="button"
        onClick={handleTransporteurClick}
        className={`justify-center px-3.5 py-6 rounded-md border border-solid ${
          isClicked
            ? "text-cyan-800 bg-white border-cyan-800"
            : "text-white bg-cyan-800 border-cyan-800"
        }`}
      >
        Je suis transporteur
      </button>
      <div className="flex gap-2.5 items-center px-6 py-5 whitespace-nowrap bg-white rounded-md text-slate-950 max-md:pl-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e08353a1a185965b6002c81e303642e4d2fe725a8e6650b3a7a545edbe2e7da6?"
          className="shrink-0 self-stretch my-auto w-4 aspect-square"
        />
        <div className="self-stretch my-auto">Français</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/35628c05632e0e1510284dc47844b3368592900552e8b4af94e4267618ed95f2?"
          className="shrink-0 self-stretch w-6 aspect-square"
        />
      </div>
    </div>
  );
}

export default Bar;

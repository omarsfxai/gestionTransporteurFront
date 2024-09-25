import * as React from "react";
import user from "./userpreview.png";
import Image from "next/image";

function navBar() {
  return (
    <div className="px-16 py-9 bg-white rounded-3xl shadow-lg max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-5 self-stretch my-auto text-base font-semibold font-sans text-center text-slate-950 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div>Mes demandes</div>
            <div>Operations en cours</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-5 justify-between text-base font-semibold font-sans text-center text-white whitespace-nowrap max-md:mt-10">
            <Image src={user} width={40} height={40} alt="transport" />

            <div className="flex gap-2.5 justify-center self-stretch px-3.5 py-2.5 text-white bg-sky-900 rounded">
              <div>Créer une demande </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/baa895a002eea34f6420c766420aff8e0e4738b49bbceb22a69fba02c260968b?"
                className="shrink-0 w-5 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navBar;

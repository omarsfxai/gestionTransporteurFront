import React, { useState } from "react";
import ModalDemande from "./ModalDemande";

function DemandeTransport() {
  const [isModalDemandeOpen, setIsModalDemandeOpen] = useState(false);

  const openModalDemande = () => {
    setIsModalDemandeOpen(true);
  };

  const closeModalDemande = () => {
    setIsModalDemandeOpen(false);
  };

  return (
    <div className="pb-11 mt-10 bg-white rounded-3xl border border-gray-400 border-solid max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow font-semibold max-md:mt-10">
                  <div className="flex flex-col items-start py-5 pr-20 pl-6 text-base leading-7 text-white rounded-3xl bg-slate-400 max-md:px-5">
                    <div className="flex gap-3.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0414f7dd87c81a370ce681144b0a637de86784f1c860c56a1d4f08fb02d7d3e?"
                        className="shrink-0 self-start w-6 aspect-[1.72]"
                      />
                      <div className="flex-auto">Demande de transport</div>
                    </div>
                    <div className="mt-4 ml-8 max-md:ml-2.5">
                      Id: 2948FRB4OJ
                    </div>
                  </div>
                  <div className="flex flex-col items-start pr-20 pl-6 mt-5 max-md:px-5">
                    <div className="flex gap-3.5 text-sm leading-7 text-cyan-800">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bc6d564699c5cc7dd70ad784fb23d3ab385ccc4a9762076d9f0a36058bc8cbb?"
                        className="shrink-0 w-6 aspect-[1.09]"
                      />
                      <div className="flex-auto">Détails de l'emballage:</div>
                    </div>
                    <div className="self-end mt-6 text-base leading-7 text-slate-950">
                      volume m3/ poids kg
                    </div>
                    <div className="self-end mt-6 text-base leading-7 text-slate-950">
                      type de cargo
                    </div>
                    <div className="justify-center px-2 py-1.5 mt-16 ml-9 text-xs font-medium leading-3 text-white capitalize whitespace-nowrap bg-emerald-600 rounded max-md:mt-10 max-md:ml-2.5">
                      Ouvert
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full bg-white">
                <div className="flex flex-col mt-16 text-base font-semibold leading-7 text-slate-950 max-md:mt-10">
                  <div className="text-cyan-800">Ramassage </div>
                  <div className="mt-6">date de ramassage souhaité</div>
                  <div className="mt-7 text-sm leading-7 text-gray-400">
                    2118 Thornridge Cir. Syracuse, Connecticut 35624
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-base font-semibold leading-7 text-slate-950 max-md:mt-10">
                  <div className="text-cyan-800">Dépose</div>
                  <div className="mt-6">Date d'arrivé souhaité</div>
                  <div className="mt-6 text-sm leading-7 text-gray-400">
                    2118 Thornridge Cir. Syracuse, Connecticut 35624
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
                <button
                  onClick={openModalDemande}
                  className="justify-center px-3.5 py-2.5 mt-7 text-base font-semibold text-center text-white bg-cyan-800 rounded max-md:mt-10"
                >
                  Demande Transport
                </button>
                <ModalDemande isOpen={isModalDemandeOpen} onClose={closeModalDemande} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemandeTransport;

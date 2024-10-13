import React, { useState, useEffect } from "react";
import ModalDemande from "./ModalDemande";
import ModalOffres from "./ModalOffres"; // Import the new modal
import axios from "axios";

function DemandeTransport() {
  const [isModalDemandeOpen, setIsModalDemandeOpen] = useState(false);
  const [isModalOffresOpen, setIsModalOffresOpen] = useState(false); // State for the offres modal
  const [demandes, setDemandes] = useState([]);
  const [offreCounts, setOffreCounts] = useState({});
  const [selectedDemandeId, setSelectedDemandeId] = useState(null); // State to hold the selected demande ID for modal

  const openModalDemande = () => {
    setIsModalDemandeOpen(true);
  };

  const closeModalDemande = () => {
    setIsModalDemandeOpen(false);
  };

  const openModalOffres = (demandeId) => {
    setSelectedDemandeId(demandeId);
    setIsModalOffresOpen(true);
  };

  const closeModalOffres = () => {
    setIsModalOffresOpen(false);
    setSelectedDemandeId(null); // Clear the selected ID
  };

  const decodeToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const decodedToken = JSON.parse(jsonPayload);
    return decodedToken.id;
  };

  useEffect(() => {
    const expediteurId = decodeToken(); 
    const fetchDemandes = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/demandeTransport/demandeByExpediteur/${expediteurId}`);
        setDemandes(response.data);
        await fetchOffreCounts(response.data);
      } catch (error) {
        console.error("Error fetching demandes:", error);
      }
    };

    fetchDemandes();
  }, []);

  const fetchOffreCounts = async (demandes) => {
    const counts = {};
    for (const demande of demandes) {
      try {
        const response = await axios.get(`http://localhost:3002/offre/offre-transport/demande/${demande.id}`);
        counts[demande.id] = response.data.length;
      } catch (error) {
        console.error(`Error fetching offres for demande ${demande.id}:`, error);
        counts[demande.id] = 0;
      }
    }
    setOffreCounts(counts);
  };

  return (
    <div className="pb-11 mt-10 bg-white rounded-3xl border border-gray-400 border-solid max-md:max-w-full">
      <div className="flex justify-center">
        <button
          onClick={openModalDemande}
          className="justify-center px-3.5 py-2.5 text-base font-semibold text-center text-white bg-cyan-800 rounded"
        >
          Demande Transport
        </button>
        <ModalDemande isOpen={isModalDemandeOpen} onClose={closeModalDemande} />
      </div>

      {demandes.map((demande) => (
        <div key={demande.id} className="flex gap-5 max-md:flex-col max-md:gap-0">
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
                        Id: {demande.id} | Offres Count: 
                        <span 
                          onClick={() => openModalOffres(demande.id)} // Open modal on click
                          className="cursor-pointer text-blue-500 underline ml-2"
                        >
                          {offreCounts[demande.id] || 0}
                        </span>
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
                        {demande.gerbable}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full bg-white">
                  <div className="flex flex-col mt-16 text-base font-semibold leading-7 text-slate-950 max-md:mt-10">
                    <div className="text-cyan-800">Ramassage</div>
                    <div className="mt-6">{new Date(demande.dateDepart).toLocaleDateString()}</div>
                    <div className="mt-7 text-sm leading-7 text-gray-400">
                      {demande.adresseDepart}, {demande.codePostalDepart}, {demande.paysDepart}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base font-semibold leading-7 text-slate-950 max-md:mt-10">
                    <div className="text-cyan-800">Dépose</div>
                    <div className="mt-6">{new Date(demande.dateArrive).toLocaleDateString()}</div>
                    <div className="mt-6 text-sm leading-7 text-gray-400">
                      {demande.adresseArrive}, {demande.codeArrive}, {demande.paysArrive}
                    </div>
                  </div>
                </div>
        </div>
      ))}
      <ModalOffres isOpen={isModalOffresOpen} onClose={closeModalOffres} demandeId={selectedDemandeId} />
    </div>
  );
}

export default DemandeTransport;

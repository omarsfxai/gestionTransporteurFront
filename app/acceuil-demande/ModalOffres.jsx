// ModalOffres.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function ModalOffres({ isOpen, onClose, demandeId }) {
  const [offres, setOffres] = useState([]);

  useEffect(() => {
    if (isOpen && demandeId) {
      const fetchOffres = async () => {
        try {
          const response = await axios.get(`http://localhost:3002/offre/offre-transport/demande/${demandeId}`);
          setOffres(response.data);
        } catch (error) {
          console.error("Error fetching offres:", error);
        }
      };
      fetchOffres();
    }
  }, [isOpen, demandeId]);

  const handleAccept = async (offreId) => {
    try {
      await axios.post(`http://localhost:3002/offre/offre-transport/accept/${offreId}`);
      setOffres((prevOffres) => prevOffres.filter((offre) => offre.id !== offreId)); 
      alert("Offer accepted!");
    } catch (error) {
      console.error("Error accepting offer:", error);
      alert("Failed to accept the offer.");
    }
  };

  const handleReject = async (offreId) => {
    try {
      await axios.post(`http://localhost:3002/offre/offre-transport/reject/${offreId}`);
      setOffres((prevOffres) => prevOffres.filter((offre) => offre.id !== offreId)); 
      alert("Offer rejected!");
    } catch (error) {
      console.error("Error rejecting offer:", error);
      alert("Failed to reject the offer.");
    }
  };

  if (!isOpen) return null;

  // Check if any offer is accepted
  const acceptedOffres = offres.filter((offre) => offre.is_accepted);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg max-w-lg">
        <h2 className="text-lg font-semibold mb-4">Offres for Demande ID: {demandeId}</h2>
        <ul>
          {acceptedOffres.length > 0 ? (
            acceptedOffres.map((offre) => (
              <li key={offre.id} className="mb-4 p-2 border-b">
                <p>Offre ID: {offre.id}</p>
                <p>Prix: {offre.prix} €</p>
                <p>Etat: {offre.etat}</p>
              </li>
            ))
          ) : (
            offres.map((offre) => (
              <li key={offre.id} className="mb-4 p-2 border-b">
                <p>Offre ID: {offre.id}</p>
                <p>Prix: {offre.prix} €</p>
                <p>Etat: {offre.etat}</p>
                <div className="mt-2">
                  <button
                    onClick={() => handleAccept(offre.id)}
                    className="mr-2 px-4 py-2 bg-green-600 text-white rounded"
                  >
                    Accepter
                  </button>
                  <button
                    onClick={() => handleReject(offre.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded"
                  >
                    Refuser
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-cyan-800 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
}

export default ModalOffres;

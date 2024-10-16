import React, { useEffect, useState } from "react";

const decodeToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  const decodedToken = JSON.parse(jsonPayload);
  return decodedToken.id; // Assuming this is the id_transporteur
};

const NewModal = ({ isOpen, onClose }) => {
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [etat, setEtat] = useState("");

  const etatOptions = ["en cours", "livrée", "retour"];

  useEffect(() => {
    const fetchOffers = async () => {
      const idTransporteur = decodeToken(); // Get transporter ID from token
      if (idTransporteur) {
        try {
          const response = await fetch(`http://localhost:3002/offre/transporteur/${idTransporteur}`);
          const data = await response.json();
          setOffers(data);
        } catch (error) {
          console.error("Erreur lors de la récupération des offres :", error);
        }
      }
    };

    if (isOpen) {
      fetchOffers();
    }
  }, [isOpen]);

  const handleUpdateEtat = async (offerId) => {
    try {
      const response = await fetch(`http://localhost:3002/offre/etat/${offerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ etat }),
      });

      if (response.ok) {
        const updatedOffer = await response.json();
        setOffers((prevOffers) =>
          prevOffers.map((offer) => (offer.id === updatedOffer.id ? updatedOffer : offer))
        );
        setSelectedOffer(null);
        setEtat("");
      } else {
        console.error("Erreur lors de la mise à jour de l'état");
      }
    } catch (error) {
      console.error("Erreur :", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 z-10 max-w-3xl w-full h-auto max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Offres de Transport</h2>
        <div className="mt-4">
          {offers.length === 0 ? (
            <p className="text-gray-500">Aucune offre disponible.</p>
          ) : (
            offers.map((offer) => (
              <div key={offer.id} className="flex items-center justify-between my-2 p-3 rounded shadow-sm">
                <div>
                  <p className="font-medium">Prix : {offer.prix}</p>
                  <p className="text-sm text-gray-600">État : {offer.etat}</p>
                </div>
                <button 
                  onClick={() => {
                    setSelectedOffer(offer.id);
                    setEtat(offer.etat);
                  }}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded shadow"
                >
                  Modifier l'État
                </button>
              </div>
            ))
          )}
        </div>
        {selectedOffer && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Changer l'État :</label>
            <select
              value={etat}
              onChange={(e) => setEtat(e.target.value)}
              className="border p-2 rounded w-full mt-1"
            >
              <option value="" disabled>Sélectionnez un état</option>
              {etatOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <button 
              onClick={() => handleUpdateEtat(selectedOffer)} 
              className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow"
            >
              Confirmer la Mise à Jour
            </button>
          </div>
        )}
        <button onClick={onClose} className="mt-6 text-red-500 hover:text-red-600">Fermer</button>
      </div>
    </div>
  );
};

export default NewModal;

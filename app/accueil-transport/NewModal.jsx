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

  useEffect(() => {
    const fetchOffers = async () => {
      const idTransporteur = decodeToken(); // Get transporter ID from token
      if (idTransporteur) {
        try {
          const response = await fetch(`http://localhost:3002/offre/transporteur/${idTransporteur}`);
          const data = await response.json();
          setOffers(data);
        } catch (error) {
          console.error("Error fetching offers:", error);
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
        console.error("Error updating etat");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-lg">
        <h2 className="text-lg font-semibold">Offres</h2>
        <div className="mt-4">
          {offers.length === 0 ? (
            <p>No offers available.</p>
          ) : (
            offers.map((offer) => (
              <div key={offer.id} className="flex items-center justify-between my-2">
                <div>
                  <p>Prix: {offer.prix}</p>
                  <p>Etat: {offer.etat}</p>
                </div>
                <button 
                  onClick={() => {
                    setSelectedOffer(offer.id);
                    setEtat(offer.etat);
                  }}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Update Etat
                </button>
              </div>
            ))
          )}
        </div>
        {selectedOffer && (
          <div className="mt-4">
            <input
              type="text"
              value={etat}
              onChange={(e) => setEtat(e.target.value)}
              placeholder="Enter new etat"
              className="border p-2 rounded w-full"
            />
            <button 
              onClick={() => handleUpdateEtat(selectedOffer)} 
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
            >
              Confirm Update
            </button>
          </div>
        )}
        <button onClick={onClose} className="mt-4 text-red-500">Close</button>
      </div>
    </div>
  );
};

export default NewModal;
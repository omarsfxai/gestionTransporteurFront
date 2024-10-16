import React, { useState, useEffect } from "react";
import Input from '../UI/Input/input';

const ModalDemande = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    paysDepart: '',
    adresseDepart: '',
    codePostalDepart: '',
    paysArrive: '',
    adresseArrive: '',
    codeArrive: '',
    dateDepart: '',
    dateArrive: '',
    gerbable: 'Non',
    frigorifie: false,
    dangereux: false,
    pieceJointes: '',
    photo: '',
    cargoId: '',
  });

  const [file, setFile] = useState(null);
  const [cargoList, setCargoList] = useState([]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const expediteurId = decodeToken(); 
    if (!expediteurId) {
      console.error("User ID not found");
      return;
    }
  
    // Prepare the data to send
    const dataToSend = {
      expediteurId, 
      paysDepart: formData.paysDepart,
      adresseDepart: formData.adresseDepart,
      codePostalDepart: formData.codePostalDepart,
      paysArrive: formData.paysArrive,
      adresseArrive: formData.adresseArrive,
      codeArrive: formData.codeArrive,
      dateDepart: formData.dateDepart,
      dateArrive: formData.dateArrive,
      photo: formData.photo, // Assuming you have a method to set this if needed
      gerbable: formData.gerbable === 'Oui', // Convert to boolean
      frigorifie: formData.frigorifie,
      dangereux: formData.dangereux,
      pieceJointes: formData.pieceJointes,
      cargoIds: [formData.cargoId], // Ensure this is an array
    };
  
    try {
      const response = await fetch('http://localhost:3002/demandeTransport/addDemande', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set to application/json
        },
        body: JSON.stringify(dataToSend), // Send JSON data
      });
  
      if (response.ok) {
        console.log("Form Data Submitted Successfully");
  
        // Reset form after successful submission
        setFormData({
          paysDepart: '',
          adresseDepart: '',
          codePostalDepart: '',
          paysArrive: '',
          adresseArrive: '',
          codeArrive: '',
          dateDepart: '',
          dateArrive: '',
          gerbable: 'Non',
          frigorifie: false,
          dangereux: false,
          pieceJointes: '',
          photo: '',
          cargoId: '',
        });
        setFile(null);
        onClose(); 
      } else {
        console.error("Erreur lors de l'envoi des données");
      }
    } catch (error) {
      console.error('Erreur lors de la soumission', error);
    }
  };
  
  

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  useEffect(() => {
    const fetchCargoData = async () => {
      try {
        const response = await fetch('http://localhost:3002/cargo/allCargo');
        if (response.ok) {
          const data = await response.json();
          setCargoList(data);
        } else {
          console.error("Failed to fetch cargo data");
        }
      } catch (error) {
        console.error('Error fetching cargo data', error);
      }
    };

    fetchCargoData();
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 max-md:w-[400px] max-h-[90vh] overflow-y-auto"> {/* Updated styles */}
        <h2 className="text-2xl font-bold mb-4 font-sans max-md:text-xl">Demande de Transport</h2>
        <form onSubmit={handleSubmit}>
          {/* Input Fields */}
          <Input
            label="Pays de départ"
            placeholder="Pays de départ"
            value={formData.paysDepart}
            onChange={(e) => handleInputChange({ target: { name: "paysDepart", value: e.target.value } })}
            type="text"
          />
          <Input
            label="Adresse de départ"
            placeholder="Adresse de départ"
            value={formData.adresseDepart}
            onChange={(e) => handleInputChange({ target: { name: "adresseDepart", value: e.target.value } })}
            type="text"
          />
          <Input
            label="Code postal de départ"
            placeholder="Code postal de départ"
            value={formData.codePostalDepart}
            onChange={(e) => handleInputChange({ target: { name: "codePostalDepart", value: e.target.value } })}
            type="text"
          />
          <Input
            label="Pays d'arrivée"
            placeholder="Pays d'arrivée"
            value={formData.paysArrive}
            onChange={(e) => handleInputChange({ target: { name: "paysArrive", value: e.target.value } })}
            type="text"
          />
          <Input
            label="Adresse d'arrivée"
            placeholder="Adresse d'arrivée"
            value={formData.adresseArrive}
            onChange={(e) => handleInputChange({ target: { name: "adresseArrive", value: e.target.value } })}
            type="text"
          />
          <Input
            label="Code postal d'arrivée"
            placeholder="Code postal d'arrivée"
            value={formData.codeArrive}
            onChange={(e) => handleInputChange({ target: { name: "codeArrive", value: e.target.value } })}
            type="text"
          />
          <Input
            label="Date de départ"
            placeholder="Date de départ"
            value={formData.dateDepart}
            onChange={(e) => handleInputChange({ target: { name: "dateDepart", value: e.target.value } })}
            type="date"
          />
          <Input
            label="Date d'arrivée"
            placeholder="Date d'arrivée"
            value={formData.dateArrive}
            onChange={(e) => handleInputChange({ target: { name: "dateArrive", value: e.target.value } })}
            type="date"
          />
          <div className="flex flex-col justify-center px-5 py-2.5 mt-2 max-w-full bg-white rounded-lg border border-gray-300 border-solid w-[360px]">
            <span className="text-xs leading-5 text-gray-400">Gerbable</span>
            <select
              name="gerbable"
              value={formData.gerbable}
              onChange={handleInputChange}
              className="flex-grow p-1 h-1 text-sm leading-5 text-stone-900 border-none outline-none"
            >
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
          </div>
          <div className="flex items-center mt-2">
            <label className="mr-2">Frigorifié</label>
            <input
              type="checkbox"
              name="frigorifie"
              checked={formData.frigorifie}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center mt-2">
            <label className="mr-2">Dangereux</label>
            <input
              type="checkbox"
              name="dangereux"
              checked={formData.dangereux}
              onChange={handleInputChange}
            />
          </div>
          <Input
            label="Pièce jointe"
            placeholder="Ajouter un fichier"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {/* Cargo Select */}
          <div className="flex flex-col mt-4">
            <label htmlFor="cargoId" className="mb-1">Choisir une cargaison</label>
            <select
              name="cargoId"
              value={formData.cargoId}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="">Sélectionnez une cargaison</option>
              {cargoList.map(cargo => (
                <option key={cargo.id} value={cargo.id}>
                  {cargo.libelle}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
              Soumettre
            </button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white rounded px-4 py-2 ml-2">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalDemande;

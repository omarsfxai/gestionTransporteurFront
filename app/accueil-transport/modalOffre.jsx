import React, { useState } from 'react';
import Input from '../UI/Input/input';

const Modal = ({ isOpen, onClose, demandeId }) => {
  const [prixTotal, setPrixTotal] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object to send
    const data = {
        id_demande_transport: demandeId, 
        prix: prixTotal,                  
    };

    try {
        const response = await fetch('http://localhost:3002/offre/offre-transport', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data), 
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Offre saved successfully:', result);
            onClose(); 
        } else {
            const errorResponse = await response.json();
            console.error('Error saving offre:', errorResponse);
        }
    } catch (error) {
        console.error('Error:', error);
    }
  };



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 max-md:w-[400px]">
        <h2 className="text-2xl font-bold mb-4 font-sans max-md:text-xl">Proposer une Offre</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              label="Prix Total"
              placeholder="prix"
              required
              value={prixTotal}
              onChange={(e) => setPrixTotal(e.target.value)}
              props={{
                type: 'text'
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
              Télécharger un fichier
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-cyan-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

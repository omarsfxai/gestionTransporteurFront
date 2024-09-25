import React, { useState } from 'react';
import Input from '../UI/Input/input';

const ModalDemande = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [prixTotal, setPrixTotal] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour gérer l'envoi de l'offre
    console.log("Prix Total:", prixTotal);
    console.log("Fichier:", file);

    // Réinitialiser les valeurs après soumission
    setPrixTotal('');
    setFile(null);
    onClose(); // Fermer le modal après soumission
  };

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
              onChange={(e) => setPrixTotal(e.target.value)} // Gestion de l'état
              props={{
                type: 'text',
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
              onChange={(e) => setFile(e.target.files[0])} // Gestion de l'état pour le fichier
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

export default ModalDemande;
import React, { useState } from 'react';
import Input from '../UI/Input/input';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 max-md:w-[400px]">
        <h2 className="text-2xl font-bold mb-4 font-sans max-md:text-xl">Proposer une Offre</h2>
        <form>
          <div className="mb-4">
          <Input
              label="Prix Total"
              placeholder="prix"
              required
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

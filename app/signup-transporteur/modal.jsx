"use client";
import React from "react";

const SuccessModal = ({ isOpen, onClose }) => {

  const handleLoginRedirect = () => {
    window.location.href = "/login";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 mr-[700px] rounded-lg shadow-lg w-1/3 max-md:w-[400px]">
        <h2 className="text-2xl font-bold mb-4 font-sans max-md:text-xl">Inscription Réussie!</h2>
        <p className="mb-4">Votre compte a été créé avec succès.</p>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleLoginRedirect}
            className="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

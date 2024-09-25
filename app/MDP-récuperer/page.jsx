"use client";
import React, { useState } from 'react';
import NavBar from "../accueil-transport/navBar";

 function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    
  };

  return (
    <>
    <div className="flex flex-col px-20 pt-9 pb-20 bg-white rounded-xl max-md:px-5">
        <NavBar />
        </div>
    <div className="flex flex-col px-20 pt-9 pb-20 bg-white rounded-xl max-md:px-5">
      <div className="flex z-10 flex-col self-center mt-[50px] pt-5 pb-20 bg-white rounded-3xl shadow-lg max-w-[501px]">
        <h2 className="text-2xl font-bold text-cyan-800 text-center">Créer un nouveau mot de passe</h2>
        <form onSubmit={handleSubmit} className="mt-6 px-10">
          <div className="flex flex-col mb-6">
            <label className="text-base tracking-normal text-slate-950">Nouveau mot de passe</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              className="border border-gray-300 rounded-lg px-4 py-2 mt-2"
              placeholder="Entrez votre nouveau mot de passe"
              required
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-base tracking-normal text-slate-950">Confirmer le mot de passe</label>
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
              className="border border-gray-300 rounded-lg px-4 py-2 mt-2"
              placeholder="Confirmez votre mot de passe"
              required
            />
          </div>
          <button 
            type="submit" 
            className="bg-cyan-800 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 w-full">
            Enregistrer
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
export default ResetPassword;

"use client";
import React, { useState } from 'react';
import NavBar from "../accueil-transport/navBar";

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send reset code to email
  };

  return (
    <>
      <div className="flex flex-col px-20 pt-9 pb-20 bg-white rounded-xl max-md:px-5">
        <NavBar />
      </div>
      <div className="flex flex-col px-20 pt-9 pb-20 bg-white rounded-xl max-md:px-5">
        <div className="flex z-10 flex-col self-center mt-[50px] pt-5 pb-20 bg-white rounded-3xl shadow-lg max-w-[501px]">
          <h2 className="text-2xl font-bold text-cyan-800 text-center">Mot de passe oublié</h2>
          <form onSubmit={handleSubmit} className="mt-6 px-10">
            <div className="flex flex-col mb-6">
              <label className="text-base tracking-normal text-slate-950">Adresse e-mail</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className="border border-gray-300 rounded-lg px-4 py-2 mt-2"
                placeholder="Entrez votre email"
                required
              />
            </div>
            <button 
              type="submit" 
              className="bg-cyan-800 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 w-full">
              Envoyer un code par mail
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;

'use client'
import React, { useState } from "react";
import './formProfile.css'; // Fichier CSS pour le style

const FormProfile = () => {
  const [formData, setFormData] = useState({
    pays: "France",
    company: "ABC Company",
    poste: "Développeur Web",
    address: "123 Rue de la Liberté",
    nom: "Doe",
    prenom: "John",
    phoneNumber: "+33 123456789",
    email: "john.doe@example.com",
    password: "password123"
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez gérer la soumission du formulaire, comme l'envoi des données au serveur
    console.log(formData);
  };

  return (
    <div className="form-container">
     
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pays:</label>
          <input type="text" name="pays" value={formData.pays} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Company:</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Poste:</label>
          <input type="text" name="poste" value={formData.poste} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Adresse:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Nom:</label>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Prénom:</label>
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Mot de passe:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
       
     
      </form>
    </div>
  );
}

export default FormProfile;
import React, { useState, useEffect } from "react";
import axios from "axios";

const ModalCargo = ({ isOpen, onClose }) => {
  const [cargoList, setCargoList] = useState([]);
  const [newCargo, setNewCargo] = useState({
    id: null,  // Add id for editing
    typeCargoId: 1,
    libelle: '',
    longeur: '',
    largeur: '',
    hauteur: '',
    poids: '',
  });

  const fetchCargo = async () => {
    try {
      const response = await axios.get("http://localhost:3002/cargo/allCargo");
      setCargoList(response.data);
    } catch (error) {
      console.error("Error fetching cargo:", error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchCargo();
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCargo({ ...newCargo, [name]: value });
  };

  const handleAddCargo = async () => {
    try {
      await axios.post("http://localhost:3002/cargo/addCargo", newCargo);
      fetchCargo(); // Refresh cargo list
      resetForm(); // Reset form
    } catch (error) {
      console.error("Error adding cargo:", error);
    }
  };

  const handleUpdateCargo = async () => {
    try {
      await axios.put(`http://localhost:3002/cargo/update/${newCargo.id}`, newCargo);
      fetchCargo(); // Refresh cargo list after update
      resetForm(); // Reset form
    } catch (error) {
      console.error("Error updating cargo:", error);
    }
  };

  const resetForm = () => {
    setNewCargo({
      id: null,
      typeCargoId: 1,
      libelle: '',
      longeur: '',
      largeur: '',
      hauteur: '',
      poids: '',
    });
  };

  const handleDeleteCargo = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/cargo/delete/${id}`);
      fetchCargo(); // Refresh cargo list after deletion
    } catch (error) {
      console.error("Error deleting cargo:", error);
    }
  };

  const handleEditCargo = (cargo) => {
    // Set the cargo details in the form for editing
    setNewCargo(cargo);
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <button className="close-button" onClick={onClose}>X</button>
          <h2>Gérer les Colis</h2>
          <div>
            <h3>{newCargo.id ? "Modifier colis" : "Ajouter nouveau colis"}</h3>
            <label>
              Libelle:
              <input
                type="text"
                name="libelle"
                placeholder="Libelle"
                value={newCargo.libelle}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Longeur (m):
              <input
                type="text"
                name="longeur"
                placeholder="Longeur"
                value={newCargo.longeur}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Largeur (m):
              <input
                type="text"
                name="largeur"
                placeholder="Largeur"
                value={newCargo.largeur}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Hauteur (m):
              <input
                type="text"
                name="hauteur"
                placeholder="Hauteur"
                value={newCargo.hauteur}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Poids (kg):
              <input
                type="text"
                name="poids"
                placeholder="Poids"
                value={newCargo.poids}
                onChange={handleInputChange}
              />
            </label>
            <button onClick={newCargo.id ? handleUpdateCargo : handleAddCargo}>
              {newCargo.id ? "Update Cargo" : "Add Cargo"}
            </button>
          </div>
          <h3>Tous les colis</h3>
          <table>
            <thead>
              <tr>
                <th>Libelle</th>
                <th>Poids (kg)</th>
                <th>Dimensions (L x l x H)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cargoList.map((cargo) => (
                <tr key={cargo.id}>
                  <td>{cargo.libelle}</td>
                  <td>{cargo.poids}</td>
                  <td>
                    {cargo.longeur} m x {cargo.largeur} m x {cargo.hauteur} m
                  </td>
                  <td>
                    <button onClick={() => handleEditCargo(cargo)}>Edit</button>
                    <button onClick={() => handleDeleteCargo(cargo.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};

export default ModalCargo;

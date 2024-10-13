"use client";
import React, { useState } from "react";
//import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import "./login.css";
import Image from "next/image";
import pic from "./trans.png";
import Link from "next/link";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3002/compte/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login successful", data);
      console.log("rooooleee", data.role);

      // Stockez le token JWT dans le local storage (ou cookies) si nécessaire
      localStorage.setItem("token", data.token);
     

      // Vérifiez le rôle de l'utilisateur et redirigez en conséquence
      if (data.role === "expéditeur") {
        router.push("/acceuil-demande");
      } else if (data.role === "transporteur") {
        router.push("/accueil-transport");
      } else {
        // Gérez le cas où le rôle n'est pas reconnu
        setError("Rôle d'utilisateur non reconnu.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Échec de la connexion. Veuillez vérifier vos informations d'identification et réessayer.");
    }
  };

  return (
    <>
      <div className="image1">
        <Image
          src={pic}
          width={1500}
          height={710}
          alt="transport"
          style={{ borderRadius: "40px" }}
        />
      </div>
      <div className="loginBox">
        <h1>Se connecter</h1>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={handlePasswordChange}
        />
        <Link href="/signup1">
          <div className="pass">
            <span>Mot de passe oublié</span>
          </div>
        </Link>
        <button onClick={handleLogin}>Login</button>
        <p>
          Vous n'avez pas de compte? <br />
          <Link href="/signup-transporteur">
            <div className="insc">
              <span>Inscrivez-vous</span>
            </div>
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;

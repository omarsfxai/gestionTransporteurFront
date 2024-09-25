"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PhoneNumberInput from "../UI/Input/internationnalphone";
import Input from "../UI/Input/input";
import background from "./background.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "../signup-transporteur/modal";

function SignupTransporteur() {
  const router = useRouter();
  const [role, setRole] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    control,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const handleExpediteurClick = () => {
    router.push("/signup-expediteur");
    setRole("expéditeur");
  };

  const handleTransporteurClick = () => {
    router.push("/signup-transporteur");
    setRole("transporteur");
  };

  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    data.role = role;
    try {
      const response = await axios.post(
        "http://localhost:3002/user/register",
        data
      );
      console.log("User registered:", response.data);
      setIsModalOpen(true);
      // Redirection ou message de succès ici
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Une erreur s'est produite lors de l'enregistrement."
      );
    }
  };

  return (
    <div className="px-12 py-9 bg-white rounded-3xl max-md:px-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-5 max-md:flex-col max-md:gap-0"
      >
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 self-stretch text-base font-semi bold text-center max-md:flex-wrap">
              <button
                type="button"
                onClick={handleExpediteurClick}
                className="justify-center px-3.5 py-6 rounded-md border border-solid text-cyan-800 bg-white-800 border-cyan-800"
              >
                Je suis expéditeur
              </button>
              <button
                type="button"
                onClick={handleTransporteurClick}
                className="justify-center px-3.5 py-6 rounded-md border border-solid text-white bg-cyan-800 border-cyan-800"
              >
                Je suis transporteur
              </button>
              <div className="flex gap-2.5 items-center px-6 py-5 whitespace-nowrap bg-white rounded-md text-slate-950 max-md:pl-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e08353a1a185965b6002c81e303642e4d2fe725a8e6650b3a7a545edbe2e7da6?"
                  className="shrink-0 self-stretch my-auto w-4 aspect-square"
                />
                <div className="self-stretch my-auto">Français</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/35628c05632e0e1510284dc47844b3368592900552e8b4af94e4267618ed95f2?"
                  className="shrink-0 self-stretch w-6 aspect-square"
                />
              </div>
            </div>
            <div className="self-stretch mt-8 text-[32px] font-bold font-sans tracking-wide capitalize text-slate-950 max-md:max-w-full">
              Créer Un Compte de Transport
            </div>
            <div className="self-stretch mt-2 text-base leading-6 text-sky-300 max-md:max-w-full">
              Veuillez remplir vos coordonnées pour accéder à votre compte.
              <span className="font-semibold text-sky-300">
                {" "}
                Tous les champs sont obligatoires.
              </span>
            </div>
            <Input
              label="Pays"
              placeholder="Pays"
              register={register("pays", {
                required: {
                  value: true,
                  message: "Pays est obligatoire",
                },
              })}
              type="text"
            />
            <Input
              label="Raison Sociale"
              placeholder="Raison Sociale"
              register={register("raisonSociale", {
                required: {
                  value: true,
                  message: "Raison Sociale est obligatoire",
                },
              })}
              type="text"
            />
            <Input
              label="Matricule Fiscale"
              placeholder="Matricule Fiscale"
              register={register("matricule", {
                required: {
                  value: true,
                  message: "Matricule Fiscale est obligatoire",
                },
              })}
              type="text"
            />
            <Input
              label="Poste"
              placeholder="Poste"
              register={register("poste", {
                required: {
                  value: true,
                  message: "Poste est obligatoire",
                },
              })}
              type="text"
            />
            <Input
              label="Nom et Prénom"
              placeholder="Nom et Prénom"
              register={register("fullName", {
                required: {
                  value: true,
                  message: "Nom et Prénom est obligatoire",
                },
              })}
              type="text"
            />
            <PhoneNumberInput
              label="Téléphone"
              required
              register={register} // Pass register function here
              name="telephone"
              value={""} // Provide value and onChange as needed
              onChange={(value) => {
                // Handle phone number change
              }}
              error={errors.telephone}
            />
            <Input
              label="Email"
              placeholder="Email"
              register={register("email", {
                required: {
                  value: true,
                  message: "Email est obligatoire",
                },
              })}
              type="email"
            />
            <Input
              label="Nouveau mot de passe"
              placeholder="Mot de passe"
              register={register("password", {
                required: {
                  value: true,
                  message: "Mot de passe est obligatoire",
                },
              })}
              type="password"
            />
            {/* <Input
              label="Role"
              placeholder="Role"
              register={register("role", {
                required: {
                  value: true,
                  message: "Role est obligatoire",
                },
              })}
              type="text"
            /> */}
            <div className="flex gap-2 mt-9 text-sm leading-5 text-slate-400">
              <input
                type="checkbox"
                className="shrink-0 my-auto w-4 h-4 rounded border border-gray-300 border-solid"
              />
              Acceptez les{" "}
              <a href="#" className="font-semibold text-slate-400">
                termes
              </a>{" "}
              et{" "}
              <a href="#" className="font-semibold text-slate-400">
                conditions
              </a>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="justify-center items-center px-16 py-3 mt-8 max-w-full text-sm leading-5 text-white bg-cyan-800 rounded-lg border-none outline-none max-md:w-full"
            >
              {isSubmitting ? "Enregistrement..." : "S'inscrire"}
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
        <div className="relative flex flex-col w-[55%] items-center justify-center">
          <Image
            src={background}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>
      </form>
    </div>
  );
}

export default SignupTransporteur;

"use client";
import React from "react";
import "./home.css";
import Demande from "../components/shared/Demande/demandTransport";
import { useRouter } from "next/navigation";
import NabBar from "./navBar";
import Bar from "./bar";
import DemandeTransport from "./DemandeTransport";
import Chatbot from "../components/shared/Chatbot";

const HomePage2 = () => {
  const router = useRouter();

  const handleConfirm = (e) => {
    e.preventDefault();
    router.push("/afterHome3");
  };
  const handleAdd = (e) => {
    e.preventDefault();
    router.push("/createDemande4");
  };
  return (
    <>
      <div className="flex flex-col px-20 py-9 bg-white rounded-xl max-md:px-5">
        <NabBar />
        <div className="flex flex-col md:flex-row gap-5 px-16 py-2.5 mt-10 font-semibold text-center bg-sky-300 rounded-md max-md:px-5 max-md:max-w-full" style={{ display: "none" }}>
          <div className="flex justify-center md:ml-auto text-base font-sans text-cyan-800 rounded bg-white bg-opacity-0">
            Vérifier votre Compte
          </div>
          <div className="flex gap-1.5 my-auto text-sm leading-5 text-white md:ml-auto font-sans">
            <div className="grow my-auto">Compléter ici</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2204ef6c8ecf63e9dd7c5fc64d732eee3cb501ae17928faadbd49a9009cf15cd?"
              className="shrink-0 w-6 aspect-square"
            />
          </div>
        </div>
        <Bar/>
        <DemandeTransport/>
        <Chatbot/>
      </div>
    </>
  );
};

export default HomePage2;

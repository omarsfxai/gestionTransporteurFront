"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import user  from './userpreview.png';
import Image from "next/image";


function navBar() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/');
  };

  
  return (
    <div className="px-16 py-9 bg-white rounded-3xl shadow-lg max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
        <div className="flex gap-5 justify-between self-stretch my-auto text-base font-semibold font-sans text-center text-slate-950 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <button className="text-base font-semibold font-sans text-center text-slate-950 bg-white" onClick={() => router.push("/accueil-transporteur")}>Demande en cours</button>
          <div>Operations en cours</div>
          <button className="bg-transparent text-base font-semibold font-sans text-center text-slate-950" onClick={() => router.push("/equipe-transporteur")}>Gestion d’equipe</button>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
        <div className="flex grow gap-5 justify-between text-base font-semibold font-sans text-center text-white whitespace-nowrap max-md:mt-10">
        <Image
          src={user}
          width={40}
          height={40}
          alt="transport"
        />
      
        </div>
      </div>
    </div>
  </div>
  );
}

export default navBar;
"use client";
import React from "react";
import NavBar from "../accueil-transport/navBar";
import Demande from "../operation-enCours-transporteur/demandeTransporteur";
import Input from "../UI/Input/input";

function ajoutCommercial() {
  return (
    <div className="flex flex-col px-20 pt-9 pb-20 bg-white rounded-xl max-md:px-5">
      <NavBar />
      <div className="flex z-10 flex-col self-end mt-[50px] mr-[10px] pt-5 pb-20 bg-white rounded-3xl shadow-lg max-w-[501px]">
        <img
          loading="lazy"
          srcSet="https://s3-alpha-sig.figma.com/img/602a/621f/4e0275df7f75c172c321703acc100e37?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FjUsdHfYruGJ6s-2cxCJXbnQukVZMMbxYTsfyUIqo7sCN-autEDfNVM6BMECvRimVsa~-zLhzHDt~bczGjQ7WvmqmAwwrsYfntadnIE4LcKg8--IRz8lhRRgFL~mJ2et3gaHgwbGEAR6oUzSPLwyKBpJEn1F73x7bGAlcpilXaATc4Ymuob1kZcpzuPPix990O8M9KaLfuBXypj71do117jMGixhNDTLyY-SdBxJ2ndLjkRi25dK~xMtMH5dVuoT9xoi8MdCYQdj4cofDunSNgRujHhPbG4IMryedj8B3xdfnBXcy1xpW2H2vWmtBjGXZqj3hFmpESWovCVotktMtQ__"
          className="w-full aspect-[1.96] max-md:max-w-full"
        />
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-sm font-semibold tracking-normal capitalize text-slate-950 max-md:mt-10">
                <div className="text-base tracking-normal text-cyan-800">
                  Pick-up de :
                </div>
                <div className="flex gap-3.5 mt-7 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/35c1e5878a3bc9fd7f9373be5d51d462904fbee77c0cb423a093ad4f60505d01?"
                    className="shrink-0 w-6 aspect-[1.33]"
                  />
                  <div className="flex-auto my-auto">Tunisie</div>
                </div>
                <div className="flex flex-col items-start pl-10 mt-5 max-md:pl-5">
                  <div>3891 Ranchview Dr. Richardson, California 62639</div>
                  <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                    <div>Tunis</div>
                    <div>2050</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-sm font-semibold tracking-normal capitalize text-slate-950 max-md:mt-10">
                <div className="text-base tracking-normal text-cyan-800">
                  Drop-off de :
                </div>
                <div className="flex gap-3.5 mt-7 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffa5e062a59f09a609dd20985e5b3e9d2d0226496a1db9be4bc66a968a33aced?"
                    className="shrink-0 w-6 aspect-[1.33]"
                  />
                  <div className="flex-auto my-auto">Italie</div>
                </div>
                <div className="flex flex-col pl-10 mt-8 max-md:pl-5">
                  <div className="self-start">
                    8502 Preston Rd. Inglewood, Maine 98380
                  </div>
                  <div className="flex gap-5 justify-between self-center mt-7 whitespace-nowrap">
                    <div>Italie</div>
                    <div>7869</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 self-center mt-8 max-w-full h-0.5 bg-neutral-200 w-[371px]" />
        <div className="mt-7 text-base font-semibold tracking-normal text-cyan-800 capitalize max-md:max-w-full">
          Date et heure:{" "}
        </div>
        <div className="flex gap-5 mt-8 w-full text-sm font-semibold tracking-normal capitalize text-slate-950 max-md:flex-wrap max-md:max-w-full">
          <div className="grow my-auto text-gray-400">Pick-up</div>
          <div className="flex gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/195f4f685c1d7097cf4fe405d75a1603ffc7006dcb4d3075ce25bff28fa7f01b?"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="my-auto">24 Nov </div>
          </div>
          <div className="flex gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/37dfc43d56605a9acd3ae2f8cde8b31728a822e0a99968e8922505183203762f?"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="flex-auto my-auto">09h: 30 min</div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-8 w-full text-sm font-semibold tracking-normal capitalize text-slate-950 max-md:flex-wrap max-md:max-w-full">
          <div className="my-auto text-gray-400">Depot</div>
          <div className="flex gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/195f4f685c1d7097cf4fe405d75a1603ffc7006dcb4d3075ce25bff28fa7f01b?"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="my-auto">25 Nov </div>
          </div>
          <div className="flex gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/37dfc43d56605a9acd3ae2f8cde8b31728a822e0a99968e8922505183203762f?"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="flex-auto my-auto">19h: 30 min</div>
          </div>
        </div>
        <div className="shrink-0 self-center mt-5 max-w-full h-0.5 bg-neutral-200 w-[371px]" />
        <div className="mt-6 text-base font-semibold tracking-normal text-cyan-800 capitalize max-md:max-w-full">
          Article(S):
        </div>
        <div className="flex gap-5 items-start mt-6 w-full font-semibold capitalize max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 text-base tracking-normal whitespace-nowrap text-slate-950">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dac5783d9db14b3a3ad01d1630dfa908cc6d7cbe3f4974d3589dbd5d2c83a4a3?"
              className="shrink-0 aspect-[1.08] w-[30px]"
            />
            <div className="my-auto">Box</div>
          </div>
          <div className="flex flex-auto gap-5 justify-between mt-1">
            <div className="flex flex-col self-start">
              <div className="text-sm tracking-normal text-gray-400">
                longueur
              </div>
              <div className="mt-3.5 text-base tracking-normal text-center text-slate-950">
                20 m
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-5 justify-between text-sm tracking-normal text-gray-400 whitespace-nowrap">
                <div>Largeur</div>
                <div>Hauteur</div>
                <div>Poids</div>
              </div>
              <div className="flex gap-5 justify-between mt-3.5 text-base tracking-normal text-center text-slate-950 max-md:pr-5">
                <div>20 m</div>
                <div>20 m</div>
                <div>30 Kg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex z-10 flex-col self-end mt-[-830px] mr-[650px] max-w-full text-sm leading-6 text-slate-950 w-[316px] max-md:self-start max-md:mt-10 max-md:mr-0 max-md:ml-0">
        <div className="text-base font-semibold leading-7">
          Documents associés
        </div>
        <div className="flex gap-5 justify-between px-7 py-4 mt-5 w-full rounded-xl bg-slate-300 max-md:px-5">
          <div className="flex gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bf942de019b9ae0fa1ac9e043f8c9012862cd84d24fbce82076b7382ff1710f?"
              className="shrink-0 w-5 aspect-[0.8]"
            />
            <div className="flex-auto my-auto">Titre du documents</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cec1ac574aae64fd5b716c35aec627156dd3694d7f46edbfde9bf20200e809a?"
            className="shrink-0 self-start w-5 aspect-[0.95]"
          />
        </div>
        <div className="flex gap-5 justify-between px-7 py-4 mt-5 w-full rounded-xl bg-slate-300 max-md:px-5">
          <div className="flex gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bf942de019b9ae0fa1ac9e043f8c9012862cd84d24fbce82076b7382ff1710f?"
              className="shrink-0 w-5 aspect-[0.8]"
            />
            <div className="flex-auto my-auto">Titre du documents</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cec1ac574aae64fd5b716c35aec627156dd3694d7f46edbfde9bf20200e809a?"
            className="shrink-0 self-start w-5 aspect-[0.95]"
          />
        </div>
        <div className="justify-center px-3.5 py-2.5 mt-9 leading-6 text-cyan-800 bg-white rounded border border-cyan-800 border-solid max-md:px-5">
          + Ajouter une Pièce Jointe
        </div>
      </div>
      <div className="flex z-10 flex-col  mt-[-300px] max-w-full w-[699px] max-md:mt-10">
        <div className="flex flex-col capitalize max-md:max-w-full">
          <div className="flex gap-4 text-3xl font-bold tracking-wide text-slate-950 max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffdd54e51b2527cb0d2ee9d7abbccb46b7daba5d5b6756350b65b75f11a5ca13?"
              className="shrink-0 my-auto w-6 aspect-[1.41] fill-slate-950"
            />
            <div className="flex-auto max-md:max-w-full">
              Detail offre num : 2948FRB4OJ
            </div>
          </div>
          <div className="mt-12 text-xl font-semibold tracking-wide text-cyan-800 max-md:mt-10 max-md:max-w-full">
            Detail sur le traget de cargo
          </div>
        </div>
        <div className="flex gap-5 self-start mt-10 max-md:mt-10">
          <div className="flex flex-col items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/77fe20de4217075ac28b7a5d4eb4bac5821112b9175d0dd2d5afde309e0332da?"
              className="w-20 aspect-square fill-green-600"
            />
            <div className="shrink-0 mt-1.5 w-1 h-20 bg-green-600 rounded-md" />
          </div>
          <div className="flex flex-col self-start mt-2 text-sm font-semibold leading-7 text-gray-400">
            <div className="text-base leading-7 text-slate-950">
              Accord sur l’offre
            </div>
            <div className="mt-5">20 December 2023 </div>
            <div className="mt-5">A 12h:23 min</div>
          </div>
        </div>
        <div className="flex gap-5 self-start mt-10 max-md:mt-10">
          <div className="flex flex-col items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c81817f3b21cabd5fc19decb7094a190076e9e0aa57cc7baf1e171dca23e15c?"
            />
            <div className="shrink-0 mt-1.5 w-1 h-20 bg-green-600 rounded-md" />
          </div>
          <div className="flex flex-col self-start mt-2 text-sm font-semibold leading-7 text-gray-400">
            <div className="text-base leading-7 text-slate-950">
              Accord sur l’offre
            </div>
            <div className="mt-5">20 December 2023 </div>
            <div className="mt-5">A 12h:23 min</div>
          </div>
        </div>
        <div className="flex gap-5 self-start mt-10 max-md:mt-10">
          <div className="flex flex-col items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e972e3cccdbefe9ba1f39782734f70eb42a7fc0100ba2479732a15e6c5d86a49?"
            />
            <div className="shrink-0 mt-1.5 w-1 h-20 bg-green-600 rounded-md" />
          </div>
          <div className="flex flex-col self-start mt-2 text-sm font-semibold leading-7 text-gray-400">
            <div className="text-base leading-7 text-slate-950">
              Accord sur l’offre
            </div>
            <div className="mt-5">20 December 2023 </div>
            <div className="mt-5">A 12h:23 min</div>
          </div>
        </div>
        <div className="flex gap-5 self-start mt-10 max-md:mt-10">
          <div className="flex flex-col items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bae12b43261d93f66ff918c2b51fd7d665150667d3e6fe85d953b965493ef7f?"
              className="mt-1.5 w-full aspect-square"
            />
            <div className="shrink-0 mt-1.5 w-1 h-20 bg-green-600 rounded-md" />
          </div>
          <div className="flex flex-col self-start mt-2 text-sm font-semibold leading-7 text-gray-400">
            <div className="text-base leading-7 text-slate-950">
              Accord sur l’offre
            </div>
            <div className="mt-5">20 December 2023 </div>
            <div className="mt-5">A 12h:23 min</div>
          </div>
        </div>
        <div className="flex gap-5 self-start mt-10 max-md:mt-10">
          <div className="flex flex-col items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d54ea3df457448dbd8560467f0b9b3181910176493ef6eed5f2dc1dcc022e29?"
            />
            <div className="shrink-0 mt-1.5 w-1 h-20 bg-green-600 rounded-md" />
          </div>
          <div className="flex flex-col self-start mt-2 text-sm font-semibold leading-7 text-gray-400">
            <div className="text-base leading-7 text-slate-950">
              Accord sur l’offre
            </div>
            <div className="mt-5">20 December 2023 </div>
            <div className="mt-5">A 12h:23 min</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start px-16 py-11 mt-10 max-w-full bg-white rounded-3xl border border-gray-400 border-solid w-[733px] max-md:px-5  max-md:w-[400px]">
        <div className="text-xl font-bold tracking-wide text-cyan-800 capitalize">
          Contacter l'expéditeur
        </div>
          <Input
            label="Raison Sociale"
            placeholder="Raison Sociale"
            required
            props={{
              type: "text",
            }}
          />
         <Input
            label="Nom et Prénom"
            placeholder="nom prénom"
            required
            props={{
              type: "text",
            }}
          />
         <Input
            label="Email"
            placeholder="email"
            required
            props={{
              type: "text",
            }}
          />
           <Input
            label="Numéro de telephone"
            placeholder="num"
            required
            props={{
              type: "text",
            }}
          />
      </div>
      <Demande />
    </div>
  );
}
export default ajoutCommercial;

"use client";
import * as React from "react";
import NavBar from "./navBar";
import Input from "../UI/Input/input";
import Partie2 from "./maps";

function CreateDemande() {
  return (
    <div className="flex flex-col px-20 pt-9 pb-20 bg-white rounded-xl max-md:px-5">
      <NavBar />
      <div className="mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 text-sm leading-6 text-slate-950 max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-bold tracking-wide capitalize max-md:max-w-full">
                Créer une nouvelle demande
              </div>
              <div className="mt-14 text-xl font-semibold tracking-wide text-cyan-800 capitalize max-md:mt-10 max-md:max-w-full">
                Pick-up de :
              </div>
              <div className="flex gap-5 py-2 mt-5 whitespace-nowrap rounded-xl max-md:flex-wrap">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/93ff225824b1b5331e6cbf1d7dc99d72ea6cb2e8fc10137e9984d286a6a80940?"
                  className="shrink-0 max-w-full rounded-lg border border-solid aspect-[3.33] border-stone-300 w-[40px]"
                />
                <Input
                  label="Adresse"
                  placeholder="Adresse"
                  required
                  props={{
                    type: "text",
                  }}
                />
              </div>
              <div className="flex flex-col self-end mt-1 mr-[240px] max-w-full w-[462px] max-md:mr-1">
                <Input
                  label="Ville"
                  placeholder="Ville"
                  required
                  props={{
                    type: "text",
                  }}
                />
                <Input
                  label="Code postal"
                  placeholder="Code postal"
                  required
                  props={{
                    type: "text",
                  }}
                />
                
              </div>
              <div className="mt-14 text-xl font-semibold tracking-wide text-cyan-800 capitalize max-md:mt-10 max-md:max-w-full">
                Déposer a :
              </div>
              <div className="flex gap-5 py-2 mt-5 whitespace-nowrap rounded-xl max-md:flex-wrap">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/93ff225824b1b5331e6cbf1d7dc99d72ea6cb2e8fc10137e9984d286a6a80940?"
                  className="shrink-0 max-w-full rounded-lg border border-solid aspect-[3.33] border-stone-300 w-[40px]"
                />
                <Input
                  label="Adresse"
                  placeholder="Adresse"
                  required
                  props={{
                    type: "text",
                  }}
                />
              </div>
              <div className="flex flex-col self-end mt-1 mr-[240px] max-w-full w-[462px] max-md:mr-2.5">
                <Input
                  label="Ville"
                  placeholder="Ville"
                  required
                  props={{
                    type: "text",
                  }}
                />
                <Input
                  label="Code postal"
                  placeholder="Code postal"
                  required
                  props={{
                    type: "text",
                  }}
                />
              </div>
              <div className="shrink-0 mt-16 h-0.5 bg-neutral-200 max-md:mt-10 max-md:max-w-full" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-4 pt-5 pb-20 w-full bg-white rounded-3xl shadow-lg max-md:mt-10 max-md:max-w-full">
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
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93ff225824b1b5331e6cbf1d7dc99d72ea6cb2e8fc10137e9984d286a6a80940?"
                          className="shrink-0 w-6 aspect-[1.33]"
                        />
                        <div className="flex-auto my-auto">Tunisie</div>
                      </div>
                      <div className="flex flex-col items-start pl-10 mt-5 max-md:pl-5">
                        <div>
                          3891 Ranchview Dr. Richardson, California 62639
                        </div>
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
                        Pick-up de :
                      </div>
                      <div className="flex gap-3.5 mt-7 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1ecfab927d52ad9b7a76ea8f85e087ad0266f5ccd0a4b1d9c0e9aa266c45228?"
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
          </div>
        </div>

        <div className="mt-16 text-xl font-semibold tracking-wide text-cyan-800 capitalize max-md:mt-10 max-md:max-w-full">
          Date et heure:{" "}
        </div>
        <div className="flex gap-5 mt-12 text-sm leading-6 text-slate-950 max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-auto gap-5 px-4 py-3.5 rounded-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4793f9a4089d597a4724c7622a2c4e07428b5bd53d64f188b0cf8c83f1f78868?"
              className="shrink-0 w-7 aspect-square"
            />
            <Input
              label="Date de départ souhaitée"
              placeholder="date"
              required
              props={{
                type: "date",
              }}
            />
          </div>
          <div className="flex flex-auto gap-5 px-4 py-3.5 rounded-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4793f9a4089d597a4724c7622a2c4e07428b5bd53d64f188b0cf8c83f1f78868?"
              className="shrink-0 w-7 aspect-square"
            />
            <Input
              label="Date d'arrivée souhaitée"
              placeholder="date"
              required
              props={{
                type: "date",
              }}
            />
          </div>
          {/* <div className="flex flex-auto gap-5 px-4 py-3.5 rounded-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/43413f3301135ee201033a58a7a9bfb0eda57bcccf5855af393c182271658d87?"
              className="shrink-0 w-7 aspect-square"
            />
            <Input
              label="Heure de pr"
              placeholder="heure"
              required
              props={{
                type: "time",
              }}
            />
          </div> */}
        </div>
       
        <div className="shrink-0 mt-16 max-w-full h-0.5 bg-neutral-200 w-[640px] max-md:mt-10" />
        <div className="mt-16 text-xl font-semibold tracking-wide text-cyan-800 capitalize max-md:mt-10 max-md:max-w-full">
          cargo(S):
        </div>
        <div className="mt-10 max-w-full w-[640px] max-md:pr-5 max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-4 py-5 mx-auto w-full text-center whitespace-nowrap bg-white rounded-xl border border-solid border-zinc-300 max-md:mt-5">
                <div className="flex gap-5 justify-between items-start text-base leading-8 text-black">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1812f4064a72b1494368d93e99c958ffa3463fedd4cfea5d4465f1938f7c3dff?"
                    className="shrink-0 self-end mt-6 w-10 aspect-[2.22] fill-black"
                  />
                  <div className="flex gap-4 items-center self-start px-2 py-3 bg-violet-50 rounded-lg">
                    <div className="self-stretch my-auto">+</div>
                    <div className="self-stretch text-sm">6</div>
                    <div className="self-stretch my-auto">-</div>
                  </div>
                </div>
                <div className="self-end mt-3 text-sm font-semibold leading-6 text-slate-950 max-md:mr-2.5">
                  Pallet
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-5 pr-2.5 pl-5 mx-auto w-full text-center whitespace-nowrap bg-white rounded-xl border border-solid border-zinc-300 max-md:mt-5">
                <div className="flex gap-5 justify-between items-start text-base leading-8 text-black">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dac5783d9db14b3a3ad01d1630dfa908cc6d7cbe3f4974d3589dbd5d2c83a4a3?"
                    className="shrink-0 mt-4 aspect-[1.08] w-[30px]"
                  />
                  <div className="flex gap-4 items-center px-2 py-3 bg-violet-50 rounded-lg">
                    <div className="self-stretch my-auto">+</div>
                    <div className="self-stretch text-sm">6</div>
                    <div className="self-stretch my-auto">-</div>
                  </div>
                </div>
                <div className="self-end mt-2 mr-6 text-sm font-semibold leading-6 text-slate-950 max-md:mr-2.5">
                  Box
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-4 py-5 mx-auto w-full text-center whitespace-nowrap bg-white rounded-xl border border-solid border-zinc-300 max-md:mt-5">
                <div className="flex gap-5 justify-between items-start text-base leading-8 text-black">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/80bc079e7bb2ec25bf6da7c6cfed41c2509cec11cc6ff5be539718debe5cdf82?"
                    className="shrink-0 mt-5 w-10 aspect-[1.67]"
                  />
                  <div className="flex gap-4 items-center px-2 py-3 bg-violet-50 rounded-lg">
                    <div className="self-stretch my-auto">+</div>
                    <div className="self-stretch text-sm">6</div>
                    <div className="self-stretch my-auto">-</div>
                  </div>
                </div>
                <div className="self-end mt-2.5 text-sm font-semibold leading-6 text-slate-950 max-md:mr-2.5">
                  Camion
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 max-w-full text-center whitespace-nowrap w-[348px]">
          <div className="flex flex-col flex-1 px-4 py-5 bg-white rounded-xl border border-solid border-zinc-300">
            <div className="flex gap-5 justify-between items-start text-base leading-8 text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/62df6aa34c977e52712838feef4b568e15c051a55789f941bb2b63cca0e5c3fe?"
                className="shrink-0 mt-3 w-10 aspect-[1.08]"
              />
              <div className="flex gap-4 items-center px-2 py-3 bg-violet-50 rounded-lg">
                <div className="self-stretch my-auto">+</div>
                <div className="self-stretch text-sm">6</div>
                <div className="self-stretch my-auto">-</div>
              </div>
            </div>
            <div className="self-end mt-1.5 text-sm font-semibold leading-6 text-slate-950">
              Conteneur
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="flex flex-col px-4 py-5 w-full bg-white rounded-xl border border-solid border-zinc-300">
              <div className="flex gap-5 justify-between items-start text-base leading-8 text-black">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b6dac1285ff1223cefe772efbf81cec2deb23366f4b68e458d9d0b16f6f2543?"
                  className="shrink-0 mt-3.5 w-10 aspect-[1.18]"
                />
                <div className="flex gap-4 items-center px-2 py-3 bg-violet-50 rounded-lg">
                  <div className="self-stretch my-auto">+</div>
                  <div className="self-stretch text-sm">6</div>
                  <div className="self-stretch my-auto">-</div>
                </div>
              </div>
              <div className="self-end mt-1.5 text-sm font-semibold leading-6 text-slate-950 max-md:mr-2.5">
                Autre
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-xl font-semibold tracking-wide text-cyan-800 capitalize max-md:mt-10 max-md:max-w-full">
          caractéristiques:
        </div>
        <div className="flex gap-5 mt-10 max-md:flex-wrap max-md:mt-10">
          <div className="justify-center px-14 py-5 text-sm leading-6 text-center whitespace-nowrap rounded-xl bg-slate-300 text-slate-950 max-md:px-5">
            longueur
          </div>
          <div className="justify-center px-14 py-6 text-sm leading-6 text-center rounded-xl bg-slate-300 text-slate-950 max-md:px-5">
            Largeur{" "}
          </div>
          <div className="justify-center px-14 py-6 text-sm leading-6 text-center whitespace-nowrap rounded-xl bg-slate-300 text-slate-950 max-md:px-5">
            Hauteur
          </div>
          <div className="flex overflow-hidden relative flex-col justify-center rounded-lg border border-solid aspect-[1.8] border-zinc-300 w-[101px]">
            <img
              loading="lazy"
              srcSet="..."
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative shrink-0 h-14 bg-white rounded-xl" />
          </div>
        </div>
        <div className="flex gap-5 mt-5 max-w-full text-sm leading-6 text-center whitespace-nowrap text-slate-950 w-[640px] max-md:flex-wrap">
          <div className="grow justify-center items-center px-16 py-6 rounded-xl bg-slate-300 w-fit max-md:px-5 max-md:max-w-full">
            Poids
          </div>
          <div className="flex flex-col justify-center bg-white rounded-lg border border-solid border-zinc-300">
            <div className="justify-center items-start px-10 py-6 bg-white rounded-xl max-md:px-5">
              Kg
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-16 max-w-full h-0.5 bg-neutral-200 w-[640px] max-md:mt-10" />
        <div className="flex gap-5 mt-16 font-semibold capitalize max-md:mt-10">
          <div className="grow text-xl tracking-wide text-cyan-800">
            Ajouter photos
          </div>
          <div className="my-auto text-base tracking-normal text-gray-400">
            (Optionnel)
          </div>
        </div>
        <div className="flex justify-center items-center px-16 py-20 mt-10 max-w-full text-base font-semibold tracking-normal text-cyan-800 capitalize rounded-xl w-[640px] max-md:px-5 max-md:mt-10">
          <div className="flex flex-col mt-11 mb-5 max-w-full w-[149px] max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/28db63162259d3022b430445c7986ce4e0d30136189e806611ef634d21fc436c?"
              className="self-center aspect-square w-[60px]"
            />
            <div className="mt-9">Ajouter vos photos</div>
          </div>
        </div>
        <div className="mt-5 max-w-full w-[640px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex justify-center items-center px-16 w-full rounded-xl aspect-square bg-slate-300 max-md:px-5 max-md:mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/59f5ae37e1b5f78a481c37956c0df3b0327eec2f86b4a7ac2cc4c2a1fe226e58?"
                  className="w-10 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex justify-center items-center px-16 w-full rounded-xl aspect-square bg-slate-300 max-md:px-5 max-md:mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/59f5ae37e1b5f78a481c37956c0df3b0327eec2f86b4a7ac2cc4c2a1fe226e58?"
                  className="w-10 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex justify-center items-center px-16 w-full rounded-xl aspect-square max-md:px-5 max-md:mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/59f5ae37e1b5f78a481c37956c0df3b0327eec2f86b4a7ac2cc4c2a1fe226e58?"
                  className="w-10 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center px-3.5 py-2.5 mt-11 text-base font-semibold text-center text-white bg-cyan-800 rounded max-md:mt-10">
          Publier votre demande
        </div>
      </div>
    </div>
  );
}

export default CreateDemande;

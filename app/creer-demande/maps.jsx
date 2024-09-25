import React from "react";

function maps() {
  <>
    <div className="mt-16 text-xl font-semibold tracking-wide text-cyan-800 capitalize max-md:mt-10 max-md:max-w-full">
      Date et heure:{" "}
    </div>
    <div className="flex gap-5 mt-12 text-sm leading-6 text-slate-950 max-md:flex-wrap max-md:mt-10">
      <div className="flex flex-auto gap-5 px-4 py-3.5 rounded-xl bg-slate-300">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4793f9a4089d597a4724c7622a2c4e07428b5bd53d64f188b0cf8c83f1f78868?"
          className="shrink-0 w-7 aspect-square"
        />
        <div className="flex-auto my-auto">Date de pick up</div>
      </div>
      <div className="flex flex-auto gap-5 px-4 py-3.5 rounded-xl bg-slate-300">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43413f3301135ee201033a58a7a9bfb0eda57bcccf5855af393c182271658d87?"
          className="shrink-0 w-7 aspect-square"
        />
        <div className="flex-auto my-auto">Temps de pick up</div>
      </div>
    </div>
    <div className="flex gap-5 mt-7 text-sm leading-6 text-slate-950 max-md:flex-wrap">
      <div className="flex flex-auto gap-5 px-4 py-3.5 rounded-xl bg-slate-300">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4793f9a4089d597a4724c7622a2c4e07428b5bd53d64f188b0cf8c83f1f78868?"
          className="shrink-0 w-7 aspect-square"
        />
        <div className="flex-auto my-auto">Date de depot</div>
      </div>
      <div className="flex flex-auto gap-5 px-4 py-3.5 rounded-xl bg-slate-300">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43413f3301135ee201033a58a7a9bfb0eda57bcccf5855af393c182271658d87?"
          className="shrink-0 w-7 aspect-square"
        />
        <div className="flex-auto my-auto">Temps de depot</div>
      </div>
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
    <div className="flex justify-center items-center px-16 py-20 mt-10 max-w-full text-base font-semibold tracking-normal text-cyan-800 capitalize rounded-xl bg-slate-300 w-[640px] max-md:px-5 max-md:mt-10">
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
          <div className="flex justify-center items-center px-16 w-full rounded-xl aspect-square bg-slate-300 max-md:px-5 max-md:mt-4">
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
  </>;
}
export default maps;

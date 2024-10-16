import * as React from "react";
import user from "./userpreview.png";
import Image from "next/image";

function navBar() {
  return (
    <div className="flex flex-col px-5 py-7 mt-8 bg-white rounded-3xl border border-solid shadow-lg border-neutral-200 max-md:max-w-full" style={{ display: "none" }}>
      <div className="flex gap-5 w-full text-sm leading-6 max-md:flex-wrap max-md:max-w-full">
        <div className="flex shrink gap-3 self-start p-4 rounded-xl basis-auto bg-white grow-0 text-slate-950 w-[285px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9508753d79aa8a4f62a93b89948b57c20d8785c73e5100440c135ff0e0e1af4f?"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="flex-auto my-auto font-sans">Recherche </div>
        </div>
        <div className="flex flex-auto gap-1 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-auto gap-5 self-start py-2 rounded-xl bg-white">
            <div className="flex w-[120px] gap-5 justify-center px-2 py-3.5 text-cyan-800 font-sans bg-white rounded-lg border border-solid border-stone-300">
              <div>Pays</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ea36b7c54542cf1d55d8cfd25b35f23e45a0ec9d75a47ba027be3b9c7bc4d4f?"
                className="shrink-0 w-4 aspect-square"
              />
            </div>
            <div className="flex-auto my-auto text-slate-950 font-sans">
              Pick-up
            </div>
          </div>
          <div className="flex flex-auto gap-0 items-start max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://s3-alpha-sig.figma.com/img/5a10/60f4/1880908ff3693f66d778e1eb47c78b1e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C2HNj2bOl3x~CNzXqmWMJ41RBInFgi6YNUUP3ioiP5vCo-pB8gOjVm5FKApD~3VTkxI6FUIfe~pzhUvf4tg1ElRKVwymeG-dNIuKJWwuVx-C1LhfhK048WqS~FgSotGQQebITAH8qjqvO4ns3vUGXJbCJO-9oJz9ZmmMQyGIbbzdzYYVynGL6yJK~I1vtHGsnueWApOIEjX449MoaAVnPLh7PgTRNOLlo~OLVI473euKsXtAZxQPVib0ybtz0gYshtI57yBVxsnh-vSoN5ferwC9wZvq978MWj~zDk70P9Md~zp0V1sSau~jAlYCmDccV1DC0LBe1GYcuDRlVmosGQ__"
              className="shrink-0 w-14 aspect-square"
            />
            <div className="flex flex-auto gap-5 py-2 rounded-xl bg-white">
              <div className="flex w-[120px] gap-5 justify-center px-2 py-3.5 text-cyan-800 font-sans bg-white rounded-lg border border-solid border-stone-300">
                <div>Pays</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ea36b7c54542cf1d55d8cfd25b35f23e45a0ec9d75a47ba027be3b9c7bc4d4f?"
                  className="shrink-0 w-4 aspect-square"
                />
              </div>
              <div className="flex-auto my-auto text-slate-950 font-sans">
                Déposer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-6 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-auto gap-5 max-md:flex-wrap">
          <div className="flex flex-auto gap-5 px-4 py-3.5 text-sm leading-6 rounded-xl bg-white text-slate-950">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac467bb542a975c9c5fcb7e819b5d96a3646e4e726b463e890863bae35864938?"
              className="shrink-0 w-7 aspect-square"
            />
            <div className="flex-auto my-auto font-sans">Date de pick up</div>
          </div>
          <div className="flex flex-auto gap-2 px-2.5 py-2 rounded-xl bg-white">
            <div className="flex gap-0 justify-center px-1.5 py-2.5 text-cyan-800 bg-white rounded-lg border border-solid border-stone-300">
              <div className="grow my-auto text-sm leading-6 font-sans">
                Poids de cargo
              </div>
              <div className="justify-center px-3 py-2 text-xs font-semibold leading-5 text-center bg-sky-100 rounded-md">
                1000 km
              </div>
            </div>
            <div className="flex flex-col my-auto">
              <div className="flex gap-5 justify-between text-xs leading-6 text-center text-slate-950">
                <div>0 km</div>
                <div>16000 km</div>
              </div>
              <div className="flex gap-5 justify-between mt-2">
                <div className="shrink-0 w-5 h-5 bg-gray-300 rounded-full" />
                <div className="shrink-0 w-5 h-5 bg-gray-300 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-auto gap-1.5 py-2 pr-4 pl-2 rounded-xl bg-white">
          <div className="flex gap-4 justify-center px-1.5 py-2.5 text-cyan-800 bg-white rounded-lg border border-solid border-stone-300">
            <div className="grow my-auto text-sm leading-6 font-sans">
              Idm de cargo
            </div>
            <div className="justify-center px-2.5 py-2 text-xs font-semibold leading-5 text-center bg-sky-100 rounded-md">
              1000 idm
            </div>
          </div>
          <div className="flex flex-col my-auto">
            <div className="flex gap-5 justify-between text-xs leading-6 text-center text-slate-950">
              <div>0 idm</div>
              <div>16 idm</div>
            </div>
            <div className="flex gap-5 justify-between mt-2">
              <div className="shrink-0 w-5 h-5 bg-gray-300 rounded-full" />
              <div className="shrink-0 w-5 h-5 bg-gray-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navBar;

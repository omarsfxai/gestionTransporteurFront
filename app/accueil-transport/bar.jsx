import  React, { useState } from "react";
import user from "./userpreview.png";
import Image from "next/image";
import CountrySelect from "../signup-transporteur/selectPays";
import Search from "../UI/Input/search";
import Select from "../UI/Input/select";
import RangeSlider from "../UI/slider";
import Calendar from "../UI/calendrier";

function NavBar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  const options = [
    { value: "FR", label: "France" },
    { value: "US", label: "United States" },
    { value: "DE", label: "Germany" },
    { value: "JP", label: "Japan" },
  ];

  const [selectedValue, setSelectedValue] = React.useState("");
  const [rangeValue, setRangeValue] = React.useState([20, 37]); // État pour le RangeSlider

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleRangeChange = (event, newValue) => {
    setRangeValue(newValue);
  };

  const valuetext = (value) => {
    return `${value}°C`;
  };

  const handleSearchClick = () => {
    console.log("Zone de recherche cliquée");
    // Ajoutez ici les actions à effectuer lors du clic sur la zone de recherche
  };

  return (
    <div className="flex flex-col px-5 py-7 mt-8 bg-white rounded-3xl border border-solid shadow-lg border-neutral-200 max-md:max-w-full">
      <div className="flex gap-5 w-full text-sm leading-6 max-md:flex-wrap max-md:max-w-full">
        <Search onClick={handleSearchClick} />
        <div className="flex flex-auto gap-1 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-auto gap-5 self-start py-2 rounded-xl bg-white">
            <div className="font-sans justify-center bg-white mt-1 mr-4 ml-[-10px] h-[40px] w-[170px] rounded-lg border border-solid border-stone-300">
              <CountrySelect />
            </div>
            <div className="flex-auto my-auto text-slate-950 font-sans">
              Départ
            </div>
          </div>
          <div className="flex flex-auto gap-0 items-start max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://s3-alpha-sig.figma.com/img/5a10/60f4/1880908ff3693f66d778e1eb47c78b1e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C2HNj2bOl3x~CNzXqmWMJ41RBInFgi6YNUUP3ioiP5vCo-pB8gOjVm5FKApD~3VTkxI6FUIfe~pzhUvf4tg1ElRKVwymeG-dNIuKJWwuVx-C1LhfhK048WqS~FgSotGQQebITAH8qjqvO4ns3vUGXJbCJO-9oJz9ZmmMQyGIbbzdzYYVynGL6yJK~I1vtHGsnueWApOIEjX449MoaAVnPLh7PgTRNOLlo~OLVI473euKsXtAZxQPVib0ybtz0gYshtI57yBVxsnh-vSoN5ferwC9wZvq978MWj~zDk70P9Md~zp0V1sSau~jAlYCmDccV1DC0LBe1GYcuDRlVmosGQ__"
              className="shrink-0 w-14 aspect-square"
            />
            <div className="flex flex-auto gap-5 py-2 rounded-xl bg-white">
              <div className="font-sans justify-center bg-white mt-1 mr-4 ml-[10px] h-[40px] w-[170px] rounded-lg border border-solid border-stone-300">
                <CountrySelect />
              </div>
              <div className="flex-auto my-auto text-slate-950 font-sans">
                Arrivé
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-6 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-auto gap-5 max-md:flex-wrap">
          <div className="flex flex-auto gap-5 px-4 py-3.5 text-sm leading-6 rounded-xl bg-white text-slate-950">
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac467bb542a975c9c5fcb7e819b5d96a3646e4e726b463e890863bae35864938?"
              className="shrink-0 w-7 aspect-square"
            /> */}
            <Calendar selectedDate={selectedDate} onDateClick={handleDateClick} />
            {selectedDate && <p className="mt-4">Date sélectionnée : {selectedDate}</p>}
          </div>

          <div className="flex flex-auto gap-2 px-2.5 py-2 rounded-xl bg-white">
            <Select
              options={options}
              value={selectedValue}
              onChange={handleChange}
              placeholder="Type de cargo"
              className="my-custom-class ml-[-40px] h-[40px] w-[170px]"
            />
          </div>
        </div>
        <div className="flex flex-auto gap-1.5 py-2 pr-4 pl-2 rounded-xl bg-white">
          <div className="flex gap-4 justify-center ml-[190px] px-1.5 py-2.5 text-cyan-800 bg-white rounded-lg border border-solid border-stone-300">
            <div className="grow my-auto text-sm leading-6 font-sans">
              Volume de cargo
            </div>
            <div className="justify-center px-2.5 py-2 text-xs font-semibold leading-5 text-center bg-sky-100 rounded-md">
              1000 m3
            </div>
          </div>
          <RangeSlider
            value={rangeValue}
            onChange={handleRangeChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            className="mt-[200px]"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";

const Search = () => {
  return (
    <div className="flex shrink gap-3 self-start p-4 rounded-xl basis-auto bg-white grow-0 text-slate-950 w-[285px] border border-stone-300">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9508753d79aa8a4f62a93b89948b57c20d8785c73e5100440c135ff0e0e1af4f?"
        className="shrink-0 w-6 aspect-square"
        alt="Search Icon"
      />
      <input
        type="text"
        placeholder="Recherche"
        className="flex-auto my-auto font-sans bg-transparent border-none focus:outline-none"
      />
    </div>
  );
};

export default Search;

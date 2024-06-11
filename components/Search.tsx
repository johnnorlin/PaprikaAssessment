"use client";
import SearchIcon from "@mui/icons-material/Search";
import { useState, FormEvent } from "react";

const Search: React.FC = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (city && state) {
      let cityParam = city.replace(" ", "-");
      let stateParam = state.replace(" ", "-");
      window.location.href = `/${cityParam}/${stateParam}`;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="City and state search input"
      className="flex flex-col self-center lg:flex-row text-paprika-salmon font-bold text-4xl gap-4"
    >
      <div className="self-end">I&apos;m looking for restaurants in...</div>
      <div className="flex flex-col self-end">
        <label
          htmlFor="city"
          className="text-lg lg:hidden font-semibold mb-2 text-gray"
        >
          City
        </label>
        <input
          aria-label="City"
          id="city"
          type="text"
          autoComplete="off"
          className="border-b-2 p-2 border-gray-300 rounded-lg self-end rounded-b-none text-black focus:outline-none focus:border-paprika-light"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="self-end invisible lg:visible">{","}</div>
      <div className="flex flex-col self-end">
        <label
          htmlFor="state"
          className="text-lg lg:hidden font-semibold mb-2 text-gray"
        >
          State
        </label>
        <input
          aria-label="State"
          id="state"
          type="text"
          autoComplete="off"
          className="border-b-2 p-2 border-gray-300 rounded-lg self-end rounded-b-none text-black focus:outline-none focus:border-paprika-light"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className="self-center lg:self-end">
        <button
          aria-label="Search Button"
          type="submit"
          className=" self-end py-2 px-4 text-paprika-salmon font-semibold rounded-lg hover:bg-paprika-light hover:text-white transition duration-200"
        >
          <SearchIcon className="self-end scale-150" />
        </button>
      </div>
    </form>
  );
};

export default Search;

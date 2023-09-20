import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchInput } from "../redux/actions/searchActions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleClick = () => {
    dispatch(setSearchInput(search));
    navigate(`/search?query=${search}`);
  };

  return (
    <div className=" w-full h-20 bg-[#032541] flex items-center px-10 gap-2 sm:gap-20">
      <div
        className="hidden sm:block cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          className=" w-20 sm:w-40 cursor-pointer"
          src={Logo}
          alt="TMDB-logo"
        />
      </div>

      <div className="flex flex-grow bg-white rounded-[30px]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie..."
          className=" border-none outline-none flex-1 rounded-[30px] px-2"
        />
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-[#1ed5a9] to-[#01b4e4] rounded-[30px] py-[10px] px-[26px] text-white"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;

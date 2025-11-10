import React from "react";
import searchBlack from "../assets/search1.svg";
import searchWhite from "../assets/search.svg";

import dropDown from "../assets/arrow-down.svg";
export const Navbar = () => {
  return (
    <>
      <nav className="flex bg-[rgba(0,47,52,0.03)] fixed left-0 right-0 p-3 ">
        <div className="flex">
          <img
            className="w-12"
            src="https://statics.olx.in/external/base/img/olxLogo/olx_logo_2025.svg"
            alt=""
          />
          <div className="relative flex ml-5 border-2 bg-white rounded-sm p-3">
            <img src={searchBlack} alt="" className="w-5 mr-2 " />

            <input
              type="text"
              name=""
              id=""
              className="border-0 outline-0 "
              placeholder="Search city,area or locality"
            />
            <img src={dropDown} alt="" className="w-5 hover:rotate-180" />
          </div>
        </div>
        <div className="flex  mx-4 border-2 rounded-sm">
          <input
            className="border-0 outline-0 grow pl-1"
            type="text"
            name=""
            id=""
            placeholder='Search "Cars"'
          />
          <span className="bg-black px-4 pt-2 cursor-pointer">
            <img src={searchWhite} alt="" className="w-7" />
          </span>
        </div>
        <div className="flex">
          <img src="" alt="" />
          <a href="">Login</a>

          <button>sell</button>
        </div>
      </nav>
    </>
  );
};

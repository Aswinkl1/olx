import searchBlack from "../assets/search1.svg";
import searchWhite from "../assets/search.svg";
import favorite from "../assets/favorite.svg";
import sell from "../assets/addButton.png";

import dropDown from "../assets/arrow-down.svg";
export const Navbar = () => {
  return (
    <>
      <nav className="flex z-30 bg-[rgba(0,47,52,0.03)] sticky top-0 left-0 right-0 p-3 ">
        <div className="flex ">
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
        <div className="flex grow mx-4 border-2 rounded-sm">
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
        <div className="flex justify-around w-80 items-center  font-extrabold">
          <span>English</span>
          <img src={dropDown} alt="" className="w-5 hover:rotate-180" />

          <img src={favorite} className="w-6" alt="" />
          <a href="">Login</a>
          <button>
            <img src={sell} className="w-20" alt="" />
          </button>
        </div>
      </nav>
      <div className="bg-white z-20 sticky top-20 flex gap-10 w-screen justify-center shadow-[0px_1px_4px_rgba(0,0,0,0.16)] p-3">
        <span className="font-black">All category</span>
        <img src={dropDown} alt="" className="w-5 hover:rotate-180" />

        <span>Cars</span>
        <span>Motorcycles</span>
        <span>Mobile Phone</span>
        <span>For Sale:House & Apartments</span>
        <span>Scooter</span>
        <span>Commercial & Other Vehicle</span>
        <span>For Rent:House & Apartments</span>
        <span>11 Nov,2025</span>
      </div>
    </>
  );
};

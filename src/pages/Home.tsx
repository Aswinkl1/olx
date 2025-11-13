import React from "react";
import { Navbar } from "../components/Navbar";
import Advertisement from "../components/Advertisement";
import Card from "../components/Card";
export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mx-30 p-30 bg-white">
        <Advertisement />

        <h1>Fresh recommendations</h1>
        <Card />
      </div>

      <div className="flex justify-center gap-15">
        <img
          src="https://statics.olx.in/external/base/img/phone-app.png"
          alt=""
        />
        <div className="my-auto w-90 ">
          <h1 className="font-black text-4xl">Try THE OLX APP</h1>
          <p className="font-medium text-lg mt-2">
            Buy, sell and find about anything using the app on your mobile
          </p>
        </div>
        <div className="h-30 my-auto w-px bg-gray-700 "></div>
        <div className="my-auto">
          <p className="font-black ">GET YOUR APP TODAY</p>
          <div className="flex gap-5 mt-3">
            <img
              src="https://statics.olx.in/external/base/img//appstore_2x.png"
              alt=""
            />
            <img
              src="https://statics.olx.in/external/base/img//playstore_2x.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="h-170  mx-30 bg-white"></div>
    </>
  );
};

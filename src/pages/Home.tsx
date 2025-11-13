import React from "react";
import { Navbar } from "../components/Navbar";
import Advertisement from "../components/Advertisement";
export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mx-30 p-30">
        <Advertisement />

        <h1>Fresh recommendations</h1>
      </div>
    </>
  );
};

import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center gap-25 p-6 text-[#8d9094] leading-relaxed">
        <ul className="text-[#8d9094]">
          <li className="font-black text-black">Popular Locations</li>
          <li>Kolkate</li>
          <li>Mumbai</li>
          <li>Chennai</li>
          <li>Pune</li>
        </ul>

        <ul>
          <li className="font-black text-black">TRENDING Locations</li>
          <li>Bhubaneshwar</li>
          <li>Hyderabad</li>
          <li>Chandigarth</li>
          <li>Nashik</li>
        </ul>

        <ul>
          <li className="font-black text-black">About us</li>
          <li>Tech@OLX</li>
          <li>careers</li>
        </ul>

        <ul>
          <li className="font-black text-black">OLX</li>
          <li>Blog</li>
          <li>Help</li>
          <li>Sitemap</li>
          <li>Legal & Privacy information</li>
          <li>Vulnerability Disclosure program</li>
        </ul>

        <ul>
          <li className="font-black text-black">FOLLOW US</li>
          <li className="flex gap-2">
            <img
              src="https://apollo.olx.in/v1/files/alias-facebook-icon/image;original=true"
              alt=""
            />

            <img
              src="https://apollo.olx.in/v1/files/alias-youtube-icon/image;original=true"
              alt=""
            />

            <img
              src="https://apollo.olx.in/v1/files/alias-youtube-icon/image;original=true"
              alt=""
            />

            <img
              src="https://apollo.olx.in/v1/files/alias-twitter-icon/image;original=true"
              alt=""
            />
            <img
              src="https://apollo.olx.in/v1/files/alias-whatsapp-icon/image;original=true"
              alt=""
            />
            <img
              src="https://apollo.olx.in/v1/files/alias-linkedin-icon/image;original=true"
              alt=""
            />
          </li>

          <li className="mt-2">
            <img
              src="https://statics.olx.in/external/base/img//appstore_2x.png"
              alt=""
            />
          </li>

          <li className="mt-2">
            <img
              src="https://statics.olx.in/external/base/img//playstore_2x.png"
              alt=""
            />
          </li>
        </ul>
      </div>

      <div className="bg-[#004896] flex justify-center gap-20 mx-30 pt-10 px-12">
        <img
          className="w-40"
          src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1"
          alt=""
        />
        <div className="h-30 my-auto w-px bg-white"></div>
        <img
          className="w-40"
          src="https://statics.olx.in/external/base/img/cartrade/logo/olx_2025.svg?v=1"
          alt=""
        />

        <img
          className="w-40"
          src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1"
          alt=""
        />
        <img
          className="w-40"
          src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1"
          alt=""
        />

        <img
          className="w-40"
          src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1"
          alt=""
        />

        <img
          className="w-40"
          src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1"
          alt=""
        />
      </div>

      <div className="flex justify-between bg-[#004896] mx-30 px-30 text-white">
        <span>Help -sitemap</span>
        <span>All right reserved 2006-2025 OLX</span>
      </div>
    </>
  );
};

export default Footer;

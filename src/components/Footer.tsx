import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;

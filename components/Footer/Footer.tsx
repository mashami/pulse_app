import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full h-12">
      <div className="flex justify-between items-center h-full sm:px-16 px-4">
        <div className="">
          <p className="text-[11px] text-gray-500">
            Pulse is made by <a className="underline ">Simple Focus</a>. We also
            make <a className="underline">Ballpark</a>,{" "}
            <a className="underline">Sifter</a>,{" "}
            <a className="underline">Curated</a>, and{" "}
            <a className="underline">Temper</a>.
          </p>
        </div>
        <div>
          <p className="text-[11px] text-gray-500">
            ©2019 Pulseapp.com, Inc. All Rights Reserved |{" "}
            <a className="underline">Terms of Use</a> |{" "}
            <a className="underline" href="">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a className="underline" href="">
              EU Privacy
            </a>{" "}
            |{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

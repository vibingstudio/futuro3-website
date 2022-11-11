import Image from "next/image";
import React from "react";

import btcLogo from "../../assets/images/btcLogo.png";
import circulo from "../../assets/images/circulo1.png";
import hackerLogo from "../../assets/images/hackerLogo.png";
import kindynos from "../../assets/images/kindynos.png";
import solbc from "../../assets/images/solucionesBC.png";
import techMonterreyLogo from "../../assets/images/tecMtyEmp.png";
import vibingLogo from "../../assets/images/vibingLogo.png";

const logos = [
  techMonterreyLogo,
  circulo,
  vibingLogo,
  btcLogo,
  solbc,
  hackerLogo,
  kindynos,
];

export default function Footer() {
  return (
    <footer className="py-10 max-w-7xl m-auto flex items-center justify-center flex-wrap gap-x-[4rem] gap-y-[1.5rem]">
      {logos.map((logo, index) => (
        <div key={index} className="w-48 flex justify-center">
          <Image src={logo} alt="logo" />
        </div>
      ))}
    </footer>
  );
}

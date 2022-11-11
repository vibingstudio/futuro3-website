import Image from "next/image";
import React from "react";

import blockchainLogo from "../../assets/images/blockchain.png";
import btcLogo from "../../assets/images/btcLogo.png";
import circuloLogo from "../../assets/images/circulo.png";
import hackerLogo from "../../assets/images/hackerLogo.png";
import kindynos from "../../assets/images/kindynos.png";
import emprenLogo from "../../assets/images/tecMtyEmp.png";
import trubitLogo from "../../assets/images/trubit.png";
import vibingLogo from "../../assets/images/vibingLogo.png";

const logos = [
  emprenLogo,
  circuloLogo,
  vibingLogo,
  btcLogo,
  trubitLogo,
  blockchainLogo,
  hackerLogo,
  kindynos,
];

const SpeakerFooter = () => {
  return (
    <footer className="py-10 max-w-7xl m-auto flex items-center justify-center flex-wrap gap-x-[4rem] gap-y-[1.5rem]">
      {logos.map((logo, index) => (
        <div key={index} className="w-56 flex justify-center">
          <Image src={logo} alt="logo" />
        </div>
      ))}
    </footer>
  );
};

export default SpeakerFooter;

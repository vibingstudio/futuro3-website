import Image from "next/image";
import React from "react";

import web3 from "../../assets/images/web3.png";
import avatar from "../../assets/images/avatar.png";
import star from "../../assets/images/star.png";
import building from "../../assets/images/building.png";
import arrowDown from "../../assets/images/arrowDown.png";

export default function FuturoQuestions() {
  return (
    <>
      <section className="py-[5.5rem] grid grid-cols-2 gap-16 font-primary web3SectionContainer">
        <div>
          <Image src={web3} alt="web3" />
        </div>
        <div className="w-[80%] font-medium qestionsContainer">
          <h2 className="text-4xl questionFuturo font-semibold relative title pb-1 mb-7">
            ¿Qué es <span className="text-[#3A66F9]">futuro3?</span>
          </h2>
          <p className="mb-7">
            Futuro3 es el lugar de encuentro para que el ecosistema blockchain,
            metaverso, NFTs y nuevas tecnologîas web3 conecten, interactúen y
            aprendan junto con la industria, estudiantes universitarios,
            emprendedores y publico general.
          </p>
          <p>
            Este evento es gratutio patrocinado por vibing studios y el
            Tecnologico de monterrey. Este evento es la puerta de entrada para
            cualquiera que desee descubrir el mundo del web3.{" "}
          </p>
        </div>
      </section>
      <section className="p-4 max-w-6xl m-auto mb-[5rem] flex items-center justify-between gap-[2rem] bannerItemsContainer">
        <div className="flex justify-center items-center flex-col w-[15rem]">
          <Image src={avatar} alt="avatar" />
          <p className="text-center mt-4 font-medium">
            Conectar el ecosistema <br /> blockchain de LATAM
          </p>
        </div>
        <div className="flex justify-center items-center flex-col w-[15rem]">
          <Image src={star} alt="avatar" />
          <p className="text-center mt-4 font-medium">
            Crear nuevos talentos en <br /> blockchain
          </p>
        </div>
        <div className="flex justify-center items-center flex-col w-[15rem]">
          <Image src={building} alt="avatar" />
          <p className="text-center mt-4 font-medium">
            Transformar las empresas tradicionales en empresas blockchain
          </p>
        </div>
      </section>
      <div className="flex justify-center pb-[5rem]">
        <Image src={arrowDown} alt="arrowDown" />
      </div>
    </>
  );
}

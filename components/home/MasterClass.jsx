import Image from "next/image";
import React from "react";

import arrowWhite from "../../assets/images/arrowWhite.png";
// import MasterClassVideo from "../../assets/videos/srcVideo.mp4";



export default function MasterClass() {
  const options = [
    "Espacios interactivos de introducción a los tópicos de la Bloclockchain, NFTs y metaverso.",
    " Capacidad para 50 asistentes.",
    " Sesiones especiales de contenido.",
  ];

  return (
    <section className="bg-[#181823] w-full pb-[4rem] pt-[7.5rem] border-t-[8px] border-b-[8px] border-[#3A66F9] overflow-hidden">
      <div className="px-3">
      <div className="max-w-[100rem] m-auto grid grid-cols-2 masterContainer">
        <div className="bg-[#AFAFCA] relative right-[-2rem] videoBox">
          
          <video autoPlay muted controls loop className="h-full w-full object-cover">
        <source src='/srcVideo.mp4' />
      </video>
        </div>
        <div className="bg-[#3A66F9] sm:p-16 p-8 font-primary text-white relative left-[-3rem] top-[-3.5rem] masterContentContainer">
          <h2 className="title titleWhite relative font-bold text-4xl py-2">
            MASTERCLASS
          </h2>
          <p className="pb-6">
            Entra a nuestra masterclass que tenemos preparada para que
            decodifiques el mundo de blockchain.
          </p>
          <div className="w-[70%] masterClassListsContainer">
            {options.map((option, index) => (
              <div key={index} className="flex c-gapX-1rem">
                <div className="pr-2 pt-[0.28rem] shrink-0 w-4">
                  <Image src={arrowWhite} alt="arrow" />
                </div>
                <p>
                  {option}
                </p>
              </div>
            ))}
            <p>*Costo adicional.</p>
          </div>
          <div className="pt-9 flex justify-center">
            <button className="bg-[#181823] px-7 py-3 font-bold">Más información</button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

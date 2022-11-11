import Image from "next/image";
import React from "react";

import threeArrow from "../../assets/images/threeArrow.png";
import blackArrow from "../../assets/images/blackArrow.png";

export default function Banner() {
  return (
    <section>
      <div className=" w-full font-primary border-b-[1rem] border-[#3A66F9] relative speakersBannerContainer">
        <div className="bg-[#181823] w-full h-full left-0 right-0 bottom-0 top-0 absolute z-[-10]"></div>
        <div className="pr-[10%] max-w-[73rem] ml-auto py-[10rem] speakerTitleContainer">
          <h2 className="text-[#fffefe] font-extrabold text-[12.5rem] flex items-center speakerTitle">
            Futuro3
            <Image
              src={threeArrow}
              alt="threeArrow"
              width={100}
              height={100}
              className="pt-[4rem] ml-8 speakerThreeArrow"
            />
          </h2>
          <div className="ml-[10%]">
            <h2 className="text-primary font-tertiary font-semibold text-[8rem] leading-[1] text-right speakerDes">
              La revolución será <br />
              decentralizada
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center py-[2.5rem]">
        <div className="scheduleBlackArrow">
          <Image src={blackArrow} alt="blackArrow" className="ml-8" />
        </div>
        <h2 className="text-primary font-primary text-4xl font-medium leading-[1.2] text-end speakerItems">
          Web3, Metaverse, Blockchain, Crypto, <br />
          Virtual Reality, Artificial Inteligence
        </h2>
      </div>
    </section>
  );
}

import Image from "next/image";
import React from "react";
import { useRouter } from 'next/router'

import { speakers } from "../../data/dummySpeakers";

export default function Speakers() {

  const router = useRouter()

  return (
    <section className="w-[90%] m-auto mb-20">
      <h2 className="title relative font-primary font-bold text-4xl mb-8 ml-4 sm:ml-0">
        Speakers
      </h2>
      <div className="pl-8 grid grid-cols-4 gap-9 speakersContainer">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="w-full relative bg-black flex flex-col items-center py-5 px-9 border-[5px] border-[#3A66F9] font-primary text-white speakerCard cursor-pointer"
            onClick={
              () => router.push(`/speakers/${speaker.id}`)
            }
          >
            <h2 className="lg:text-lg text-base font-semibold pb-4">
              {speaker.title}
            </h2>
            <div>
              <Image src={speaker.image} alt="speaker" />
            </div>
            <h2 className="lg:text-lg text-base font-semibold pt-4">
              {speaker.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

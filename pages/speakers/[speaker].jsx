import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import threeArrow from "../../assets/images/threeArrow.png";
import speaker3 from "../../assets/images/speaker3B.png";
import { speakers } from "../../data/dummySpeakers";
import Head from "next/head";

export default function Speaker() {
  const router = useRouter();
  const [activeSpeaker, setActiveSpeaker] = React.useState({});
  const { speaker } = router.query;

  useEffect(() => {
    if (speaker) {
      const speakerData = speakers.find((s) => s.id === Number(speaker));
      setActiveSpeaker(speakerData);
    }
  }, [speaker]);

  console.log(activeSpeaker);

  return (
    <>
      <Head>
        <title>Futuro3 | Speaker</title>
        <meta name="description" content="futuro3" />
      </Head>
      <section className="w-full">
        <div className="bg-[#181823] pt-[7rem] pb-8 border-b-[1rem] border-[#3A66F9] relative speakerHeaderContainer">
          <div className="flex justify-center font-primary text-white text-center relative">
            <div className="absolute w-[6rem] top-0 left-[20%] arrowTopLeft">
              <Image
                src={threeArrow}
                alt="threeArrow"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="absolute w-[4.5rem] top-0 right-[30%] arrowTopRight">
              <Image
                src={threeArrow}
                alt="threeArrow"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="text-sm font-medium">
              <h2 className="text-[#3A66F9] text-3xl font-semibold pb-3">
                {activeSpeaker.name}
              </h2>

              {activeSpeaker?.titles?.length > 0 &&
                activeSpeaker?.titles?.map((title, index) => (
                  <p className="pb-2" key={index}>
                    {title}
                  </p>
                ))}
            </div>
            <div className="absolute w-[4.5rem] bottom-0 left-[10%] arrowBottonLeft">
              <Image
                src={threeArrow}
                alt="threeArrow"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="absolute w-[6rem] bottom-0 right-[15%] arrowBottomRight">
              <Image
                src={threeArrow}
                alt="threeArrow"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="py-12 max-w-[85rem] m-auto grid grid-cols-2 gap-6 singleSpeakerContainer">
            <div className="relative">
              <div className="flex flex-col items-center px-10 pt-12 pb-8 relative">
                <div className="blueClipPath"></div>
                <div className="whiteClipPath"></div>
                <div className="absolute w-[3.5rem] top-4 right-4">
                  <Image src={threeArrow} alt="threeArrow" />
                </div>
                <div className="w-full h-full bg-[#181823] absolute top-0 left-0 z-[-5]"></div>
                <div className="relative flex flex-col items-center border-[5px] border-[#3A66F9] font-primary text-white singleSpeakerCard">
                  <Image src={speaker3} alt="speaker" />
                </div>
                <div className="text-sm font-medium pt-12 text-center text-white">
                  <h2 className="text-[#3A66F9] text-3xl font-semibold pb-3">
                    {activeSpeaker.name}
                  </h2>
                  {activeSpeaker?.titles?.length > 0 &&
                    activeSpeaker?.titles?.map((title, index) => (
                      <p className="pb-2" key={index}>
                        {title}
                      </p>
                    ))}
                </div>
                <div className="absolute w-[3rem] bottom-[5.5rem] left-4">
                  <Image src={threeArrow} alt="threeArrow" />
                </div>
              </div>
            </div>

            <div className="break-words text-ellipsis">
              <p className="text-primary font-bold text-3xl pb-2">Biografía</p>
              <div className="flex gap-5 font-medium">
                <p
                  className="text-justify "
                  dangerouslySetInnerHTML={{ __html: activeSpeaker.bio }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

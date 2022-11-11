import Image from "next/image";
import React from "react";
import { HiOutlineClock } from "react-icons/hi2";
import { updateSpeakers } from "../../data/updateSpeakers";

import Lunch from "../../assets/images/food.png";
import SpeakerFooter from "./SpeakerFooter";

const UpdateScheduleTable = () => {
  return (
    <section className="overflow-hidden">
      {updateSpeakers.map((speaker, index) => (
        <div key={index}>
          <h2
            className={`font-primary ${
              index === 0 ? "mb-16" : "my-16"
            } text-5xl font-semibold text-white py-5 px-12 text-end relative dateTitle`}
          >
            {speaker.date}
          </h2>
          <div>
            {speaker.speakers.map((speaker, index) => (
              <>
                {speaker.time === "3.00 pm" && (
                  <div className="my-6 py-6 text-2xl font-primary text-white font-bold text-center bg-[#11111e] uppercase flex justify-center items-center gap-2">
                    <div className="w-[45px]">
                      <Image src={Lunch} alt="lunch-break" className="w-full" />
                    </div>
                    <p>Lunch Break</p>
                  </div>
                )}

                <div
                  key={index}
                  className={`flex justify-start items-center py-16 sm:py-6 relative md:flex-nowrap flex-wrap gap-4 ${
                    index % 2 === 0 ? "bg-[#f5f5f5]" : ""
                  }`}
                >
                  {/* 1st box */}
                  <div className="speakerLeftBox ml-8 xl:ml-12 flex justify-start items-center gap-4 w-full md:w-[50%]  lg:w-[45%] sm:flex-row flex-col">
                    <div className="w-[150px] sm:min-w-[120px] ">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        className={`w-full object-cover ${
                          index === 7 ||
                          index === 8 ||
                          index === 13 ||
                          index === 16 ||
                          index === 17 ||
                          speaker.id === 21 ||
                          index === 4
                            ? ""
                            : "border-2 border-[#231f20]"
                        } `}
                      />
                    </div>
                    <div>
                      <h3 className="capitalize font-secondary text-2xl md:text-[26px] lg:text-3xl font-bold text-[#0366f8] my-0 text-center sm:text-left">
                        {speaker.name}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{ __html: speaker.title }}
                        className="font-secondary text-[15px] md:text-[17px] lg:text-[19px] tracking-tight font-bold text-[#231f20] text-center sm:text-left"
                      >
                        {/* {speaker.title} */}
                      </p>
                    </div>
                  </div>

                  {/* 2nd box */}
                  <div className="speakerRightBox w-full md:w-[50%] lg:w-[55%] md:ml-0 sm:ml-8 px-4 sm:px-0">
                    <div className="flex justify-center sm:justify-start items-center gap-1 font-secondary text-2xl md:text-[26px] lg:text-3xl font-bold text-[#0366f8]">
                      <HiOutlineClock />
                      <h3>{speaker.time}</h3>
                    </div>
                    <h3
                      dangerouslySetInnerHTML={{ __html: speaker.event }}
                      className="font-secondary text-[18px] md:text-[20px] lg:text-2xl font-bold text-[#231f20] sm:pr-[5%] lg:pr-[21%] text-center sm:text-left"
                    ></h3>
                  </div>

                  {/* duration */}

                  <div className="bg-clock bg-cover  bg-no-repeat w-[75px] md:w-[85px] absolute top-5 sm:top-3 right-0">
                    <p
                      className={`text-[15px] md:text-[18px] font-secondary font-bold text-end text-white  ${
                        speaker.duration === "4hrs" ? "pr-3" : "pr-1"
                      }`}
                    >
                      {speaker.duration}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
      <SpeakerFooter />
    </section>
  );
};

export default UpdateScheduleTable;

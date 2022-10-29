import Image from "next/image";
import React from "react";

import speaker1 from "../../assets/images/speaker1.png";
import speaker2 from "../../assets/images/speaker2.png";
import speaker3 from "../../assets/images/speaker3.png";
import speaker4 from "../../assets/images/speaker4.png";
import speaker5 from "../../assets/images/speaker5.png";
import speaker6 from "../../assets/images/speaker6.png";
import speaker7 from "../../assets/images/speaker7.png";
import { AbsoluteWrapper, Footer } from "../common";

import { dummySpeakers } from "../../data/dummySpeakers";

export default function ScheduleTable() {
  return (
    <section className="overflow-hidden">
      {dummySpeakers.map((speaker, index) => (
        <div key={index}>
          <h2 className="font-primary my-6 text-5xl font-semibold text-white py-5 px-12 text-end relative dateTitle">
            {speaker.date}
          </h2>
          <div className={
            dummySpeakers.length - 1 === index ? "pt-8 pb-0" : "py-8"
          }>
            <div className="grid grid-cols-scheduleTable scheduleTableContainer">
              <div className="p-6 relative arrowTableColumn">
                <span className="bg-[#0266FD] w-full h-full absolute left-0 right-0 top-0 bottom-0 z-[-10]"></span>
                <h2 className="font-semibold text-white text-4xl scheduleTitle">PONENTE</h2>
              </div>
              <div className="p-6 relative text-center eventTile">
                <span className="bg-[#0266FD] w-full h-full absolute left-0 right-0 top-0 bottom-0 z-[-10]"></span>
                <h2 className="font-semibold text-white text-4xl scheduleTitle">EVENTO</h2>
              </div>
              <div className="p-6 relative text-center arrowTableColumnRight timeTitle">
                <span className="bg-[#0266FD] w-full h-full absolute left-0 right-0 top-0 bottom-0 z-[-10]"></span>
                <h2 className="font-semibold text-white text-4xl scheduleTitle">HORARIO</h2>
              </div>
            </div>
            {speaker.speakers.map((speaker, index) => (
              <div key={index} className="grid grid-cols-scheduleTable w-full scheduleTableContainer">
                <div className="flex items-center justify-center p-10 relative schdulePonienteContainer">
                  <AbsoluteWrapper
                    bgColor={index % 2 === 0 ? "bg-[#CEDDFF]" : "bg-[#E7EEFF]"}
                  />
                  <div className="relative border-[5px] border-[#3A66F9] speakerCard scheduleSpeakerImg">
                    <Image src={speaker.img} alt="speaker" />
                  </div>
                  <div className="font-primary pl-8 scheduleSpeakerDetailsContainer">
                    <h2 className="text-primary text-3xl font-semibold scheduleSpeakerTitle">
                      {speaker.name}
                    </h2>
                    {speaker.titles.map((title, index) => (
                      <p key={index} className="font-medium text-lg scheduleSpeakerDes">
                        {title}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center relative p-10 scheduleEventContainer">
                  <AbsoluteWrapper
                    bgColor={index % 2 === 0 ? "bg-[#B2CAFF]" : "bg-[#CEDDFF]"}
                  />
                  <p
                    className="text-center font-medium text-lg scheduleEvent"
                    dangerouslySetInnerHTML={{ __html: speaker.event }}
                  ></p>
                </div>
                <div className="flex relative justify-center items-center p-10">
                  <AbsoluteWrapper
                    bgColor={index % 2 === 0 ? "bg-[#CEDDFF]" : "bg-[#E7EEFF]"}
                  />
                  <p className="font-bold text-4xl horarioContainer"><span className="horario">HORARIO:{""}</span> {speaker.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="h-[8.5rem] bg-primary w-full border-b-[0.5rem] border-[#181783]"></div>
      <Footer />
    </section>
  );
}

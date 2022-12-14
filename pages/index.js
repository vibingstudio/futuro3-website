import Head from "next/head";
import Image from "next/image";

import btc from "../assets/images/btc.png";
import techMonterrey from "../assets/images/tecmty.png";
import threeArrow from "../assets/images/threeArrow.png";
import { FuturoQuestions, MasterClass, Speakers } from "../components";
import { AbsoluteWrapper, Footer } from "../components/common";

import Arrow from '../assets/images/blackArrow.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Futuro3</title>
        <meta name="description" content="futuro3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full font-primary border-b-[1rem] border-[#3A66F9] relative bannerContainer overflow-hidden">
        <AbsoluteWrapper bgColor={"bg-[#181823]"} />
        <div className="pl-[10%] max-w-[73rem] mr-auto py-[15rem] bannerContentContainer">
          <h2 className="text-[#fffefe] font-extrabold text-[10.5rem] flex items-center bannerFuturo">
            Futuro3
            <Image
              src={threeArrow}
              alt="threeArrow"
              width={100}
              height={100}
              className="pt-[4rem] ml-8 bannerThreeArrow"
            />
          </h2>
          <div className="grid grid-cols-withDevider w-[100%] ml-[10%] items-center gap-7 bannerDesContainer">
            <h2 className="flex flex-col items-end text-[#3A66F9] font-tertiary font-semibold text-7xl bannerDesPri">
              <span>La revolución será</span>
              <span>decentralizada</span>
            </h2>
            <div className="bannerDevider h-full w-[4px] bg-[#3A66F9]"></div>
            <p className="text-[#AFAFCA] text-lg w-[80%] bannerDesSec">
              Vive y aprende de las nuevas tendencias en tecnología Web3,
              Metaverso, Blockchain y Realidad Virtual. Sé parte de la nueva
              revolución del internet.
            </p>
          </div>
        </div>
        
{/* arrow */}
<div className="absolute bottom-0 right-0 w-[21%] sm:w-[25%] 2xl:max-w-[400px] flex  gap-0 lg:gap-4 items-end">
  <span className="hidden sm:block text-white text-sm pb-[13px] xl:pb-[32px] bannerDate">Descubre más</span>
  <Image src={Arrow} alt="" className="rotate-45 w-full flex-1"/>

</div>

        <div className="flex items-center xl:flex-nowrap flex-wrap pl-[2%] pb-[3rem] mr-[28%] 2xl:mr-[0%] gap-6">
          <span>
            <Image src={techMonterrey} alt="techMonterrey" className="techMonterrey" />
          </span>
          <span>
            <Image src={btc} alt="btc" className="btc" />
          </span>
          <p className="text-white text-sm bannerDate flex flex-col">
            <span>SAN LUIS POTOSÍ, SLP</span>
            <span>1 - 3 DICIEMBRE</span>
          </p>
          <p className="text-white text-sm bannerDate flex flex-col">
            <span>Parque de Emprendimiento del</span>
            <span>Tec de Monterrey Campus San Luis Potosí.</span>
            <span>Av. Eugenio Garza Sada 300, Lomas del Tecnologico.</span>
          </p>
        </div>
      </main>
      <FuturoQuestions />
      <Speakers />
      <MasterClass />
      <Footer />
    </>
  );
}

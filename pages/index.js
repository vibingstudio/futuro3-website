import Head from "next/head";
import Image from "next/image";

import threeArrow from "../assets/images/threeArrow.png";
import techMonterrey from "../assets/images/techMonterrey.png";
import btc from "../assets/images/btc.png";
import { FuturoQuestions, MasterClass, Speakers } from "../components";
import { AbsoluteWrapper, Footer } from "../components/common";

export default function Home() {
  return (
    <>
      <Head>
        <title>Futuro 3</title>
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
              revolcuión del internet.
            </p>
          </div>
        </div>
        <div className="flex items-center pl-[2%] c-gap-2rem pb-[3rem]">
          <span>
            <Image src={techMonterrey} alt="techMonterrey" className="techMonterrey" />
          </span>
          <span>
            <Image src={btc} alt="btc" className="btc" />
          </span>
          <p className="text-white text-sm bannerDate flex flex-col">
            <span>SAN LUIS POTOSÍ, SLP</span>
            <span>2 - 3 DICIEMBRE</span>
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

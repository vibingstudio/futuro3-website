import Head from "next/head";
import ScrollToTop from "react-scroll-to-top";

import { Header } from "../components/common";
import "../styles/globals.css";
import "../styles/breakpoints.css";
import "../styles/home.breakpoints.css";
import "../styles/speakers.breakpoint.css";
import "../styles/speaker.breakpoin.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="absolute top-0 w-[100%] z-20 left-0">
        <Header />
      </div>
      <Component {...pageProps} />
      <ScrollToTop smooth color="#fff" />
    </>
  );
}

export default MyApp;

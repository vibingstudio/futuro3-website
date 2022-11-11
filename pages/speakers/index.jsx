import Head from "next/head";
import React from "react";
import { Banner } from "../../components";
import UpdateScheduleTable from "../../components/speakers/UpdateScheduleTable";
// import ScheduleTable from "../../components/speakers/ScheduleTable";

export default function Speakers() {
  return (
    <main className="">
      <Head>
        <title>Futuro3 | Speakers</title>
        <meta name="description" content="futuro3" />
      </Head>
      <Banner />
      {/* <ScheduleTable /> */}
      <UpdateScheduleTable />
    </main>
  );
}

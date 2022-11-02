import Head from "next/head";
import type { NextPage } from "next";
import { Color } from "../components/Color";
import { colorsObj } from "../utils/colors";

const Colors: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Colors</title>
        <meta name="description" content="Saving everything I want." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 flex-col items-center min-h-screen py-12 font-inter">
        <h1 className="flex items-center margin-0 padding-0">Colors</h1>
        <div className="flex flex-col flex-wrap items-center pt-10 w-full md:flex-row md:justify-center md:gap-4">
          {colorsObj.map((c) => (
            <Color key={c.name} color={c} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Colors;

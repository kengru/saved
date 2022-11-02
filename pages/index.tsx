import Head from "next/head";
import Image from "next/future/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Saved</title>
        <meta name="description" content="Saving everything I want." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 flex-col items-center min-h-screen py-12 font-inter">
        <div className="flex items-center margin-0 padding-0">
          <Image
            className="mr-2"
            src="/fdisk.svg"
            alt="Saved logo"
            width={30}
            height={30}
          />

          <h1 className="text-3xl">Saved</h1>
        </div>
        <div className="flex">
          <p>Adding stuffs I want to be saved here.</p>
          <p>TBD</p>
        </div>
      </main>
    </div>
  );
}

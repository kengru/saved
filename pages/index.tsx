import Head from "next/head";
import Image from "next/future/image";
import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Saved</title>
        <meta name="description" content="Saving everything I want." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image src="/fdisk.svg" alt="Saved logo" width={30} height={30} />
          Saved
        </h1>
        <div className={styles.homeContent}>
          <p>Adding stuffs I want to be saved here.</p>
          <p>TBD</p>
        </div>
      </main>
    </div>
  );
};

export default Home;

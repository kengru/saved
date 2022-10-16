import Head from "next/head";
import type { NextPage } from "next";
import { Color } from "../components/Color";
import { colorsObj } from "../utils/colors";

import styles from "../styles/Home.module.css";

const Colors: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Colors</title>
        <meta name="description" content="Saving everything I want." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Colors</h1>
        <div className={styles.colorGroup}>
          {colorsObj.map((c) => (
            <Color key={c.name} color={c} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Colors;

import Head from "next/head";
import { AppProps } from "next/app";

const AppStyle = {
  height: "100%"
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Guarda.do</title>
      </Head>
      <Component style={AppStyle} {...pageProps} />
    </>
  );
}

export default MyApp;

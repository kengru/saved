import { AppProps } from "next/app";

const AppStyle = {
  height: "100%"
};

function MyApp({ Component, pageProps }: AppProps) {
  return <Component style={AppStyle} {...pageProps} />;
}

export default MyApp;

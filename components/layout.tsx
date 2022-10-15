import Image from "next/future/image";
import { Navigation } from "./Navigation";

import styles from "./components.module.css";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

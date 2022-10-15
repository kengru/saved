import { useState } from "react";
import Image from "next/future/image";
import { Navigation } from "./Navigation";

import styles from "./components.module.css";

type Props = {
  children: JSX.Element;
};

export function Layout({ children }: Props) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Navigation open={openMenu} toggleOpen={setOpenMenu} />
      <Image
        src="/hamb.svg"
        alt="Saved logo"
        width={40}
        height={40}
        className={styles.hamb}
        onClick={() => setOpenMenu(true)}
      />
      {children}
    </>
  );
}

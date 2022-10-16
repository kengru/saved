import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import styles from "./components.module.css";

type Props = {
  open: boolean;
  toggleOpen: Dispatch<SetStateAction<boolean>>;
};

export function Navigation({ open, toggleOpen }: Props) {
  return (
    <div>
      <div
        className={`${styles.menuOverlay} ${
          open ? styles.menuOverlayOpen : ""
        }`}
        onClick={() => toggleOpen(false)}
      ></div>
      <nav className={`${styles.navMenu} ${open ? styles.navMenuOpen : ""}`}>
        <ul>
          <li onClick={() => toggleOpen(false)}>
            <Link href="/colors">Colors</Link>
          </li>
          <li onClick={() => toggleOpen(false)}>
            <Link href="/links">Links</Link>
          </li>
          <li onClick={() => toggleOpen(false)}>
            <Link href="/code">Code</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

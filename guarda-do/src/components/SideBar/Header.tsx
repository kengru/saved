import React from "react";
import { StyleSheet, css } from "aphrodite";

import logo from "../../assets/images/save.svg";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    margin: "2em",
    height: "8em",
    width: "8em",
    ":hover": {
      cursor: "pointer"
    }
  }
});

export const Header: React.FC = () => {
  return (
    <div className={css(styles.header)}>
      <a href="/">
        <img className={css(styles.image)} src={logo} alt="kid" />
      </a>
    </div>
  );
};

export default Header;

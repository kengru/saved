import React from "react";
import { StyleSheet, css } from "aphrodite";

import { SideBar } from "./components/SideBar";

const styles = StyleSheet.create({
  app: {
    display: "flex",
    backgroundColor: "#f6f8fa"
  }
});

export const App = () => {
  return (
    <div className={css(styles.app)}>
      <SideBar />
    </div>
  );
}

import React from "react";
import { StyleSheet, css } from "aphrodite";

import { Header } from "./Header";
import { Tag } from "./Tag";

const styles = StyleSheet.create({
  sideBar: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    minWidth: "13em",
    background: "rgb(235, 235, 255)",
    "-webkit-box-shadow": "0px 0px 10px -1px rgba(0, 0, 0, 0.67)",
    "-moz-box-shadow": "0px 0px 10px -1px rgba(0, 0, 0, 0.67)",
    boxShadow: "0px 0px 10px -1px rgba(0, 0, 0, 0.67)"
  },
  tagList: {
    margin: "0em",
    padding: "0em"
  }
});

export const SideBar: React.FC = () => {
  const tags: string[] = ["photos", "colors", "css", "text"];

  return (
    <div className={css(styles.sideBar)}>
      <Header />
      <ul className={css(styles.tagList)}>
        {tags.map((tag) => (
          <Tag key={tag} id={tag} highlight={false} />
        ))}
      </ul>
    </div>
  );
};

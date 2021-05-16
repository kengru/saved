import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  listItem: {
    listStyle: "none",
    margin: "1em",
    padding: "1em",
    "-webkit-box-shadow": "0px 0px 14px 0px rgba(0, 0, 0, 0.2)",
    "-moz-box-shadow": "0px 0px 14px 0px rgba(0, 0, 0, 0.2)",
    boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.2)",
    ":hover": {
      "-webkit-box-shadow": "0px 0px 10px -1px rgba(0, 0, 0, 0.4)",
      "-moz-box-shadow": "0px 0px 10px -1px rgba(0, 0, 0, 0.4)",
      boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.4)"
    }
  },
  listItemHigh: {
    listStyle: "none",
    margin: "1em",
    padding: "1em",
    "-webkit-box-shadow": "0px 0px 14px 10px rgba(0, 0, 0, 0.4)",
    "-moz-box-shadow": "0px 0px 14px 10px rgba(0, 0, 0, 0.4)",
    boxShadow: "0px 0px 14px 10px rgba(0, 0, 0, 0.4)"
  },
  aLabel: {
    textDecoration: "none",
    color: "#000",
    ":hover": {
      opacity: 0.6
    }
  }
});

type TagProps = {
  id: string;
  highlight: boolean;
};

export const Tag = (props: TagProps) => {
  return (
    <li
      className={css(props.highlight ? styles.listItemHigh : styles.listItem)}
    >
      <a className={css(styles.aLabel)}>{`#${props.id}`}</a>
    </li>
  );
};

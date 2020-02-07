import React, { useState } from "react";

import Add from "./Add";
import Input from "./Input";

type SearchBarProps = {
  results: boolean;
};

function SearchBar({ results }: SearchBarProps) {
  const [text, setText] = useState("");

  return (
    <div className="searchBar">
      <Input results={false} text={text} setText={setText} />
      <Add />
      <style jsx>{`
        .searchBar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 2em;
          padding: 1em;

          // background-color: pink;
          border-bottom: 1px solid green;
        }
      `}</style>
    </div>
  );
}

export default SearchBar;

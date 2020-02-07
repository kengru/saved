import React from "react";

type Color = {
  id: string;
  name: string;
  value: string;
  date: Date;
};

function Color({ id, name, value, date }: Color) {
  return (
    <div className="wrapper">
      <div className="header">{`${name}`}</div>
      <div className="color">Example</div>
      <div className="footer">{`${date.toLocaleDateString()}`}</div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          padding: 0.5em;
          font-size: 12px;
        }
        .color {
          height: 80%;
          width: 100%;
          background-color: ${value};
        }
      `}</style>
    </div>
  );
}

export default Color;

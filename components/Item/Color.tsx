import React from "react";

import invertColor from "../../helpers/invertColor";

type Color = {
  id: string;
  name: string;
  value: string;
  date: Date;
};

function Color({ id, name, value, date }: Color) {
  return (
    <div className="wrapper">
      <div className="color">{`${name}`}</div>
      <div className="footer">{`${date.toLocaleDateString()}`}</div>
      <style jsx>{`
        .wrapper {
          display: flex;
          height: 100%;
          flex-direction: column;
          padding: 0.8em;
          font-size: 12px;
        }

        .color {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80%;
          width: 100%;
          color: ${invertColor(value)};
          background-color: ${value};
        }

        .footer {
          margin-top: 0.5em;
          text-align: right;
        }
      `}</style>
    </div>
  );
}

export default Color;

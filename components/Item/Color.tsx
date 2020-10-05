import React from "react";

import { invertColor } from "../../helpers/colors";

function Color({ name, date, value }: Item) {
  const showDate = new Date(date.seconds * 1000);
  return (
    <div className="wrapper">
      <div className="color">{`${name}`}</div>
      <div className="footer">{`${showDate.toLocaleString("en-GB")}`}</div>
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
          color: #594646;
          text-align: right;
          font-size: 12px;
          margin-top: 0.5em;
        }
      `}</style>
    </div>
  );
}

export default Color;

import React from "react";

import Color from "./Color";

type ItemType = {
  type: string;
  data: {
    id: string;
    name: string;
    value: string;
    date: Date;
  };
};

function Item({ type, data }: ItemType) {
  let item = null;
  switch (type) {
    case "color":
      item = <Color {...data} />;
      break;
    default:
      break;
  }
  return (
    <div className="item">
      {item}
      <style jsx>{`
        .item {
          margin: 1em;
          height: 40%;
          width: 30%;
          -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.2);
          -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.2);
        }

        .item:hover {
          transform: scale(1.1);
          -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.3);
          -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.3);
          box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Item;

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
        }
      `}</style>
    </div>
  );
}

export default Item;

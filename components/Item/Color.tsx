import React from "react";

type Color = {
  id: string;
  name: string;
  value: string;
  date: Date;
};

function Color({ id, name, value, date }: Color) {
  return (
    <div className="color">
      <style jsx>{`
        .color {
        }
      `}</style>
    </div>
  );
}

export default Color;

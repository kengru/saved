import React from "react";

function Add() {
  return (
    <React.Fragment>
      <div className="add">+</div>
      <style jsx>{`
        .add {
          font-size: 16px;
          padding: 0.6em 1.2em 0.6em 1.2em;
          border-radius: 100%;
          background-color: rgb(220, 220, 220);
        }

        .add:hover {
          cursor: pointer;
          font-size: 18px;
          transform: scale(1.1);
        }
      `}</style>
    </React.Fragment>
  );
}

export default Add;

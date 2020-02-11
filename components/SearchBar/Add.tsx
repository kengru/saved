import React from "react";

function Add() {
  return (
    <React.Fragment>
      <div className="add">+</div>
      <style jsx>{`
        .add {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 0.6em;
          width: 0.6em;
          font-size: 15px;
          margin: 1em;
          padding: 1em;
          border: 1px solid black;
          border-radius: 50%;
          background-color: rgb(235, 235, 255);
        }

        .add:hover {
          cursor: pointer;
          height: 1em;
          width: 1em;
          font-size: 18px;
          transition: height 0.2s, weight 0.4s;
        }
      `}</style>
    </React.Fragment>
  );
}

export default Add;

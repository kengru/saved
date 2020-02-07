import React from "react";

type InputProps = {
  results: boolean;
  text: string;
  setText(text: string): void;
};

function Input({ results, text, setText }: InputProps) {
  return (
    <React.Fragment>
      <input
        className={results || text.length === 0 ? "input" : "inputWrong"}
        type="text"
        value={text}
        onChange={event => setText(event.currentTarget.value)}
      />
      <style jsx>{`
        .input {
          height: 60%;
          padding-left: 10px;
          font-size: 14px;
        }

        .inputWrong {
          height: 60%;
          padding-left: 10px;
          font-size: 14px;
          border-color: rgb(229, 103, 23);
          box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset,
            0 0 8px rgba(229, 103, 23, 0.6);
          outline: 0 none;
        }
      `}</style>
    </React.Fragment>
  );
}

export default Input;

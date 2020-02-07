import React from "react";
import Link from "next/link";

function Header() {
  return (
    <React.Fragment>
      <Link href="/">
        <img className="image" src="/static/favicon.ico" alt="kid" />
      </Link>
      <style jsx>{`
        .image {
          margin: 2em;
          height: 8em;
          width: 8em;
        }
        .image:hover {
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  );
}

export default Header;

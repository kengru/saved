import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="header">
      <Link href="/">
        <img className="image" src="/static/favicon.ico" alt="kid" />
      </Link>
      <style jsx>{`
        .header {
            display: flex;
            justify-content: center;
            alight-items: center;
        }

        .image {
          margin: 2em;
          height: 8em;
          width: 8em;
        }
        
        .image:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Header;

import Link from "next/link";

const Header: React.FC = () => (
  <div className="header">
    <Link href="/">
      <a className="link">Home</a>
    </Link>
    <Link href="/about">
      <a className="link">About</a>
    </Link>
    <style jsx>{`
      .link {
        margin: 0.5em;
      }
      .header {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
    `}</style>
  </div>
);

export default Header;

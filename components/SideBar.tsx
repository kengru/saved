import Link from "next/link";

const SideBar: React.FC = () => (
  <div className="sideBar">
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
      .sideBar {
        display: flex;
        flex-direction: column;
        height: 100vh;
        border: 1px solid black;
      }
    `}</style>
  </div>
);

export default SideBar;

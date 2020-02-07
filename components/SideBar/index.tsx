import Link from "next/link";
import Header from "./Header";
import Tag from "./Tag";

const SideBar: React.FC = () => {
  const tags: string[] = ["#photo", "#colors", "#css"];
  return (
    <div className="sideBar">
      <Header />
      <ul>
        {tags.map(tag => (
          <Tag id={tag} />
        ))}
      </ul>
      <style jsx>{`
        .link {
          margin: 0.5em;
        }
        .sideBar {
          display: flex;
          flex-direction: column;
          height: 100vh;
          min-width: 6em;
          background: rgb(235, 235, 255);
          -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.67);
          -moz-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.67);
          box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.67);
        }
      `}</style>
    </div>
  );
};

export default SideBar;

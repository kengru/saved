import Link from "next/link";

type TagProps = {
  id: string;
};

const Tag = (props: TagProps) => {
  return (
    <li>
      <Link href="/item/" as={`/item/${props.id}`}>
        <a>{props.id}</a>
      </Link>
      <style jsx>{`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
          font-family: "Arial";
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </li>
  );
};

export default Tag;

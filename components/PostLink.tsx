import Link from "next/link";

type PostLinkProps = {
  id: string;
  name: string;
};

const PostLink = (props: PostLinkProps) => {
  return (
    <li>
      <Link href="/p/" as={`/p/${props.id}`}>
        <a>{props.name}</a>
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

export default PostLink;

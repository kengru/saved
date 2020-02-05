import Link from "next/link";

type PostLinkProps = {
  title: string;
};

const PostLink = (props: PostLinkProps) => {
  return (
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

export default PostLink;

import Link from "next/link";

type PostLinkProps = {
  id: string;
};

const PostLink = (props: PostLinkProps) => {
  return (
    <li>
      <Link href="/p/" as={`/p/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  );
};

export default PostLink;

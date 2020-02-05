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
    </li>
  );
};

export default PostLink;

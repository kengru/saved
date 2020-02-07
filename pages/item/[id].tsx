import { NextPage } from "next";
// import fetch from "isomorphic-unfetch";

import withLayout from "../../components/withLayout";

const Item: NextPage<{ id: string | string[] }> = ({ id }) => {
  return (
    <>
      <h1>{id}</h1>
    </>
  );
};

Item.getInitialProps = async function(context) {
  const { id } = context.query;
  // const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  // const show = await res.json();

  return { id };
};

export default withLayout(Item);

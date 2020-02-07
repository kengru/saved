import { NextPage } from "next";

import withLayout from "../../components/withLayout";

const Tags: NextPage<{ id: string | string[] }> = ({ id }) => {
  return (
    <>
      <h1>{id}</h1>
    </>
  );
};

Tags.getInitialProps = async function(context) {
  const { id } = context.query;
  return { id };
};

export default withLayout(Tags);

import { NextPage } from "next";

import SideBar from "../../components/SideBar";
import { fetcher } from "../../helpers/functions";

const Tags: NextPage<{ id: string | string[] | }> = ({ id }) => {
  return (
    <>
      <SideBar />
      <h1>{id}</h1>
    </>
  );
};

Tags.getInitialProps = async function(context) {
  const { id } = context.query;
  const wa = await fetcher("http://localhost:3000/api/getItems");
  return { id };
};

export default Tags;

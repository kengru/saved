import { NextPage } from "next";
import { useRouter } from "next/router";

import Layout from "../components/MyLayout";

const Page: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog content.</p>
    </Layout>
  );
};

export default Page;

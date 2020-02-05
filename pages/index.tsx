import { NextPage } from "next";

import Layout from "../components/MyLayout";
import PostLink from "../components/PostLink";

const Home: NextPage = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" />
      <PostLink id="learn-nextjs" />
      <PostLink id="deploy-zeit" />
    </ul>
  </Layout>
);

export default Home;

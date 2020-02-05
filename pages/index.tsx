import { NextPage } from "next";
import Link from "next/link";

import Layout from "../components/MyLayout";
import PostLink from "../components/PostLink";

const Home: NextPage = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default Home;

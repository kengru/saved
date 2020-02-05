import { NextPage } from "next";
import Link from "next/link";

import Layout from "../components/MyLayout";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout>
    <h4>Hello world!!! - user agent: {userAgent}</h4>
    <Link href="/about">
      <a title="About Page">About Page</a>
    </Link>
  </Layout>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;

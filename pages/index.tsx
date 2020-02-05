import { NextPage } from "next";
import fetch from "isomorphic-unfetch";

import Layout from "../components/MyLayout";
import PostLink from "../components/PostLink";

type Show = {
  id: string;
  name: string;
};

type tvMaze = {
  show: Show;
};

const Home: NextPage<{ shows: Show[] }> = ({ shows }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(show => {
        return <PostLink key={show.id} id={show.id} name={show.name} />;
      })}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 1;
      }
    `}</style>
  </Layout>
);

Home.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data: tvMaze[] = await res.json();

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Home;

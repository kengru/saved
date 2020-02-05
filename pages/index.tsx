import { NextPage } from "next";
import { useRouter } from "next/router";
import useSwr from "swr";

import withLayout from "../components/withLayout";

// async function fetcher(url: string) {
//   const r = await fetch(url);
//   return await r.json();
// }

const Home: NextPage = () => {
  // const { query } = useRouter();
  // const { data, error } = useSwr(`/api/getItems`, fetcher);

  return (
    <main className="center">
      {/* <div className="quote">{data?.status}</div> */}

      <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
        .quote {
          font-family: cursive;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: sans-serif;
          color: #559834;
          font-size: 20px;
        }
      `}</style>
    </main>
  );
};

export default withLayout(Home);

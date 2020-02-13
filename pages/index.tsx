import useSWR from "swr";
import fetch from "isomorphic-unfetch";

import withLayout from "../components/withLayout";
import SearchBar from "../components/SearchBar";
import Item from "../components/Item";
import { NextPage } from "next";

const fetcher = async function (url: string) {
  const r = await fetch(url);
  return r.json();
}

const Home: NextPage<IndexProps> = (props: IndexProps) => {
  return (
    <div className="home">
      <SearchBar results={false} />
      <main>
        {props.data
          ? props.data.map(item => {
              return (
                <Item
                  key={item.id}
                  type={item.data.type}
                  name={item.data.name}
                  date={item.data.date}
                  value={item.data.value}
                />
              );
            })
          : null}
      </main>
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        main {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          height: 100%;
          margin: 1em;
        }
      `}</style>
    </div>
  );
}

Home.getInitialProps = async () => {
  const data = await fetcher("http://localhost:3000/api/getItems");
  return { data };
};

export default Home;

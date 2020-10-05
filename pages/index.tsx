import fetch from "isomorphic-unfetch";

import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import Item from "../components/Item";
import { NextPage } from "next";

const fetcher = async function (url: string) {
  const r = await fetch(url);
  return r.json();
};

const Home: NextPage<IndexProps> = (props: IndexProps) => {
  return (
    <div className="layout">
      <SideBar />
      <div className="home">
        <SearchBar results={false} />
        <main>
          {props.data
            ? props.data.map((item) => {
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
      </div>
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          width: 100%;
          font-family: "Noto Sans";
        }
        main {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          height: 100%;
          margin: 1em;
        }
      `}</style>
      <style jsx global>{`
        html {
          height: 100%;
        }
        body {
          height: 100%;
          margin: 0px;
          font-family: "Noto Sans", sans-serif;
        }
        #__next {
          height: 100%;
        }
        .layout {
          display: flex;
        }
        @font-face {
          font-family: "Noto Sans";
          src: url("/static/fonts/NotoSans-Regular.ttf");
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </div>
  );
};

Home.getInitialProps = async () => {
  const data = await fetcher("http://localhost:3000/api/getItems");
  return { data };
};

export default Home;

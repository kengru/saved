import { NextPage } from "next";
import useSWR from 'swr';

import withLayout from "../components/withLayout";
import SearchBar from "../components/SearchBar";
import Item from "../components/Item";

type ItemType = {
  type: string;
  data: {
    id: string;
    name: string;
    value: string;
    date: Date;
  };
};

function fetcher(url: string) {
  return fetch(url).then(r => r.json());
}

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/getItems', fetcher);
  const items: ItemType[] = [
    {
      type: "color",
      data: {
        id: "1",
        name: "Cool Purple",
        value: "#914175",
        date: new Date(1994, 10)
      }
    },
    {
      type: "color",
      data: {
        id: "2",
        name: "Black",
        value: "#000000",
        date: new Date(1994, 9)
      }
    },
    {
      type: "color",
      data: {
        id: "3",
        name: "Color Man",
        value: "#291042",
        date: new Date(1994, 4)
      }
    },
    {
      type: "color",
      data: {
        id: "4",
        name: "Another Color",
        value: "#CE21E1",
        date: new Date(1994, 7)
      }
    }
  ];
  const status = data?.status;
  return (
    <div className="home">
      <SearchBar results={false} />
      <main>
        {status ? status : null}
        {items.map(item => {
          return <Item key={item.data.id} type={item.type} data={item.data} />;
        })}
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
};

export default withLayout(Home);

import { NextPage } from "next";

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

const Home: NextPage = () => {
  const items: ItemType[] = [
    {
      type: "color",
      data: {
        id: "1",
        name: "Cool Purple",
        value: "#914175",
        date: new Date(1994, 10)
      }
    }
  ];

  return (
    <div className="home">
      <SearchBar results={false} />
      <main>
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
          height: 100%;
          background-color: rgb(240, 240, 240);
        }
      `}</style>
    </div>
  );
};

export default withLayout(Home);

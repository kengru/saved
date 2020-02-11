import { NextPage } from "next";

import withLayout from "../components/withLayout";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <div className="home">
      <SearchBar results={false} />
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default withLayout(Home);

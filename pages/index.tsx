import { NextPage } from "next";
import { useRouter } from "next/router";

import withLayout from "../components/withLayout";

const Home: NextPage = () => {
  return (
    <div>
      <input type="button" value="Hey!" />
    </div>
  );
};

export default withLayout(Home);

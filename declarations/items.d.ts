// Declaration of Items types.

type DbItem = {
  id: string;
  data: Item;
}

type Item = {
  type?: string;
  name: string;
  date: {
    seconds: number;
    nanoseconds: number;
  };
  value: string;
};

type IndexProps = {
  data: DbItem[];
}
type SearchBarProps = {
  results: boolean;
};

function SearchBar({ results }: SearchBarProps) {
  return (
    <div className="searchBar">
      <input type="text" />
      <style jsx>{`
        .searchBar {
          display: flex;
          align-items: center;
          height: 4em;
          padding: 2em;

          background-color: pink;
          border-bottom: 1px solid green;
        }

        input {
          height: 60%;
          padding-left: 10px;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}

export default SearchBar;

import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

function withLayout<T>(Page: React.ComponentType<T>) {
  return (props: T) => (
    <div style={layoutStyle}>
      <Header />
      <Page {...props} />
    </div>
  );
}

export default withLayout;

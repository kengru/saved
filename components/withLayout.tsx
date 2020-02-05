import Header from "./Header";

function withLayout<T>(Page: React.ComponentType<T>) {
  return (props: T) => (
    <div className="layout">
      <Header />
      <Page {...props} />
      <style jsx global>{`
        html {
          height: 100%;
        }
        body {
          height: 100%;
          margin: 0px;
        }
        #__next {
          height: 100%;
        }
        .layout {
          display: flex;
        }
      `}</style>
    </div>
  );
}

export default withLayout;

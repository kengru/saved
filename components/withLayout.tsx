import SideBar from "./SideBar";

function withLayout<T>(Page: React.ComponentType<T>) {
  return (props: T) => (
    <div className="layout">
      <SideBar />
      <Page {...props} />
      <style jsx global>{`
        html {
          height: 100%;
        }
        body {
          height: 100%;
          margin: 0px;
          font-family: 'Noto Sans', sans-serif;
        }
        #__next {
          height: 100%;
        }
        .layout {
          display: flex;
        }
        @font-face {
          font-family: 'Noto Sans';
          src: url('/static/fonts/NotoSans-Regular.ttf'); 
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </div>
  );
}

export default withLayout;

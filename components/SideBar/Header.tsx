const Header: React.FC = () => (
  <div className="header">
    <img className="image" src="static/favicon.ico" alt="kid" />
    <style jsx>{`
      .image {
        margin: 2em;
        height: 8em;
        width: 8em;
      }
    `}</style>
  </div>
);

export default Header;

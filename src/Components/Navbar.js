

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="heading">
        <p className="name">AI.GEN</p>
        <p className="list">Features</p>
        <p className="list">Roadmap</p>
        <p className="list">Tokenomics</p>
      </div>
      <div className="buttons">
        <button className="whitepaper">Whitepaper</button>
        {/* <br/>  */}
        <button className="get-started">Get Started</button>
      </div>
    </div>
  );
}

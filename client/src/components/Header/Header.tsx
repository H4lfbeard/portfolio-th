import "./Header.css";

export default function Header() {
  return (
    <header className="App-header">
      <div className="name">
        <h1>Thomas HUMBERT</h1>
        <i className="material-icons">bolt</i>
      </div>
      <div className="picto">
        <i className="material-icons face">face</i>
        <i className="material-icons dark_mode">dark_mode</i>
      </div>
    </header>
  );
  
}
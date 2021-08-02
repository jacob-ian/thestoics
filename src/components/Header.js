import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-title">
        <Link to="/">The Stoics</Link>
      </div>
    </header>
  );
}

import "./ReturnButton.css";
import { Link } from "react-router-dom";

export default function ReturnButton() {
  return (
    <Link to="/" className="return-button">
      Go Home
    </Link>
  );
}

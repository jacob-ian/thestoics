import { Link } from "react-router-dom";
import "./StoicListItem.css";

export default function StoicListItem(props) {
  const { id, name } = props;

  return (
    <li className="stoic-list-item">
      <Link to={`/stoic/${id}`}>{name}</Link>
    </li>
  );
}

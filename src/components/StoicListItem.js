import { Link } from "react-router-dom";
import { formatYears } from "../api/utils";
import "./StoicListItem.css";

export default function StoicListItem(props) {
  const { id, name, birth, death } = props;
  const years = formatYears(birth, death);

  return (
    <li className="stoic-li">
      <Link to={`/stoic/${id}`}>
        <div className="stoic-li-years">{years}</div>
        <div className="stoic-li-name">{name}</div>
      </Link>
    </li>
  );
}

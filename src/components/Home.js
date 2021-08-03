import useTitle from "../hooks/useTitle";
import "./Home.css";
import StoicListItem from "./StoicListItem";

export default function Home(props) {
  useTitle("Home");

  let stoics = props.stoics.sort((a, b) => a.birth - b.birth);
  stoics = props.stoics.map((stoic) => (
    <StoicListItem key={stoic.id} {...stoic} />
  ));

  return (
    <div className="home-container">
      <h1>The Ancients</h1>
      <ul className="stoic-list">{stoics}</ul>
    </div>
  );
}

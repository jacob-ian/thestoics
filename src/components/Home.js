import useTitle from "../hooks/useTitle";
import "./Home.css";
import StoicListItem from "./StoicListItem";

export default function Home(props) {
  const stoics = props.stoics.map((stoic) => (
    <StoicListItem key={stoic.id} id={stoic.id} name={stoic.name} />
  ));

  useTitle("Home");

  return (
    <div className="home-container">
      <h1>The Ancients</h1>
      <ul className="stoic-list">{stoics}</ul>
    </div>
  );
}

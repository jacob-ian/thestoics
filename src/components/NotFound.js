import useQuery from "../hooks/useQuery";
import useTitle from "../hooks/useTitle";
import "./NotFound.css";

export default function NotFound() {
  useTitle("Couldn't be found");
  const query = useQuery();

  let message = <div className="not-found-message">Couldn't be found.</div>;

  if (query.has("path")) {
    const path = query.get("path");
    message = (
      <div className="not-found-message">
        Could not find "<code>{path}</code>".
      </div>
    );
  }

  return <div className="not-found">{message}</div>;
}

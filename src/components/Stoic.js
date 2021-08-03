import { useEffect, useState } from "react";
import { Redirect, useLocation, useParams } from "react-router-dom";
import { getStoicById } from "../api/stoics";
import { formatYears } from "../api/utils";
import useTitle from "../hooks/useTitle";
import ReturnButton from "./ReturnButton";
import "./Stoic.css";

export default function Stoic() {
  const [stoic, setStoic] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { pathname } = useLocation();

  useTitle(`${stoic?.name}`);

  useEffect(() => {
    let error;
    function getStoic() {
      try {
        return getStoicById(id);
      } catch (err) {
        error = err;
      }
    }

    const stoic = getStoic();

    setIsLoading(false);
    setStoic(stoic);

    if (error) {
      setError(error);
    }
  }, [id]);

  if (error && error.code === 404) {
    return <Redirect to={{ pathname: "/404", search: `path=${pathname}` }} />;
  } else if (isLoading) {
    return <div></div>;
  } else {
    return (
      <div className="stoic-container">
        <h1>{stoic.name}</h1>
        <p className="stoic-years">{formatYears(stoic.birth, stoic.death)}</p>
        <p>
          Commodo deserunt Lorem anim id non id laborum consectetur aliquip
          consectetur tempor. Ut minim adipisicing velit enim minim incididunt
          adipisicing enim in consequat velit qui in. Veniam mollit deserunt
          duis esse non. Officia deserunt esse ea dolor veniam esse incididunt
          voluptate. Adipisicing do cillum dolor aliqua.
        </p>
        <ReturnButton />
      </div>
    );
  }
}

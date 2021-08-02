import { useEffect, useState } from "react";
import { Redirect, useLocation, useParams } from "react-router-dom";
import { getStoicById } from "../api/stoics";
import useTitle from "../hooks/useTitle";
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
    return <div className="stoic">{JSON.stringify(stoic)}</div>;
  }
}

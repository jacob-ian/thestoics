import { useLocation } from "react-router-dom";

export default function useQuery() {
  const location = useLocation();
  const query = location.search;
  return new URLSearchParams(query);
}

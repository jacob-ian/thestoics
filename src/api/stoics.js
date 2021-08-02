import { ApiError } from "./ApiError";

const STOICS = [
  {
    id: "1",
    name: "Epictetus",
    years: "55–135 C.E",
  },
  {
    id: "2",
    name: "Marcus Aurelius",
    years: "121-180 C.E",
  },
  {
    id: "3",
    name: "Seneca",
    years: "4 B.C. - 65 C.E",
  },
];

export function getStoics() {
  return STOICS;
}

export function getStoicById(stoicId) {
  const stoic = STOICS.find((stoic) => stoic.id === stoicId);

  if (stoic) {
    return stoic;
  }

  throw new ApiError(404, `Could not be found.`);
}

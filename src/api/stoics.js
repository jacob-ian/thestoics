import { ApiError } from "./ApiError";

const STOICS = [
  {
    id: "1",
    name: "Epictetus",
    birth: 55,
    death: 135,
  },
  {
    id: "2",
    name: "Marcus Aurelius",
    birth: 121,
    death: 180,
  },
  {
    id: "3",
    name: "Seneca",
    birth: -4,
    death: 65,
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

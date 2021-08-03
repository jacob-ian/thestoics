export function formatYears(birth, death) {
  const birthSuffix = getDateSuffix(birth);
  const deathSuffix = getDateSuffix(death);

  return `${Math.abs(birth)} ${birthSuffix} - ${Math.abs(
    death
  )} ${deathSuffix}`;
}

function getDateSuffix(year) {
  if (year < 0) {
    return "BC";
  }
  return "AD";
}

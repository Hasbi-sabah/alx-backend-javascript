export default function cleanSet(set, startString) {
  if (!startString) return '';
  const arr = Array.from(set).filter((val) => val.startsWith(startString));
  return arr.map((val) => val.replace(startString, '')).join('-');
}

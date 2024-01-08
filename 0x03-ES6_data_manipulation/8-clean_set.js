export default function cleanSet(set, startString) {
  if (!startString || !(set instanceof Set) || typeof startString != 'string') return '';
  const arr = Array.from(set).filter((val) => val.startsWith(startString));
  return arr.map((val) => val.replace(startString, '')).join('-');
}

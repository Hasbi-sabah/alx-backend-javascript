export default function appendToEachArrayValue(array, appendString) {
  let arrayCopy = [];
  for (const element of array) {
    arrayCopy.push(appendString + element);
  }

  return arrayCopy;
}

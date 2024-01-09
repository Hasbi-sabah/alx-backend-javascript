export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if ((weakMap.get(endpoint) || 0) >= 5) {
    throw new Error('Endpoint load is high');
  }
  return weakMap.set(endpoint, (weakMap.get(endpoint) || 0) + 1);
}

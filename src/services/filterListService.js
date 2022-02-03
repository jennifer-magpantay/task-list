export function filterList(data, id) {
  const elementID = id;
  const newList = data.filter(({ id }) => id !== elementID);
  return newList;
}

export function insert(str: string, index: number, value: string) {
  const firstPart = str.slice(0, index);
  const secondPart = str.slice(index);

  return firstPart + value + secondPart;
}

export const splitDescription = (str: string) => str.split(".")[0];

export const arrForInRange = (range: number) =>
  Array(range)
    .fill(null)
    .map((u, i) => i + 1);

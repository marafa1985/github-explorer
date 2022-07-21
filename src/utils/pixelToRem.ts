export const pixelToRem = (size: number, base = 12): string => {
  const remVal = parseFloat((size / base).toFixed(2));
  return `${remVal}rem`;
};

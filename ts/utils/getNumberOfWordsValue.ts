export const getNumberOfWordsValue = (value: number) => {
  if (Number.isNaN(value) || value < 2) {
    return 2;
  }

  return value;
};

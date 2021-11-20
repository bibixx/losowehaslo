import { removeDiacritics } from "./removeDiacritics";

export const getRandomWords = (
  wordsList: string[],
  getRandomNumber: () => number,
  count: number,
  shouldIncludeDiacritics: boolean
) => {
  const wordsCount = wordsList.length;

  return Array.from({ length: count })
    .map(() => {
      const index = Math.floor(getRandomNumber() * wordsCount)
      const word = wordsList[index]

      if (shouldIncludeDiacritics) {
        return word
      }

      return removeDiacritics(word)
    })
}

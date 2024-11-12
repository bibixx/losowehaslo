import { getRandomWords } from "./getRandomWords";
import { getSeededRandomNumberGenerator } from "./getSeededRandomNumberGenerator";
import { Settings } from "./types";

const specialCharacters = "!@#$%^&*()_+";

export const generatePassword = (wordsList: string[], seed: number, settings: Settings) => {
  const getRandomNumber = getSeededRandomNumberGenerator(seed);

  const words = getRandomWords(wordsList, getRandomNumber, settings.count, settings.diacritics).join(
    settings.delimiter,
  );

  const suffixNumber = Math.floor(getRandomNumber() * 10);
  const suffixSpecialChar = specialCharacters[Math.floor(getRandomNumber() * specialCharacters.length)];

  let output = words;

  if (settings.addNumber) {
    output += suffixNumber;
  }

  if (settings.addSpecialCharacter) {
    output += suffixSpecialChar;
  }

  if (!settings.randomizeCase) {
    return output;
  }

  return output
    .split("")
    .map((letter) => {
      if (getRandomNumber() < 0.25) {
        return letter.toLocaleUpperCase();
      }

      return letter;
    })
    .join("");
};

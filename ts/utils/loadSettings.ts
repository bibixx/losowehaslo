import { hasOwnProperty } from "./hasOwnProperty";
import { Settings } from "./types";

const defaultSettings: Settings = {
  count: 3,
  delimiter: "-",
  diacritics: false,
  addNumber: false,
  addSpecialCharacter: false,
  randomizeCase: false,
};

const validateSettings = (potentialSettings: unknown): potentialSettings is Settings => {
  if (typeof potentialSettings !== "object" || potentialSettings === null) {
    return false;
  }

  if (
    !hasOwnProperty(potentialSettings, "count") || // number
    !hasOwnProperty(potentialSettings, "delimiter") || // string
    !hasOwnProperty(potentialSettings, "diacritics") || // boolean
    !hasOwnProperty(potentialSettings, "addNumber") || // boolean
    !hasOwnProperty(potentialSettings, "addSpecialCharacter") || // boolean
    !hasOwnProperty(potentialSettings, "randomizeCase") // boolean
  ) {
    return false;
  }

  return (
    typeof potentialSettings.count === "number" &&
    typeof potentialSettings.delimiter === "string" &&
    typeof potentialSettings.diacritics === "boolean" &&
    typeof potentialSettings.addNumber === "boolean" &&
    typeof potentialSettings.addSpecialCharacter === "boolean" &&
    typeof potentialSettings.randomizeCase === "boolean"
  );
};

export const loadSettings = (): Settings => {
  try {
    const unparsedSettings = localStorage.getItem("settings");

    if (unparsedSettings === null) {
      return defaultSettings;
    }

    const settings = JSON.parse(unparsedSettings);

    if (!validateSettings(settings)) {
      return defaultSettings;
    }

    return settings;
  } catch (error) {
    console.error("Couldn't load settings from localStorage", error);
    return defaultSettings;
  }
};

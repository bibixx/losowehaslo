import '../css/style.css';
import wordsList from './words.json';

import { generatePassword } from './utils/generatePassword';
import { Settings } from './utils/types';
import { getRandomSeed } from './utils/getRandomSeed';
import { showAdvancedOptionsVisibility } from './utils/showAdvancedOptionsVisibility';
import { hideAdvancedOptionsVisibility } from './utils/hideAdvancedOptionsVisibility';
import { getNumberOfWordsValue } from './utils/getNumberOfWordsValue';
import { loadSettings } from './utils/loadSettings';
import { saveSettings } from './utils/saveSettings';

const currentSettings: Settings = loadSettings();

let currentSeed = getRandomSeed();

const renderAndGeneratePassword = (settings: Settings, seed: number) => {
  const $password = document.querySelector('#password');
  $password!.textContent = generatePassword(wordsList, seed, settings);
};

const updateSettingsInputs = () => {
  const $numberOfWords = document.querySelector(
    '#number-of-words',
  ) as HTMLInputElement;
  const $delimiter = document.querySelector('#delimiter') as HTMLInputElement;
  const $useDiacritics = document.querySelector(
    '#use-diacritics',
  ) as HTMLInputElement;
  const $addNumber = document.querySelector('#add-number') as HTMLInputElement;
  const $addSpecialCharacter = document.querySelector(
    '#add-special-character',
  ) as HTMLInputElement;
  const $randomizeCase = document.querySelector(
    '#randomize-case',
  ) as HTMLInputElement;

  $numberOfWords.valueAsNumber = currentSettings.count;
  $delimiter.value = currentSettings.delimiter;
  $useDiacritics.checked = currentSettings.diacritics;
  $addNumber.checked = currentSettings.addNumber;
  $addSpecialCharacter.checked = currentSettings.addSpecialCharacter;
  $randomizeCase.checked = currentSettings.randomizeCase;
};

const setupEventListeners = () => {
  const $regenerateButton = document.querySelector(
    '#regenerate',
  ) as HTMLButtonElement;
  const $numberOfWords = document.querySelector(
    '#number-of-words',
  ) as HTMLInputElement;
  const $delimiter = document.querySelector('#delimiter') as HTMLInputElement;
  const $useDiacritics = document.querySelector(
    '#use-diacritics',
  ) as HTMLInputElement;
  const $addNumber = document.querySelector('#add-number') as HTMLInputElement;
  const $addSpecialCharacter = document.querySelector(
    '#add-special-character',
  ) as HTMLInputElement;
  const $randomizeCase = document.querySelector(
    '#randomize-case',
  ) as HTMLInputElement;
  const $advancedOptionsCheckbox = document.querySelector(
    '#advanced-options-checkbox',
  ) as HTMLInputElement;

  $regenerateButton.addEventListener('click', () => {
    currentSeed = getRandomSeed();

    renderAndGeneratePassword(currentSettings, currentSeed);
  });

  $numberOfWords.addEventListener('input', () => {
    currentSettings.count = getNumberOfWordsValue($numberOfWords.valueAsNumber);

    saveSettings(currentSettings);
    renderAndGeneratePassword(currentSettings, currentSeed);
  });

  $numberOfWords.addEventListener('blur', () => {
    $numberOfWords.valueAsNumber = currentSettings.count;
  });

  $delimiter.addEventListener('input', () => {
    currentSettings.delimiter = $delimiter.value;

    saveSettings(currentSettings);
    renderAndGeneratePassword(currentSettings, currentSeed);
  });

  $useDiacritics.addEventListener('input', () => {
    currentSettings.diacritics = $useDiacritics.checked;

    saveSettings(currentSettings);
    renderAndGeneratePassword(currentSettings, currentSeed);
  });

  $addNumber.addEventListener('input', () => {
    currentSettings.addNumber = $addNumber.checked;

    saveSettings(currentSettings);
    renderAndGeneratePassword(currentSettings, currentSeed);
  });

  $addSpecialCharacter.addEventListener('input', () => {
    currentSettings.addSpecialCharacter = $addSpecialCharacter.checked;

    saveSettings(currentSettings);
    renderAndGeneratePassword(currentSettings, currentSeed);
  });

  $randomizeCase.addEventListener('input', () => {
    currentSettings.randomizeCase = $randomizeCase.checked;

    saveSettings(currentSettings);
    renderAndGeneratePassword(currentSettings, currentSeed);
  });

  $advancedOptionsCheckbox.addEventListener('input', () => {
    if ($advancedOptionsCheckbox.checked) {
      showAdvancedOptionsVisibility();
    } else {
      hideAdvancedOptionsVisibility();
    }
  });
};

hideAdvancedOptionsVisibility();
renderAndGeneratePassword(currentSettings, currentSeed);
updateSettingsInputs();
setupEventListeners();

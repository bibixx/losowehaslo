export const setTabIndex = (tabIndex: number | undefined) => {
  const $numberOfWords = document.querySelector("#number-of-words") as HTMLInputElement;
  const $delimiter = document.querySelector("#delimiter") as HTMLInputElement;
  const $useDiacritics = document.querySelector("#use-diacritics") as HTMLInputElement;
  const $addNumber = document.querySelector("#add-number") as HTMLInputElement;
  const $addSpecialCharacter = document.querySelector("#add-special-character") as HTMLInputElement;
  const $randomizeCase = document.querySelector("#randomize-case") as HTMLInputElement;

  $numberOfWords.tabIndex = tabIndex ?? 0;
  $delimiter.tabIndex = tabIndex ?? 0;
  $useDiacritics.tabIndex = tabIndex ?? 0;
  $addNumber.tabIndex = tabIndex ?? 0;
  $addSpecialCharacter.tabIndex = tabIndex ?? 0;
  $randomizeCase.tabIndex = tabIndex ?? 0;
};

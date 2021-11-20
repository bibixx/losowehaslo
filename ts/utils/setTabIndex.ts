export const setTabIndex = (tabIndex: number | undefined) => {
  const $numberOfWords = document.querySelector("#number-of-words") as HTMLInputElement
  const $delimiter = document.querySelector("#delimiter") as HTMLInputElement
  const $useDiacritics = document.querySelector("#use-diacritics") as HTMLInputElement
  const $addNumber = document.querySelector("#add-number") as HTMLInputElement
  const $addSpecialCharacter = document.querySelector("#add-special-character") as HTMLInputElement
  const $randomizeCase = document.querySelector("#randomize-case") as HTMLInputElement

  $numberOfWords.tabIndex = tabIndex;
  $delimiter.tabIndex = tabIndex;
  $useDiacritics.tabIndex = tabIndex;
  $addNumber.tabIndex = tabIndex;
  $addSpecialCharacter.tabIndex = tabIndex;
  $randomizeCase.tabIndex = tabIndex;
}

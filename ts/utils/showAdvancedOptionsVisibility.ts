import { setTabIndex } from "./setTabIndex"

export const showAdvancedOptionsVisibility = () => {
  const $advancedOptionsWrapper = document.querySelector("#advanced-options-wrapper") as HTMLDivElement
  const $advancedOptionsContent = document.querySelector("#advanced-options-content")
  const $advancedOptionsButtonText = document.querySelector("#advanced-options-button-text")
  const $advancedOptionsButtonSr = document.querySelector("#advanced-options-button-sr")

  const { height: contentHeight } = $advancedOptionsContent.getBoundingClientRect()

  $advancedOptionsWrapper.style.maxHeight = `${contentHeight}px`

  $advancedOptionsButtonText.textContent = '↑'
  $advancedOptionsButtonSr.textContent = 'Zamknij opcje zaawansowane'

  $advancedOptionsWrapper.ariaHidden = 'false'
  setTabIndex(undefined);
}

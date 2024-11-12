import { setTabIndex } from "./setTabIndex";

function getElements() {
  const $advancedOptionsWrapper = document.querySelector("#advanced-options-wrapper") as HTMLDivElement;
  const $advancedOptionsContent = document.querySelector("#advanced-options-content");
  const $advancedOptionsButtonSr = document.querySelector("#advanced-options-button-sr");

  return {
    $advancedOptionsWrapper,
    $advancedOptionsContent,
    $advancedOptionsButtonSr,
  };
}

function getSupportsInterpolateSize() {
  return CSS.supports("interpolate-size", "allow-keywords");
}

function animateHeight(isOpen: boolean) {
  const { $advancedOptionsWrapper, $advancedOptionsContent } = getElements();
  const supportsInterpolateSize = getSupportsInterpolateSize();

  if (supportsInterpolateSize && isOpen) {
    $advancedOptionsWrapper.classList.add("transition-height");
    return;
  }

  if (supportsInterpolateSize && !isOpen) {
    return;
  }

  if (isOpen) {
    const { height: contentHeight } = $advancedOptionsContent!.getBoundingClientRect();

    $advancedOptionsWrapper.style.maxHeight = `${contentHeight}px`;
  } else {
    $advancedOptionsWrapper.style.maxHeight = "";
  }
}

export function toggleAdvancedOptionsOpen(isOpen: boolean) {
  const { $advancedOptionsWrapper, $advancedOptionsButtonSr } = getElements();

  $advancedOptionsButtonSr!.textContent = isOpen ? "Zamknij opcje zaawansowane" : "Otwórz opcje zaawansowane";
  $advancedOptionsWrapper.ariaHidden = isOpen ? "false" : "true";

  setTabIndex(isOpen ? undefined : -1);
  animateHeight(isOpen);
}

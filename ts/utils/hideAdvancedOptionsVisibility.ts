import { setTabIndex } from './setTabIndex';

export const hideAdvancedOptionsVisibility = () => {
  const $advancedOptionsWrapper = document.querySelector(
    '#advanced-options-wrapper',
  ) as HTMLDivElement;
  const $advancedOptionsButtonText = document.querySelector(
    '#advanced-options-button-text',
  );
  const $advancedOptionsButtonSr = document.querySelector(
    '#advanced-options-button-sr',
  );

  $advancedOptionsWrapper.style.maxHeight = '';
  $advancedOptionsButtonText!.textContent = '↓';
  $advancedOptionsButtonSr!.textContent = 'Otwórz opcje zaawansowane';

  $advancedOptionsWrapper.ariaHidden = 'true';
  setTabIndex(-1);
};

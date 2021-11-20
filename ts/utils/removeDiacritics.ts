const diacriticsMap = {
  'ą': 'a',
  'ć': 'c',
  'ę': 'e',
  'ł': 'l',
  'ń': 'n',
  'ó': 'o',
  'ś': 's',
  'ź': 'z',
  'ż': 'z',
}

export const removeDiacritics = (text: string) => text
  .split('')
  .map(letter => diacriticsMap[letter] ?? letter)
  .join('')

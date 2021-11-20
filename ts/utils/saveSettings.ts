import { Settings } from './types'

export const saveSettings = (settings: Settings) => {
  localStorage.setItem('settings', JSON.stringify(settings));
}

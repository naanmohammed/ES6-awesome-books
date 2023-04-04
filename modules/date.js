import { DateTime } from '../node_modules/luxon/src/luxon.js'

export function displayDate() {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.getElementById('date-time').textContent = now;
}

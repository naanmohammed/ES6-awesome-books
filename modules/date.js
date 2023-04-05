import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default function displayDate() {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  console.log(now);
  document.getElementById('date-time').textContent = now;
}
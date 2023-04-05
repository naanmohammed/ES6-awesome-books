import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default function displayDate() {
  const clock = document.getElementById('date-time');
  setInterval(() => {
    const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    clock.textContent = now;
  }, 1000);
}
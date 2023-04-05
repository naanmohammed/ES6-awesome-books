import { DateTime } from 'luxon';

export default function displayDate() {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.getElementById('date-time').textContent = now;
}

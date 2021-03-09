import { formatDate } from "./date";

export function resetRecord() {
  const date = formatDate();
  localStorage.removeItem(`records_${date}`)
}
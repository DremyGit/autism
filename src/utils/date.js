export function formatDate(date, separator = '/') {
  if (!date) {
    date = new Date();
  }
  const YYYY = date.getFullYear();
  const M = date.getMonth() + 1;
  const D = date.getDate();
  const MM = M < 10 ? `0${M}` : M;
  const DD = D < 10 ? `0${D}` : D;
  return `${YYYY}${separator}${MM}${separator}${DD}`
}
export function isNightNow() {
  const hour = new Date().getHours();
  return hour >= 20 || hour < 6;
}

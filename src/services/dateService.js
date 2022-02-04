export function dateService() {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekDay = week[new Date().getDay()];
  const month = new Date().toLocaleString("en-US", { month: "short" });
  const day = new Date().toLocaleString("en-US", { day: "2-digit" });
  const year = new Date().getFullYear();
  const currDate = `${weekDay}, ${month} ${day} ${year}`;
  return currDate;
}

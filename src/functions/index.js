export function getFormattedDate(date = new Date("2025-04-12")) {
  // Use "YYYY-MM-DD" format
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error("Invalid date provided");
  }

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${dayName}, ${day}${getOrdinal(day)} ${monthName} ${year}`;
}

export const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight * 0.7,
    left: 0,
    behavior: "smooth",
  });
};

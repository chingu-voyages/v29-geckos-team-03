// The following examples use the datetime integer 1620410400 for illustration. Three extra "0"s should be added for the right datetime values
// NB: new Date(1620410400000).toString() gives you 'Fri May 07 2021 12:00:00 GMT-0600 (Mountain Daylight Time)'

// Extract the date from the dt element in an API list e.g. ToDate(1620410400) gives you 7
export const ToDate = (dt) => new Date(parseInt(dt + "000")).getDate();

// Extract the day from the dt element in an API list e.g. ToDate(1620410400) gives you Fri
export const ToDayShort = (dt) =>
  dayAsStringShort(new Date(parseInt(dt + "000")).getDay());

// Extract the day from the dt element in an API list e.g. ToDate(1620410400) gives you Friday
export const ToDay = (dt) =>
  dayAsString(new Date(parseInt(dt + "000")).getDay());

// Extract the time from the dt element in an API list e.g. ToDate(1620410400) gives you Friday
export const ToTime = (dt) => {
  const someDate = new Date(parseInt(dt + "000"));
  return someDate.getHours() < 12
    ? someDate.getHours() + " AM"
    : someDate.getHours() - 12 + " PM";
};

// Converts the day number into it's corresponding string form e.g. 0 is Sunday, 3 is Wednesday
export const dayAsString = (dayIndex) => {
  return (
    [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][dayIndex] || ""
  );
};

// Converts the day number into it's corresponding string form e.g. 0 is Sun, 3 is Wed
export const dayAsStringShort = (dayIndex) => {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayIndex] || "";
};

// Provides a distinct list of Days from the openweathermap api "list". NB: The distinct list of days are a string of short day forms, e.g Mon, Tue, Wed
export const distinctApiDays = (list) => [
  ...new Set(list.map((item) => ToDayShort(item.dt))),
];

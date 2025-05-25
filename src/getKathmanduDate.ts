export default function getKathmanduDate(date: Date): Date {
  return new Date(
    (date ? new Date(date) : new Date()).toLocaleString("en-US", {
      timeZone: "Asia/Kathmandu",
    })
  );
}

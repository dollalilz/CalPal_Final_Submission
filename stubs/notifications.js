// status (string)
// either pending, accepted, declined

const date1 = new Date(2020, 10, 19).toDateString();
const date2 = new Date(2020, 10, 21).toDateString();
const date3 = new Date(2020, 10, 22).toDateString();

export default notifications = [
  {
    status: "Pending",
    name: "Bubble Tea",
    date: date1,
    sender: "Marina",
    eventId: 1,
  },
  {
    status: "Accepted",
    name: "Movie Night",
    date: date2,
    sender: "Gary",
    eventId: 2,
  },
  {
    status: "Pending",
    name: "Work Drinks",
    date: date3,
    sender: "Lily",
    eventId: 3,
  },
];

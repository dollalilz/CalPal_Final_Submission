const date1 = new Date(2020, 10, 19).toDateString();
const date2 = new Date(2020, 10, 21).toDateString();
const date3 = new Date(2020, 10, 22).toDateString();

export default events = [
    {
        host:"Marina",
        name:"Bubble Tea",
        attending:[],
        startDate:date1,
        startTime:"12:00",
        endDate: date1,
        endTime:"13:00",
        location:"Gongcha Liverpool",
        status: "Accepted"
    },
    {
        host:"Gary",
        name:"Movie Night",
        attending:[],
        startDate:date2,
        startTime:"12:00",
        endDate: date2,
        endTime:"13:00",
        location:"Event Cinemas",
        status:"Accepted"
    },
    {
        host:"Lily",
        name:"Work Drinks",
        attending:[],
        startDate:date3,
        startTime:"17:00",
        endDate: date3,
        endTime:"18:00",
        location:"Totti's",
        status:"Pending"
    },

];

function compareTime(timeString1, timeString2) {
    const dateTime1 = new Date(timeString1);
    const dateTime2 = new Date(timeString2);
    return dateTime1 > dateTime2;
}
module.exports = {
    compareTime
}
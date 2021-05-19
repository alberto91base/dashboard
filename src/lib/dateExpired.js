const isDateNoExpired = (date) => {
    const dateNow = new Date();
    let dateRecibed = new Date(date);
    const hoursExpired = 8;
    dateRecibed.setTime(dateRecibed.getTime() + hoursExpired * 60 * 60 * 1000);

    if (dateNow < dateRecibed) {
        return true;
    } else {
        return false;
    }
};

export default isDateNoExpired;

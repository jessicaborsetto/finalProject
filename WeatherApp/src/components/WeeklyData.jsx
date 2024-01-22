function WeeklyData({ date}) {

    const today = new Date(date);
    const week = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'January',
        'December',
    ]
    const year = today.getFullYear()
    const hour = today.getHours()
    const day = week[today.getDay()]
    const numberDay = today.getDate()
    const minutes = today.getMinutes()
    const currentHour = `${hour.toString().padStart(2, '0')}:${minutes.toFixed(0).padStart(2, '0')}`; //per avere il doppio numero sull'ora
    const month = months[today.getMonth()]

    // console.log(today)
    // console.log(month)
    // console.log(year)
    // console.log(hour)
    // console.log(minutes)
    // console.log(currentHour)

    return (
        <>

            <div className="dateIcons">
                <i className="bi bi-calendar-fill me-3"></i>
                <h5 className="m-0">{`${day} ${numberDay}`}</h5>
            </div>

            <div className="dateIcons">
                <i className="bi bi-clock-fill me-3"></i>
                <h4 className="m-0">{currentHour}</h4>
            </div>

            <h6>{`${month} ${year}`}</h6>
            <hr />


        </>
    )
}

export default WeeklyData
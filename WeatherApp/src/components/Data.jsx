
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CurrentDateAction } from '../redux/dataSlice';

function Data({ }) {
    const currentDate = useSelector((state) => state.currentDate);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CurrentDateAction());
      }, [dispatch]);

    // const today = new Date();
    // const week = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    // const months = [
    //     'January',
    //     'February',
    //     'March',
    //     'April',
    //     'May',
    //     'June',
    //     'July',
    //     'August',
    //     'September',
    //     'October',
    //     'January',
    //     'December',
    // ]
    // const year = today.getFullYear()
    // const hour = today.getHours()
    // const day = week[today.getDay()]
    // const numberDay = today.getDate()
    // const minutes = today.getMinutes()
    // const month = months[today.getMonth()]
    // const currentHour = `${hour.toString().padStart(2, '0')}:${minutes.toFixed(0).padStart(2, '0')}`;

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
                <h5 className="m-0">{`${currentDate.day} ${currentDate.numberDay}`}</h5>
            </div>

            <div className="dateIcons">
                <i className="bi bi-clock-fill me-3"></i>
                <h4 className="m-0">{currentDate.currentHour}</h4>
            </div>

            <h6>{`${currentDate.month} ${currentDate.year}`}</h6>
            <hr />


        </>
    )
}

export default Data
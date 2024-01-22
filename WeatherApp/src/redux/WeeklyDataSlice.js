// import {createSlice} from '@reduxjs/toolkit'

// const today = new Date(date);
// const week = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'January',
//   'December',
// ];

// const initialState = {
//   day: week[today.getDay()],
//   numberDay: today.getDate(),
//   month: months[today.getMonth()],
//   year: today.getFullYear(),
//   currentHour: `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toFixed(0).padStart(2, '0')}`,
// };

// const weeklyDataSlice = createSlice({
//   name: 'weeklyDate',
//   initialState,
//   reducers: {
//     weeklyDateAction: (state) => {
//       const now = new Date();
//       state.day = week[now.getDay()];
//       state.numberDay = now.getDate();
//       state.month = months[now.getMonth()];
//       state.year = now.getFullYear();
//       state.currentHour = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toFixed(0).padStart(2, '0')}`;
//     },
//   },
// });
// export const { weeklyDateAction } = weeklyDataSlice.actions;

// export const weeklyDateReducer = weeklyDataSlice.reducer;
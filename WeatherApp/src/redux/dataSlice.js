// creo la 'slice' che si occuperà della DATA CORRENTE:
import {createSlice} from '@reduxjs/toolkit'

// creo l'oggetto date
const today = new Date();

// imposto i valori per creare la data: mesi e gg della settimana
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
];

// creo lo slice di stato chiamato 'currentDate' utilizzando il tool createSlice
export const dataSlice = createSlice({
  //nome dello slice:
  name: 'currentDate',  
  // stato iniziale dello slice 
  // uso i metodi dell'oggetto date
  initialState : {
    day: week[today.getDay()],
    numberDay: today.getDate(),
    month: months[today.getMonth()],
    year: today.getFullYear(),
    currentHour: `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toFixed(0).padStart(2, '0')}`,
      // --> .padStart(2, '0'): serve per fare in modo che la stringa abbia almeno due caratteri quindi se l'ora è 9, diventerà "09"
  },

   // Reducers - definiscono le azioni che modificano lo stato: questo reducer si chiama CurrentDateAction e gestisce l'aggiornamento dell'ora e della data
  reducers: {
    CurrentDateAction: (state) => {
      const now = new Date();
      state.day = week[now.getDay()];
      state.numberDay = now.getDate();
      state.month = months[now.getMonth()];
      state.year = now.getFullYear();
      state.currentHour = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toFixed(0).padStart(2, '0')}`;
    },
  },
});

//esporto l'azione del reducer
export const { CurrentDateAction } = dataSlice.actions;
//esporto il reducer
export const CurrentDateReducer = dataSlice.reducer;
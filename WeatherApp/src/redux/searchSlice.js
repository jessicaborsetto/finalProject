import {createSlice} from '@reduxjs/toolkit'

//creo la slice per la BARRA DI RICERCA
export const searchSlice = createSlice({
  //imposto nome e stato iniziale
    name: 'search',
    initialState : {
        search: '',
        error: '',
        weather: {
            name: '',
            sys: { country: '', sunrise: '', sunset: '' },
            main: { temp: '', feels_like: '', humidity: '', temp_min: '', temp_max: '' },
            weather: [{ description: '' }],
            wind: { speed: '' },
        }
    },  //saranno oggetti vuoti perchè verranno riempiti dinamicamente con le info dell'api
  
    //imposto le azioni del reducer
    reducers:{
        setSearch: (state, action) => {
            state.search = action.payload;           // imposta il termine di ricerca  
          },
          setError: (state, action) => {
            state.error = action.payload;             // imposta l'errore con i relativi dati
          },
          setWeather: (state, action) => {
            state.weather = action.payload;           // imposta i dati meteorologici 
    }
    }
})

//esporto le azioni
export const { setSearch, setError, setWeather } = searchSlice.actions;

//esporto il reducer
export const SearchReducer = searchSlice.reducer;
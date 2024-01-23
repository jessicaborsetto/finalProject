import {createSlice} from '@reduxjs/toolkit'

//nome e stato iniziale della slice: LE PREVISIONI SU PIù GIORNI
export const forecastSlice = createSlice({
    name: 'forecast',
    initialState:{
        data: null,
        loading: false,
        error: null,
    },
    //definiscono le azioni del componente forecast
    reducers:{
          //Azione: setForecast: 
          setForecast: (state, action) => {
            state.data = action.payload;                   //imposta i dati delle previsioni (con il payload)
            state.loading = false;                         //segnala che il caricamento è completo
            state.error = null;                            //cancella eventuali errori
          },
          //Azione: setForecastLoading: 
          setForecastLoading: (state) => {
            state.loading = true;                          //indica che il caricamento è in corso                        
            state.error = null;                            //resetta l'eventuale stato di errore precedente
          },
          setForecastError: (state, action) => {
            state.loading = false;                          //indica che il caricamento è completo (anche se con errori)
            state.error = action.payload;                   //imposta lo stato di errore con il payload (=in questo caso: i dati relativi all'errore)
          },
    }

})
//uso di payload per trasportare dati aggiuntivi con un'azione necessari per il cambiamento di stato ed associati all'azione


//esporto le azioni
export const { setForecast, setForecastLoading, setForecastError } = forecastSlice.actions;
//esporto il reducer
export const ForecastReducer = forecastSlice.reducer;
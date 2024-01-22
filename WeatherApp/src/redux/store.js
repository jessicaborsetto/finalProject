// confifurazione dello store importandolo
import { configureStore } from '@reduxjs/toolkit';
import { CurrentDateReducer } from './dataSlice';
import { SearchReducer } from './searchSlice';
import { ForecastReducer } from './forecastSlice';

export default configureStore ({ 
    reducer: {
        currentDate: CurrentDateReducer,
        search: SearchReducer,
        forecast: ForecastReducer
    }
})

// lo store redux globale viene gestito dal reducer.
// al suo interno ci sono altri reducers che gestiscono invece gli stati specifici dei componenti:
// currentDate: CurrentDateReducer > per gestire la data odierna (quella di sistema)
// search: SearchReducer > per gestire le ricerche nell'app
// forecast: ForecastReducer > per gestire le previsioni su più giorni

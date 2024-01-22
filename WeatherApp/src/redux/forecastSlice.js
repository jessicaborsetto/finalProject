import {createSlice} from '@reduxjs/toolkit'

export const forecastSlice = createSlice({
    name: 'forecast',
    initialState:{
        data: null,
        loading: false,
        error: null,
    },
    reducers:{
        setForecast: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
          },
          setForecastLoading: (state) => {
            state.loading = true;
            state.error = null;
          },
          setForecastError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
    }

})

export const { setForecast, setForecastLoading, setForecastError } = forecastSlice.actions;

export const ForecastReducer = forecastSlice.reducer;
import {createSlice} from '@reduxjs/toolkit'

export const searchSlice = createSlice({
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
    },
    reducers:{
        setSearch: (state, action) => {
            state.search = action.payload;
          },
          setError: (state, action) => {
            state.error = action.payload;
          },
          setWeather: (state, action) => {
            state.weather = action.payload;
    }
    }
})

export const { setSearch, setError, setWeather } = searchSlice.actions;

export const SearchReducer = searchSlice.reducer;
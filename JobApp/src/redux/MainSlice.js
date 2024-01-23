import {createSlice} from '@reduxjs/toolkit'

export const MainSlice = createSlice({
    name: 'main',
    initialState: {
      query: '',
      jobs: [],
      loading: false,
      error: null,
    },
    reducers: {
      setQuery: (state, action) => {
        state.query = action.payload;
      },
      setJobs: (state, action) => {
        state.jobs = action.payload;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
    },
  });


//esporto le azioni
export const { setQuery, setJobs, setLoading, setError } = MainSlice.actions;

//esporto il reducer
export const MainSearchReducer = MainSlice.reducer;
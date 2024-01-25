import {createSlice} from '@reduxjs/toolkit'

//stato per mostrare le aziende nella pagina principale una volta fatta la ricerca
export const MainSlice = createSlice({
    name: 'main',
    initialState: {
      query: '',
      jobs: [],
      loading: false,
      error: null,
    },
    reducers: {
      //QUERY
      setQuery: (state, action) => {
        state.query = action.payload;
      },
      //JOBS
      setJobs: (state, action) => {
        state.jobs = action.payload;
      },
      //LOADING
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      //ERRORE
      setError: (state, action) => {
        state.error = action.payload;
      },
    },
  });


//esporto le azioni
export const { setQuery, setJobs, setLoading, setError } = MainSlice.actions;

//esporto il reducer
export const MainSearchReducer = MainSlice.reducer;
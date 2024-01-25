import {createSlice} from '@reduxjs/toolkit'

// slice per la ricerca delle aziende
export const CompanySlice = createSlice({
    name: 'companySearch',                              // Nome dello slice,
    // Stato iniziale per lo slice della ricerca delle aziende
    initialState: {                             
        jobs: [],                                       // Lo stato iniziale per la proprietà 'jobs' è un array vuoto
    },
    // I reducer della proprietà 'jobs' con il payload dell'azione
    reducers: {
        //SET JOBS  
        setJobs: (state, action) => {
          state.jobs = action.payload;
        },
      },
    });


//esporto le azioni
export const { setJobs } = CompanySlice.actions;

//esporto il reducer
export const CompanySearchReducer = CompanySlice.reducer;
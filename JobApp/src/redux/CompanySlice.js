import {createSlice} from '@reduxjs/toolkit'

export const CompanySlice = createSlice({
    name: 'companySearch',
    initialState: {
        jobs: [],
    },
    reducers: {
        setJobs: (state, action) => {
          state.jobs = action.payload;
        },
      },
    });


//esporto le azioni
export const { setJobs } = CompanySlice.actions;

//esporto il reducer
export const CompanySearchReducer = CompanySlice.reducer;
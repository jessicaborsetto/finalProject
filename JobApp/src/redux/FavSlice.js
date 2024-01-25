import { createSlice } from '@reduxjs/toolkit';

//creazione slice per aggiunta e cancellazione delle aziende nei preferiti
export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    companies: [],
  },
  reducers: {
    //ADD FAV
    addCompanyToFavorites: (state, action) => {
      state.companies.push(action.payload);
    },
    //REMOVE FAV
    removeCompanyFromFavorites: (state, action) => {
      state.companies = state.companies.filter(company =>  company.id !== action.payload);
    },
  },
});

//esportazione azioni e reducers
export const { addCompanyToFavorites, removeCompanyFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
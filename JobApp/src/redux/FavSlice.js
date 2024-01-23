import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    companies: [],
  },
  reducers: {
    addCompanyToFavorites: (state, action) => {
      state.companies.push(action.payload);
    },
    removeCompanyFromFavorites: (state, action) => {
      state.companies = state.companies.filter(company =>  company.id !== action.payload);
    },
  },
});

export const { addCompanyToFavorites, removeCompanyFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
// confifurazione dello store redux
import { configureStore } from '@reduxjs/toolkit';
import { MainSearchReducer } from './MainSlice';
import { CompanySearchReducer } from './CompanySlice';
import { favoritesReducer } from './FavSlice';


export default configureStore ({ 
    reducer: {
        main: MainSearchReducer,
        companySearch: CompanySearchReducer,
        favorites: favoritesReducer,
    }
})



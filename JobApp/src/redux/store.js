// confifurazione dello store importandolo
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

// lo store redux globale viene gestito dal reducer.
// al suo interno ci sono altri reducers che gestiscono invece gli stati specifici dei componenti:



import { configureStore } from '@reduxjs/toolkit';
import { CurrentDateReducer } from './dataSlice';
import { SearchReducer } from './searchSlice';


export default configureStore ({ 
    reducer: {
        currentDate: CurrentDateReducer,
        search: SearchReducer,
    }
})


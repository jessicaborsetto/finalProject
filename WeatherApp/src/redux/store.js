
import { configureStore } from '@reduxjs/toolkit';
import { CurrentDateReducer } from './dataSlice';


export default configureStore ({ 
    reducer: {
        currentDate: CurrentDateReducer,
    }
})


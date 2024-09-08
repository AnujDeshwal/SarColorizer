import {configureStore} from '@reduxjs/toolkit';
import mainSlice from './main.reducer';

const store = configureStore({
    reducer:{
        [mainSlice.name]:mainSlice.reducer,
    }
})
export default store;   
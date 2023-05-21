import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Redux/Reducer/main';


const Store = configureStore({
    reducer: rootReducer,
});


export default Store;
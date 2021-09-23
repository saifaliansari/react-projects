import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './auth';
import counterReducer from './counter';

const store = configureStore(
    {
        reducer: {
            counter: counterReducer,
            auth: authenticationReducer
        }
    }
);



export default store;

import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./Features/musicSlice"; 
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        music: musicReducer,  
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware), 
});

sagaMiddleware.run(rootSaga);

export default store;

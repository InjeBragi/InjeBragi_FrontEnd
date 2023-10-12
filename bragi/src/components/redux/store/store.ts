import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from 'redux-logger'
import { musicReducer } from "../reducer/musicReducer";
const rootReducer = combineReducers({
    music:musicReducer
})

const store = createStore(rootReducer,applyMiddleware(logger))

export type RootReducerState = ReturnType<typeof rootReducer> 
export default store
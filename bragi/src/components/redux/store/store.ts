import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from 'redux-logger'
import { musicReducer } from "../reducer/musicReducer";
import { loginReducer, spotyifyReducer } from "../reducer/loginReducer";
const rootReducer = combineReducers({
    music:musicReducer,
    login:loginReducer,
    spotify:spotyifyReducer
})

const store = createStore(rootReducer,applyMiddleware(logger))

export type RootReducerState = ReturnType<typeof rootReducer> 
export default store
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from 'redux-logger'
import { musicReducer } from "../reducer/musicReducer";
import { loginReducer, pathReducer, spotyifyReducer } from "../reducer/loginReducer";
import { playMusicReducer } from "../reducer/playMusicReducer";
const rootReducer = combineReducers({
    music:musicReducer,
    login:loginReducer,
    spotify:spotyifyReducer,
    play:playMusicReducer,
    path:pathReducer
})

const store = createStore(rootReducer,applyMiddleware(logger))

export type RootReducerState = ReturnType<typeof rootReducer> 
export default store
import { SET_NOW_PLAYING_MUSIC } from "../action/actionMusic";

export const data = {}

export const playMusicReducer = (state = data, action:any) => {
    switch(action.type){
        case SET_NOW_PLAYING_MUSIC:{
            return{
                state:action.data,
                status:action.satus
            }
        }
      
    }
    return{
        ...state
    }
}
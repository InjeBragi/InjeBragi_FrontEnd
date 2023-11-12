import { SET_CLICKED_USER, SET_IMAGE_PATH, SET_LOGINED_USER, SET_TOKEN } from "../action/actionLogin"
import { SET_SPOTIFY_TOKEN } from "../action/actionSpotify"

export const data ={
    
}
export const clickedUser={

}
export const spotify = {
    
}
export const path  ={

}
export const loginReducer = (state = data, action:any) =>{
    switch(action.type){
        case SET_LOGINED_USER:{
            
            return{
                
                state:action.data
            }
        }
    }
    return {
        ...state,
        
    }
}

export const spotyifyReducer = (state = spotify, action:any) =>{
    
    switch(action.type){
        case SET_SPOTIFY_TOKEN:{
            
            return{
             
                state:action.token
            }
        }
    }
    return {
        ...state
    }
}
export const userReducer = (state=clickedUser,action:any) =>{
    switch(action.type){
        case SET_CLICKED_USER:{
            return{
              
            }
        }
    }
    return {
        ...state
    }
}

export const pathReducer = (state=path,action:any) =>{
    switch(action.type){
        case SET_IMAGE_PATH:{
            return{
                path:action.path
            }
        }
    }
    return {
        ...state
    }
}
    
import { SET_FEED_MUSIC } from "../action/actionFeedCreate"

export const FeedState = {
    music:''
}

export const feedCreateReducer = (state=FeedState,action:any) =>{
    switch(action.type){
        case SET_FEED_MUSIC:{
            return{
                ...state,
                music:action.data
            }
        }   
      
    }
      return{
            ...state
        }
}
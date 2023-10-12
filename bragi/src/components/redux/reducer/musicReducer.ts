import { SEARCH_PAGE_MUSIC } from "../action/actionMusic"

export const data ={

}
export const musicReducer = (state = data, action:any) =>{
    
    switch(action.type){
        case SEARCH_PAGE_MUSIC:{
            console.log('state',action.data)
            return{
                
                state:action.data
            }
        }
    }
    return {
        data
    }
}
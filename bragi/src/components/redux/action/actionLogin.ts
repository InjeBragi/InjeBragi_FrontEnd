export const SET_TOKEN = "SET_TOKEN";
export const SET_LOGINED_USER = "SET_LOGINED_USER"
export const SET_CLICKED_USER = "SET_CLICKED_USER"
export const setLoginedUser = (data:object) =>{
    console.log('setdata',data)
    return{
        type:SET_LOGINED_USER,
        data:data
    }
}
export const setToken = (token:string) => {
    console.log(token,'action')
    return{
        type:SET_TOKEN,
        token:token
    }
}

export const setClickedUser = (data:string) =>{
    return{
        tpye:SET_CLICKED_USER,
        data:data
    }
}
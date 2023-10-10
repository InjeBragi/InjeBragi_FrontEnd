import axios from 'axios'
import {Platform} from 'react-native'
export const client = () =>{
    const serverPath =Platform.OS ==='android'?
     'http://10.0.2.2:8080':
     'http://localhost8080'
    const SIGNIN_POST = async (data:object)=>{
        try{
            console.log(data,'data')
            const response = await axios.post(`${serverPath}/sign-in`, data);
            if(response.status){
               console.log(response.data.status)
               console.log(response.data,'data')
            }
            else {
                console.log('2222')
            }
        }   
        catch(error){
            
            console.log(error)
        }
    }

    const SIGNUP_POST = async(data:object)=>{
        try{
            const response = await axios.post(`${serverPath}/sign-up`,data)
            return response.data.status
        }catch(error){
            console.log(error)
            return false
        }
    }

    return{
        SIGNIN_POST,
        SIGNUP_POST
    }

}
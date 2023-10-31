import axios from 'axios'
import {Platform} from 'react-native'
export const client = () =>{
    const serverPath =Platform.OS ==='android'?
     'http://10.0.2.2:8080':
     'http://localhost8080'
    const SIGNIN_POST = async (data:object)=>{
        try{
            const response = await axios.post(`${serverPath}/sign-in`, data);
            //console.log(response.data)
           return response
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

    const SPOTIFY_SEARCH_GET =async (data:string) =>{
       console.log('SPOTIFY')
        try{
            const res = await axios.get(`${serverPath}/search`,{
                params:{
                    keyword:data
                }
            })
            
            return res.data.data
        }
        catch(error){
            console.log(error)
            
        }

    }
    const GET_SPOTIFY_TOKEN = async () => {
        console.log('token')
        try{
            const res = await axios.get(`${serverPath}/get-token`)
            console.log('token', res.data)
            return res.data
        }
        catch(error){
            console.log(error)
            
        }

    }
    const GET_SPOTIFY_TRACK = async (token:any) => {
        const accessToken = token;
        const playlistId = 'iu';

        const url = `https://api.spotify.com/v1/search`;
        const res = await axios.get(url, {
            params:{
                q:'iu',
                type:'track',
                limit:1
            },
            headers: {
                'Authorization': `Bearer ${accessToken}`,
              },
          })
          return res.data.tracks.items
              
          
           
    }
    return{
        SIGNIN_POST,
        SIGNUP_POST,
        SPOTIFY_SEARCH_GET,
        GET_SPOTIFY_TOKEN,
        GET_SPOTIFY_TRACK
    }

}
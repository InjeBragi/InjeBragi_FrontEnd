import axios from 'axios'
import {Platform} from 'react-native'
export const client = () =>{
    const serverPath =Platform.OS ==='android'?
     'http://10.0.2.2:8080':
     'http://localhost8080'
    const SIGNIN_POST = async (data:object)=>{
        try{
            const response = await axios.post(`${serverPath}/member/sign-in`, data);
            console.log(response.data)
           return response
        }   
        catch(error){
            
            console.log(error)
        }
    }

    const SIGNUP_POST = async(data:object)=>{
        try{
            const response = await axios.post(`${serverPath}/member/sign-up`,data)
            return response.data.status
        }catch(error){
            console.log(error)
            return false
        }
    }
   
    type post_profile_image_props ={
        data:object|any,
        token:string|any,
    }
    const POST_PROFILE_IMAGE = async({data,token}:post_profile_image_props)=>{
        const formData = new FormData();
        console.log('post data =======', data.assets[0].uri)
        formData.append('file', {
          uri: data.assets[0].uri,
          name: data.assets[0].fileName, // 파일 이름
          type: data.assets[0].type, // 파일 타입
        });
    
        //console.log('POST_PROFILE_IMAGE=======',data)
        try{
            await axios.post(`${serverPath}/image`,formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}` // Bearer 스킴을 사용하여 토큰 전달
                  },
             
            }).then((res)=>{
                console.log(res)
            })
            
            
        }catch(error){
            console.log(error)
        }
    }
    const SPOTIFY_SEARCH_GET =async (data:string) =>{
       console.log('SPOTIFY')
        try{
            const res = await axios.get(`${serverPath}/spotify/search`,{
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
            const res = await axios.get(`${serverPath}/spotify/get-token`)
            console.log('token', res.data)
            return res.data
        }
        catch(error){
            console.log(error)
            
        }

    }
    type trackProp = {
        token:any,
        trackName:string,
        artistName:string
    }
    const GET_SPOTIFY_TRACK = async ({token,artistName,trackName}:trackProp) => {
        const accessToken = token;
        const playlistId = 'iu';
        const query =`${trackName} artist:${artistName}`
        const url = `https://api.spotify.com/v1/search`;
        const res = await axios.get(url, {
            params:{
                q:query,
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
        GET_SPOTIFY_TRACK,
        POST_PROFILE_IMAGE
    }

}
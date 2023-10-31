import { Pressable, Text, View } from "react-native";
import { client } from "../../services/client";
import { useSelector } from "react-redux";
import { RootReducerState } from "../../components/redux/store/store";
import TrackPlayer,{State} from 'react-native-track-player'
import { useState,useEffect } from "react";
import { TrackPlayerInitializer } from "./TrackPlayerInitial";

export default function MainPage(){
   
    const {GET_SPOTIFY_TRACK} = client()
    const userToken = useSelector((state:RootReducerState)=>state.spotify.state.data)
    const [track,setTrack] = useState<any>()
    const onPress= async () =>{
        GET_SPOTIFY_TRACK(userToken).then((result:any)=>{
            console.log('res',result)
            setTrack(result)
            console.log('eeeeeeeeeeeeeeeeeeee',result[0].artist)
            console.log('eeeeeeeeeeeeeeeeeeee',result[0].image)
        })
        
       
    }
    
    const start = async () => {
        const item ={
            title: track[0].name,
            artist: track[0].artist,
            url: track[0].preview_url,
        }
        TrackPlayerInitializer().then(()=>{

            TrackPlayer.add([item]);
        }).then(()=>{
            TrackPlayer.play();
            console.log("Play 호출 후 플레이어 상태: ",  TrackPlayer.getState());
        })
      
                
            // Start playing it
           
      
        
     
      
    };
    return(
        <View>
            
            <Text>Main</Text>
            <Pressable onPress={onPress}>
                <Text>입력</Text>
            </Pressable>
            <Pressable onPress={start}>
                <Text>시작</Text>
            </Pressable>
            
        </View>
    )
}
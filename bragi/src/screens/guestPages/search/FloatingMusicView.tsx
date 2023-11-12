import React,{useEffect, useMemo, useState} from 'react'
import { View,StyleSheet,Text,Dimensions,Image,Pressable } from "react-native";
import Icons from 'react-native-vector-icons/AntDesign'
import { useSelector } from "react-redux";
import { RootReducerState } from "../../../components/redux/store/store";
import { COLOR } from "../../../colors/Colors";
import { TrackPlayerInitializer } from "../TrackPlayerInitial";
import TrackPlayer from "react-native-track-player";
const width = Dimensions.get("window").width
export default function FloatingMusicView (){
    const data = useSelector((state:RootReducerState)=>state.play.state)
    const [track,setTrack] = useState<any>(data)
    const [playing,setPlaying] = useState<boolean>(false)
    const [playStatus,setPlayStatus] = useState<string>('')
    useMemo(()=>{
    //선택되는 앨범 데이터 변경시 트랙 변경
        setTrack(data)
        console.log('data change', track)
    },[data])
   useEffect(()=>{
    //앨범 클릭시 바로 재생
        if(data){
            start()
        }
   },[data])
    const start = async () => {
        setPlayStatus("caretright")
        const item ={
            title: track[0].name,
            artist: track[0].artist,
            url: track[0].preview_url,
        }
        if(playing){
            TrackPlayer.stop().then(()=>{
                TrackPlayer.reset().then(()=>{
                    TrackPlayer.add(item);
                }).then(()=>{
                    TrackPlayer.play();
                    setPlaying(true)
                    console.log("Play 호출 후 플레이어 상태: ",  TrackPlayer.getState());
                })
            })
        }
        else{
            TrackPlayerInitializer().then(()=>{
                TrackPlayer.add(item);
        }).then(()=>{
            TrackPlayer.play();
            setPlaying(true)
            console.log("Play 호출 후 플레이어 상태: ",  TrackPlayer.getState());
        })} 
    };
    const pause = () => {
        setPlayStatus("pause")
        setPlaying(false)
        TrackPlayer.pause()
    } 
    const nextPlay = () => {
        TrackPlayer.stop
    }
    return(
        <View style={styles.container}>
            <View style={styles.playerLeft}>
            <Image 
            style={{width:42,height:42,borderRadius:4}}
            source={{uri:data[0].album.images[0].url}}/>
            <Text style={styles.playerText}>{data[0].name}</Text>
            </View>
            <View style={styles.playerRight}>
            <Pressable onPress={playing?pause:start}>
                <Icons 
                    name={playing?"pause":"caretright"}
                    color={COLOR.FONTCOLOR_WHITE}
                    size={20}/>
            </Pressable>
            <Icons
                name="forward"
                color={COLOR.FONTCOLOR_WHITE}
                size={20}
                style={{marginLeft:25}}
                />
            </View>
            
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        alignSelf:"center",
        flex:0.1,
        width:"95%",
        bottom:10,
        position:"absolute",
        height:"10%",
        backgroundColor:COLOR.MUSIC_PLAYER_GRAY,
        borderRadius:13,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center'
        
    },
    playerText:{
        
        color:COLOR.FONTCOLOR_WHITE,
        fontSize: 18,
        marginLeft:5

    },
    playerLeft:{
        flex:0.5,
        flexDirection:'row',
        paddingLeft:12,
        alignItems:'center',
    },
    playerRight:{
        
        flex:0.5,
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:15
        
    }
})
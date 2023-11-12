import { Dimensions, FlatList, Image, ListRenderItem, StyleSheet, Text, View,Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerState } from "../../../components/redux/store/store";
import { useEffect } from "react";
import { album } from "../../../@types/dataType";
import { COLOR } from "../../../colors/Colors";
import { setNowPlayingMusic } from "../../../components/redux/action/actionMusic";
import { client } from "../../../services/client";

const rec = Dimensions.get('screen').width-40
type renderProp ={
    item:album,
    visible:any,
    setVisible:any,
    dispatch:any
}
const RenderItem = ({item,setVisible,visible,dispatch}:renderProp)=>{
    const userToken = useSelector((state:RootReducerState)=>state.spotify.state.data)
    const {GET_SPOTIFY_TRACK} = client()
    useEffect(()=>{
        console.log(item.imageUrl)
    })
    const onPressAlbum = () => {
         GET_SPOTIFY_TRACK({token:userToken,
            artistName:item.artistName,
            trackName:item.title}).then((res)=>{
                dispatch(setNowPlayingMusic(res))
                if(visible==false){
                    setVisible(true)
                }
            })
    }
    return(
        <Pressable style={styles.albumContainer}
            onPress={onPressAlbum}>
            <View style={{width:"17%"}}>
            <Image style={styles.albumImage} source={{uri:item.imageUrl}} resizeMethod="auto"/>
            </View>
            
            <View style={{width:"80%" ,paddingLeft:10}}>
            <Text style={styles.albumText}>{item.title}</Text>
            <Text style={styles.artistText}>{item.artistName}</Text>
            
            </View>
            
        </Pressable>
    )
}
type props = {
    visible:boolean,
    setVisible:any
}
export default function SearchedArtist({visible,setVisible}:props){
    const data = useSelector((state:RootReducerState)=>state.music.state)
   const dispatch = useDispatch();
    return(
        <View style={{flex:1}}>
            <FlatList
            data={data}
            renderItem={({item,index}) => <RenderItem item={item}
            visible={visible} 
            setVisible={setVisible}
             dispatch = {dispatch} />}
            keyExtractor={(item,i)=>`${i}` }/>
           
        
           
        </View>
    )
}

const styles = StyleSheet.create({
    albumContainer :{
        flex:1,
        flexDirection:"row",
        marginBottom:5,
       
        height:rec/100*17,
        marginTop:10
    },
    albumImage:{
        width:"100%",
        height:"100%",
        backgroundColor:'white',
        
    },
    albumText:{
        fontSize:15,
        color:COLOR.FONTCOLOR_WHITE
    },
    artistText:{
        color:COLOR.ARTIST_NAME,
        fontSize:14,
    }
})
import { Dimensions, FlatList, Image, ListRenderItem, StyleSheet, Text, View,Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerState } from "../../../components/redux/store/store";
import { useEffect, useState } from "react";
import { album } from "../../../@types/dataType";
import { COLOR } from "../../../colors/Colors";
import { setNowPlayingMusic } from "../../../components/redux/action/actionMusic";
import { client } from "../../../services/client";
import { setFeedMusic } from "../../../components/redux/action/actionFeedCreate";

const rec = Dimensions.get('screen').width-40
type renderProp ={
    item:album,
    visible:any,
    setVisible:any,
    dispatch:any,
    createMode:boolean,
    index:number,
    setSelectedItem: React.Dispatch<React.SetStateAction<number | null>>,
    selectedItem: number | null,
}
const RenderItem = ({
    item,
    setVisible,
    visible,
    dispatch,
    createMode,
    index,
    setSelectedItem,
    selectedItem
}:renderProp)=>{
    
    const styles = StyleSheet.create({
        albumContainer :{
            flex:1,
            flexDirection:"row",
            marginBottom:5,
           
            height:rec/100*17,
            marginTop:10,
            
            backgroundColor:COLOR.BACKCOLOR
        },
        pressedContainer :{
            flex:1,
            flexDirection:"row",
            marginBottom:5,
           
            height:rec/100*17,
            marginTop:10,
            
            backgroundColor:COLOR.PRESS_ALBUM_GRAY
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
    const createOnPressAlbum =() =>{
        dispatch(setFeedMusic(item))
    }
    const isSelected = selectedItem === index;
   
    return(
        <Pressable style={[styles.albumContainer,isSelected&&styles.pressedContainer]}
        onPressOut={() => {
            setSelectedItem(index === selectedItem ? null : index);
          }}
            onPress={createMode?createOnPressAlbum:onPressAlbum}>
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
    setVisible:any,
    createMode:boolean,
    selectedItem:number|null,
    setSelectedItem:any
}
export default function SearchedArtist({
    visible,
    setVisible,
    createMode,
    selectedItem,
    setSelectedItem}:props){
    
    const data = useSelector((state:RootReducerState)=>state.music.state)
    const dispatch = useDispatch();
   
    return(
        // 음악 검색 결과
        <View style={{flex:1}}>
            <FlatList
            data={data}
            renderItem={({item,index}) => <RenderItem
            index={index}
            item={item}
            visible={visible} 
            setVisible={setVisible}
            dispatch = {dispatch}
            createMode ={createMode}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            />}
            keyExtractor={(item,i)=>`${i}`
        }
            />

        </View>
    )
}


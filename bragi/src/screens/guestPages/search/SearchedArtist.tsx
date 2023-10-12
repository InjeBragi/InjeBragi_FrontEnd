import { Dimensions, FlatList, Image, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootReducerState } from "../../../components/redux/store/store";
import { useEffect } from "react";
import { album } from "../../../@types/dataType";
import { COLOR } from "../../../colors/Colors";

const rec = Dimensions.get('screen').width-40
const RenderItem = ({item}:{item:album})=>{
    useEffect(()=>{
        console.log(item.imageUrl)
    })
    
    return(
        <View style={styles.albumContainer}>
            <View style={{width:"17%"}}>
            <Image style={styles.albumImage} source={{uri:item.imageUrl}} resizeMethod="auto"/>
            </View>
            
            <View style={{width:"80%" ,paddingLeft:10}}>
            <Text style={styles.albumText}>{item.albumName}</Text>
            <Text style={styles.artistText}>{item.artistName}</Text>
            
            </View>
            
        </View>
    )
}
export default function SearchedArtist(){
    const data = useSelector((state:RootReducerState)=>state.music.state)
    return(
        <View style={{flex:1}}>
            <FlatList
            data={data}
            renderItem={({item}) => <RenderItem item={item} />}
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
import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { COLOR } from '../../../colors/Colors'
import Header from '../../../components/Header/Header'
import MusicInput from '../../../components/input/MusicInput'
import SearchedArtist from './SearchedArtist'
import FloatingMusicView from './FloatingMusicView'
export default function SearchMusicPage(){
    const [visible,setVisible] = useState<boolean>(false)
    return(
        <View style={styles.container}>
            <Header title='검색' iconName='search' onPress={()=>{}}/>
            <MusicInput/>
            <View style={{borderWidth:0.3,borderColor:COLOR.SEPARATE_LINE}}/>
            <SearchedArtist visible={visible} setVisible={setVisible}/>
            {visible?<FloatingMusicView/>:null}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.BACKCOLOR,
        padding:20
    },
})
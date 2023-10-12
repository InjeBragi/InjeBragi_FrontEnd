import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { COLOR } from '../../../colors/Colors'
import Header from '../../../components/Header/Header'
import MusicInput from '../../../components/input/MusicInput'
import SearchedArtist from './SearchedArtist'
export default function SearchMusicPage(){
    return(
        <View style={styles.container}>
            <Header title='검색' iconName='icon'/>
            <MusicInput/>
            <View style={{borderWidth:0.3,borderColor:COLOR.SEPARATE_LINE}}/>
            <SearchedArtist/>
            
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
import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { COLOR } from '../../../colors/Colors'
import Header from '../../../components/Header/Header'
import MusicInput from '../../../components/input/MusicInput'
import SearchedArtist from './SearchedArtist'
import FloatingMusicView from './FloatingMusicView'
export default function SearchMusicPage(){
    const [visible,setVisible] = useState<boolean>(false)
    const [selectedItem,setSelectedItem] = useState(null)
    return(
        <View style={styles.container}>
            <Header title='검색' leftIconName={null} rightIconName='search' onPressRight={()=>{}} onPressLeft={()=>{}}/>
            <MusicInput/>
            <View style={{borderWidth:0.3,borderColor:COLOR.SEPARATE_LINE}}/>
            <SearchedArtist 
                visible={visible}
                setVisible={setVisible}
                createMode={false} 
                selectedItem={selectedItem} 
                setSelectedItem={setSelectedItem}/>
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
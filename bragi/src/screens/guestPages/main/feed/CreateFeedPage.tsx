import React,{useState} from 'react'
import {View,Pressable,Text,StyleSheet} from 'react-native'
import { useRootNavigation } from '../../../../navigations/StackNavigation'
import { COLOR } from '../../../../colors/Colors'
import Header from '../../../../components/Header/Header'
import SearchedArtist from '../../search/SearchedArtist'
import MusicInput from '../../../../components/input/MusicInput'
import { useSelector } from 'react-redux'
export default function CreateFeedPage(){

    const [selectedItem,setSelectedItem] = useState(null)
    const navigation = useRootNavigation()
    const isNext = useSelector((state)=>state.feedCreate.music)
   
    const onPressCreateFeed = () => {
       navigation.pop()
    }
    const onPressCloseIcon = () => {
        navigation.pop()
     }

     const onPressNext = () => {
        
        if(typeof isNext=='object'){
            setSelectedItem(null)
            navigation.navigate('CreateFeedContentPage')
        }
        
     }
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:COLOR.BACKCOLOR,
            padding:20
        }
    })
    return(
        <View style={styles.container}>
            <Header 
            title='게시물 작성' 
            leftIconName='close-sharp'
            rightIconName={'다음'} 
            onPressLeft={onPressCloseIcon} 
            onPressRight={onPressNext}/>
            <View style={{borderWidth:0.3,borderColor:COLOR.SEPARATE_LINE}}/>
            <MusicInput/>
            <SearchedArtist 
            visible={false} 
            setVisible={null} 
            createMode={true} 
            selectedItem={selectedItem} 
            setSelectedItem={setSelectedItem}/>
            

        </View>
    )
   
}


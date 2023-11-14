import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { COLOR } from '../../../colors/Colors'
import Header from '../../../components/Header/Header'
import { useRootNavigation } from '../../../navigations/StackNavigation'
export default function MainPage(){
   const navigation = useRootNavigation()
   const onPressCreateFeed = () => {
      navigation.navigate('CreateFeed')
   }
   return (
    <View style={styles.container}>
     <Header title='BRAGI' rightIconName='create-outline' onPressRight={onPressCreateFeed} leftIconName={null} onPressLeft={()=>{}} key={''}/>
    </View>
   )    
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:COLOR.BACKCOLOR,
      padding:20
   }   

})
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MainPage from "../screens/guestPages/MainPage";
import SearchMusicPage from "../screens/guestPages/search/SearchMusicPage";
import DetailPage from "../screens/guestPages/detail/DetailPage";
import UploadPage from "../screens/guestPages/upload/UploadPage";
import Icon from 'react-native-vector-icons/Octicons'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
export type RootTabParamLst = {
    Main:undefined,
    Detail:undefined,
    Search:undefined,
    Uploads:undefined
}
const Tab = createBottomTabNavigator<RootTabParamLst>()
export default function TabNavigation(){
    return(
     
        <Tab.Navigator initialRouteName="Main" 
            screenOptions={{
                headerShown:false,
               tabBarIconStyle:{color:'white'},
                tabBarStyle:{borderWidth:1,backgroundColor:'black'}
            
            
            
        }}
            
        >
            <Tab.Screen options={{
                
                tabBarIcon:({focused})=>{
                return(
                    <Icon style={{color:focused?'white':"white"}}name="home" size={20}/>
                )
            }}} name="Main" component={MainPage}/>
            <Tab.Screen options={{tabBarIcon:({focused})=>{
                return(
                    <IonIcons style={{color:focused?'white':"white"}}name="search" size={20}/>
                )
            }}} name="Search" component={SearchMusicPage}/>
            <Tab.Screen options={{tabBarIcon:({focused})=>{
                return(
                    <IonIcons style={{color:focused?'white':"white"}}name="headset" size={20}/>
                )
            }}} name="Uploads" component={UploadPage}/>
            <Tab.Screen options={{tabBarIcon:({focused})=>{
                return(
                    <Feather style={{color:focused?'white':"white"}}name="user" size={20}/>
                )
            }
            }} name="Detail" component={DetailPage}/>
            </Tab.Navigator>
        
    )
}
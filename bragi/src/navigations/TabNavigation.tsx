import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MainPage from "../screens/guestPages/MainPage";
import SearchMusicPage from "../screens/guestPages/search/SearchMusicPage";
import DetailPage from "../screens/guestPages/detail/DetailPage";
import UploadPage from "../screens/guestPages/upload/UploadPage";

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
            screenOptions={{headerShown:false}}
        >
            <Tab.Screen name="Main" component={MainPage}/>
            <Tab.Screen name="Search" component={SearchMusicPage}/>
            <Tab.Screen name="Uploads" component={UploadPage}/>
            <Tab.Screen name="Detail" component={DetailPage}/>
            </Tab.Navigator>
        
    )
}
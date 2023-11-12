import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import Landing from "../screens/Landing";
import SignInPage from "../screens/sign/signin/SignInPage";
import SignUpBrith from "../screens/sign/signup/SignUpBirth";
import SignUpId from "../screens/sign/signup/SignUpId";
import SignUpImage from "../screens/sign/signup/SignUpImage";
import SignUpName from "../screens/sign/signup/SignUpName";
import SignUpPw from "../screens/sign/signup/SignUpPw";
import MainPage from "../screens/guestPages/MainPage";
import TabNavigation from "./TabNavigation";
import DetailFixPage from "../screens/guestPages/detail/DetailFixPage";

export type RootStackParamList ={
    Landing:undefined,
    SignUpPw:undefined,
    SignUpBirth:undefined,
    SignUpName:undefined,
    SignUpImage:undefined,
    SignUpId:undefined,
    SignIn:undefined,
    Main:undefined,
    Bottom:undefined,
    UserFix:undefined

}
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function StackNavigation(){
    
    return(
        <Stack.Navigator 
            screenOptions={{
            headerShown:false
            }}
            initialRouteName="Landing">
            <Stack.Screen name="Landing" component={Landing}/>
            <Stack.Screen name="SignUpPw" component={SignUpPw}/>
            <Stack.Screen name="SignUpId" component={SignUpId}/>
            <Stack.Screen name="SignUpBirth" component={SignUpBrith}/>
            <Stack.Screen name="SignUpName" component={SignUpName}/>
            <Stack.Screen name="SignUpImage" component={SignUpImage}/>
            <Stack.Screen name="SignIn" component={SignInPage}/>
            
            <Stack.Screen name="Bottom" component={TabNavigation}/>
            <Stack.Screen name="UserFix" component={DetailFixPage} options={{
                animation:"slide_from_bottom"
            }}/>
            
        </Stack.Navigator>
    )
}

export const useRootNavigation = <RouteName extends keyof RootStackParamList> () =>{
    return useNavigation<NativeStackNavigationProp<RootStackParamList,RouteName>>()
}
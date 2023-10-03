import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import Landing from "../screens/Landing";
import SignUpBrith from "../screens/sign/SignUpBirth";
import SignUpId from "../screens/sign/SignUpId";
import SignUpImage from "../screens/sign/SignUpImage";
import SignUpName from "../screens/sign/SignUpName";
import SignUpPw from "../screens/sign/SignUpPw";
export type RootStackParamList ={
    Landing:undefined,
    SignUpPw:undefined,
    SignUpBirth:undefined,
    SignUpName:undefined,
    SignUpImage:undefined,
    SignUpId:undefined

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

        </Stack.Navigator>
    )
}

export const useRootNavigation = <RouteName extends keyof RootStackParamList> () =>{
    return useNavigation<NativeStackNavigationProp<RootStackParamList,RouteName>>()
}
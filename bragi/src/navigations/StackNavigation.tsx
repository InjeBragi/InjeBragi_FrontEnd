import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Landing from "../screens/Landing";
export type RootStackParamList ={
    Landing:undefined,
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
        </Stack.Navigator>
    )
}
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/Landing";
import SignInPage from "../screens/sign/signin/SignInPage";
import SignUpBrith from "../screens/sign/signup/SignUpBirth";
import SignUpId from "../screens/sign/signup/SignUpId";
import SignUpImage from "../screens/sign/signup/SignUpImage";
import SignUpName from "../screens/sign/signup/SignUpName";
import SignUpPw from "../screens/sign/signup/SignUpPw";
import { RootStackParamList } from "./StackNavigation";


export default function StackLog ({Stack}:any){
    
    
    return(
        <>
             <Stack.Screen name="Landing" component={Landing}/>
            <Stack.Screen name="SignUpPw" component={SignUpPw}/>
            <Stack.Screen name="SignUpId" component={SignUpId}/>
            <Stack.Screen name="SignUpBirth" component={SignUpBrith}/>
            <Stack.Screen name="SignUpName" component={SignUpName}/>
            <Stack.Screen name="SignUpImage" component={SignUpImage}/>
            <Stack.Screen name="SignIn" component={SignInPage}/>
            
        </>
    )
}
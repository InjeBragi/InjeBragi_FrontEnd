import { Image, ImageSourcePropType, ImageURISource, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "../colors/Colors";
import LogButton from "../components/LogButton";
import { useRootNavigation } from "../navigations/StackNavigation";
import img from '../assets/logoMain.png'
export default function Landing(){
    const MainLogo:ImageSourcePropType = img
    
    const navigation = useRootNavigation()
    const onPressSignUp=()=>{
        navigation.navigate('SignUpId')
    }
    const onPressSignIn=()=>{
        navigation.navigate('SignIn')
    }
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                {/*logo*/}
                <Image style={styles.logo} source={img}/>
            </View>
            <View style={styles.buttonContainer}>
                {/*btn*/}
                <LogButton title="회원가입 하기" onPress={onPressSignUp} icon={img}/>
                <LogButton title="외부 로그인" onPress={()=>{}} icon={img}/>
                <LogButton title="로그인" onPress={onPressSignIn} icon={img}/>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.BACKCOLOR
    },
    logoContainer:{
        flex:0.6,
        
        alignItems:"center",
        justifyContent:"center"
    },
    logo:{
        width:'70%',
        height:'90%',
        
    },
    buttonContainer:{
        flex:0.4,
        alignItems:"center",
        justifyContent:"center"
    }
})
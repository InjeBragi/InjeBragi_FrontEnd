import { Image, ImageSourcePropType, ImageURISource, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "../colors/Colors";
import LogButton from "../components/LogButton";
import { useRootNavigation } from "../navigations/StackNavigation";

export default function Landing(){
    const logoPath:string= "/Users/kjm/Projects/캡스톤/InjeBragi_FrontEnd/bragi/src/assets/logoMain.png"
    const navigation = useRootNavigation()
    const onPress=()=>{
        navigation.navigate('SignUpPw')
    }
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                {/*logo*/}
                <Image style={styles.logo} source={{uri:logoPath}}/>
            </View>
            <View style={styles.buttonContainer}>
                {/*btn*/}
                <LogButton title="회원가입 하기" onPress={onPress} icon={logoPath}/>
                <LogButton title="외부 로그인" onPress={()=>{}} icon={logoPath}/>
                <LogButton title="로그인" onPress={()=>{}} icon={logoPath}/>
                
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
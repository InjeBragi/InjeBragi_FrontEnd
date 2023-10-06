import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLOR } from "../../../colors/Colors";
import LogHeader from "../../../components/LogHeader";
import SignUpInput from "../../../components/SignUpInput";
import { useLog } from "../../../hooks/useLog";
import { useRootNavigation } from "../../../navigations/StackNavigation";
const titleSize = 24
export default function SignUpPw() {
    const navigation = useRootNavigation();
    const onPressSignUpBirth=()=>{
        navigation.navigate('SignUpBirth')
    }
    return (
        <View style={styles.container}>
            <LogHeader title="계정 만들기"/>
            <View style={styles.content}>
                <Text style={styles.titleText}>PW를 입력해주세요</Text>
                <SignUpInput value="PW" onPress={onPressSignUpBirth} title="다음" uri=""/>
                
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.BACKCOLOR
    },
    

    titleText:{
        fontSize:titleSize,
        color:COLOR.FONTCOLOR_WHITE,
        marginBottom:10
    },
    content: {
        padding:20,
        flex: 1,
        //borderWidth: 1,
        //borderColor: 'red'
    },
    
})
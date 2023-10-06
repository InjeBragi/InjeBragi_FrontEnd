import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLOR } from "../../../colors/Colors";
import ImagePicker from "../../../components/ImagePicker";
import LogHeader from "../../../components/LogHeader";
import SignUpInput from "../../../components/SignUpInput";
import { useLog } from "../../../hooks/useLog";
import { useRootNavigation } from "../../../navigations/StackNavigation";
const titleSize = 24
export default function SignUpImage() {
    
   
    return (
        <View style={styles.container}>
            <LogHeader title="계정 만들기"/>
            <View style={styles.content}>
            <Text style={styles.titleText}>프로필 이미지를 선택해주세요</Text>
                <ImagePicker/>
                
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
        alignSelf:"center",
        fontSize:titleSize,
        color:COLOR.FONTCOLOR_WHITE,
        marginBottom:50
    },
    content: {
        
        padding:20,
        flex: 1,
        //borderWidth: 1,
        //borderColor: 'red'
    },
    
})
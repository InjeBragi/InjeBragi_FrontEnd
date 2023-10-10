import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { COLOR } from "../../../colors/Colors";
import LogButton from "../../../components/LogButton";
import LogHeader from "../../../components/LogHeader";
import SignUpInput from "../../../components/SignUpInput";
import { useLog } from "../../../hooks/useLog";
import { useRootNavigation } from "../../../navigations/StackNavigation";

type inputType={
    title:string,
    text:string,
    setText:React.Dispatch<React.SetStateAction<string>>
}
const InputSignIn = ({title,text,setText}:inputType)=>{
    return(
        <TextInput style={styles.inputBox}
                    placeholder={title}
                    placeholderTextColor={COLOR.PLACEHOLDER_WHITE}
                    value={text}
                    secureTextEntry={title=='pw'?true:false}
                    onChangeText={(value)=>{setText(value)}}/>
    )
}
export default function SignInPage(){
    const [id,setId] = useState<string>('')
    const [pw,setPw] = useState<string>('')
    const [visible,setVisible] = useState<boolean>(false)
    const navigation = useRootNavigation()
    const {onPressLogin} = useLog()
    const onPress = () =>{
        if(onPressLogin({id,pw})){
            navigation.navigate('Main')
        }
        else{
            setPw('')
            setVisible(true)
        }
    }
    useEffect(()=>{
        if(visible&&pw.length>1){
            setVisible(false)
        }
    },[pw])
    return(
        <View style={styles.container}>
            <LogHeader title="로그인"/>
            <View style={styles.content}>
                <Text style={styles.titleText}>ID를 입력해주세요</Text>
                <InputSignIn title="id" text={id} setText={setId}/>

                <Text style={styles.titleText}>PW를 입력해주세요</Text>
                <InputSignIn title="pw"text={pw} setText={setPw}/>
                {visible?<Text style={styles.errorText}>X 아이디 혹은 비밀번호를 확인해주세요</Text>:null}
                <View style={styles.buttonContainer}>
                    <Pressable 
                        style={styles.button}
                        onPress={()=>{onPress()}}>
                        <Text style={styles.buttonText}>로그인</Text>    
                    </Pressable>   
                </View>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.BACKCOLOR
    },
    content: {
        padding:20,
        flex: 1,
        //borderWidth: 1,
        //borderColor: 'red'
    },
    titleText:{
        fontSize:18,
        color:COLOR.FONTCOLOR_WHITE,
        marginBottom:10,
    },
    inputBox:{
        borderWidth:1,
        width:"100%",
        height:60,
        backgroundColor:COLOR.INPUTBOX_GRAY,
        borderRadius:10,
        padding:10,
        justifyContent:"center",
        fontSize:16,
        color:COLOR.FONTCOLOR_WHITE,
        marginBottom:30
    },
    button:{
        alignItems:"center",
        width:'40%',
        height:50,
        justifyContent:"center",
        borderRadius:25,
        backgroundColor:COLOR.MAIN_COLOR_GREEN
    },
    buttonText:{
        fontSize:22,
        color:COLOR.BACKCOLOR,
        fontWeight:"bold"
    },
    buttonContainer: {
        flex: 0.1,
        alignItems:"center",
        justifyContent:"center",
        
        marginTop:40
    },
    errorText:{
        fontSize:16,
        color:COLOR.ERROR_RED,
        fontWeight:"bold"
    }
})
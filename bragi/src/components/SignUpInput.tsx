import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { COLOR } from "../colors/Colors";
import { useLog } from "../hooks/useLog";

type InputProps={
    onPress:()=>void|null,
    title:string,
    value:string,
    uri:string
}
export default function SignUpInput({onPress,title,value,uri}:InputProps){
    const [text,setText] = useState<string>('')
    const {
        setAccount,
        setAge,
        setPw,
        setName,
        setImage,
        
        
    }=useLog()
    const setValue = () =>{
        if(value == 'PW') return setPw(text);
        else if(value == 'BIRTH') return setAge(text);
        else if(value == 'ID') return setAccount(text);
        else if(value =='NAME') return setName(text);
        else if(value == 'IMAGE') return setImage(uri)
    }
    return(
        <>
        {title=='완료'?null:
        <TextInput style={styles.inputBox}
            value={text}
            onChangeText={(value)=>{setText(value)}}
        />}
        <View style={styles.buttonContainer}>
                <Pressable 
                style={styles.button}
                onPress={()=>{
                    setValue()
                    onPress()}}>
                <Text style={styles.buttonText}>{title}</Text>
            </Pressable>    
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputBox:{
        borderWidth:1,
        width:"100%",
        height:60,
        backgroundColor:COLOR.INPUTBOX_GRAY,
        borderRadius:10,
        padding:10,
        justifyContent:"center",
        fontSize:18,
        color:COLOR.FONTCOLOR_WHITE
    },
    buttonContainer: {
        flex: 0.1,
        alignItems:"center",
        justifyContent:"center",
        
        marginTop:40
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
})
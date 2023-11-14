import { useState,useEffect } from "react";
import { Image, Pressable, StyleSheet, Text,Dimensions } from "react-native";
import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import { COLOR } from "../../colors/Colors";
import { useRootNavigation } from "../../navigations/StackNavigation";
import SignUpInput from "../SignUpInput";
import { client } from "../../services/client";
import { useDispatch, useSelector } from "react-redux";
import { setImagePath } from "../redux/action/actionLogin";
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

type props = {
    canChange:boolean,
    defaultImage:string,
 
   

}
export default function ImagePicker({canChange,defaultImage}:props){
    const [photo, setPhoto] = useState<string>(defaultImage)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('loadPhoto',photo)
    })
    const pickImage = async () => {
        console.log('open photo ==========', photo)
        await launchImageLibrary({
            mediaType: "photo",
            includeBase64:true
        }).then((result:ImagePickerResponse|any)=>{
            if(result!=undefined){
                const localUri = result.assets[0].uri;
                
                const uriPath = localUri.split("//").pop();
                const imageName = localUri.split("/").pop();
                setPhoto(localUri)
                console.log('set localurl ==========',localUri)
                console.log('set uriPath ==========',uriPath)
                console.log('set Name ==========',imageName)
                console.log('set Name ==========',result.assets[0].base64)
                
                const data={
                    base64:result.assets[0].base64,
                    path:localUri,
                    name:imageName
                }
                dispatch(setImagePath(data))
            }
          else{
            console.log('err')
          }
            
        })
    }

    const navigation = useRootNavigation();
    const onPressClear=()=>{
        navigation.navigate('Landing')
    }
    const PressableText = () => {
        return (
            <Pressable style={styles.textContainer}
                onPress={pickImage}
            >
                <Text style={{color:COLOR.FIX_FONT_BLUE}}>프로필 사진 변경</Text>
            </Pressable>
        )
    }
    return(
        <>
        <Pressable style={styles.imageContainer}
            disabled={canChange?false:true}
            onPress={()=>{pickImage()}}>
            <Image 
                style={styles.image}
                source={{uri:photo}}/>
        </Pressable>
        {canChange?
        <PressableText/>:
        <SignUpInput value="IMAGE" onPress={onPressClear} title="완료"/>
            
    }
        </>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        alignSelf:"center",
        width:'60%',
        height:'35%',
        borderRadius:width*height*0.5,
        backgroundColor:COLOR.INPUTBOX_GRAY,
        marginBottom:20
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:200,
    },
    textContainer:{
        flex:1,
        alignContent:"center"
    }
})
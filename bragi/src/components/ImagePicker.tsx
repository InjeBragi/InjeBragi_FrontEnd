import { useState } from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import {ImageLibraryOptions, ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import { COLOR } from "../colors/Colors";
import { useRootNavigation } from "../navigations/StackNavigation";
import SignUpInput from "./SignUpInput";


export default function ImagePicker(){
    const [photo, setPhoto] = useState('')
    
    const pickImage = async () => {
        const result:ImagePickerResponse|any = await launchImageLibrary({
            mediaType: "photo"
        });
        if(result!=undefined){
            const localUri = result.assets[0].uri;
            const uriPath = localUri.split("//").pop();
            const imageName = localUri.split("/").pop();
            setPhoto("file://" + uriPath);
            console.log(photo)
        }
        
    }
    const navigation = useRootNavigation();
    const onPressClear=()=>{
        navigation.navigate('Landing')
    }
    return(
        <>
        <Pressable style={styles.imageContainer}
            onPress={()=>{pickImage()}}>
            <Image 
                style={styles.image}
                source={{uri:photo}}/>
        </Pressable>
        <SignUpInput value="IMAGE" onPress={onPressClear} title="완료" uri={photo}/>
        </>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        borderWidth:1,
        
        alignSelf:"center",
        width:'60%',
        height:'35%',
        borderRadius:200,
        backgroundColor:COLOR.INPUTBOX_GRAY,
        marginBottom:20
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:200,
    }
})
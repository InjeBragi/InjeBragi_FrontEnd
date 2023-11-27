import { useState,useEffect } from "react";
import { Image, Pressable, StyleSheet, Text,Dimensions } from "react-native";
import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import { COLOR } from "../../colors/Colors";
import { useRootNavigation } from "../../navigations/StackNavigation";
import SignUpInput from "../SignUpInput";
import { client } from "../../services/client";
import { useDispatch, useSelector } from "react-redux";
import { setImagePath } from "../redux/action/actionLogin";
import BottomSheet from '@gorhom/bottom-sheet'
import RNFS from 'react-native-fs';
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

type props = {
    canChange:boolean,
    defaultImage:string
}
export default function ImagePicker({canChange,defaultImage}:props){
    const [photo, setPhoto] = useState<string>('file:///data/user/0/com.bragi/cache/rn_image_picker_lib_temp_dc436171-4a16-45ce-8f38-2bd71dd51d8f.png')
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('loadPhoto',photo)
    },[photo])
    const pickImage = async () => {
        console.log('open photo ==========', photo)
        await launchImageLibrary({
            mediaType: "photo",
            
        }).then((result:ImagePickerResponse|any)=>{
            if(result!=undefined){
                const localUri = result.assets[0].uri;
                const base = result.assets[0].base64
                const uriPath = localUri.split("//").pop();
                const imageName = localUri.split("/").pop();
                setPhoto(localUri)
                 console.log('set localurl ==========',localUri)
                // console.log('set uriPath ==========',uriPath)
                // console.log('set Name ==========',imageName)
                // console.log('image data ==========',result.assets[0])
                
                const data=result
                console.log(data)
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
    const [imagePath, setIm] = useState('');
    const fetchImage = async () => {
        try {
          
            const filePath = `file:///data/user/0/`;
            const fileExists = await RNFS.exists(filePath);
            console.log('fileExist-------------------\n\n\n\n',fileExists)
            if(fileExists){
                setIm(imagePath)
            }
        }

        catch(error)
        {
         
        }
    }
    useEffect(() => {
        console.log('q\n\n\n\n\q')
     
        fetchImage()
    },[])
    return(
        <>
        <Pressable style={styles.imageContainer}
            disabled={canChange?false:true}
            onPress={()=>{pickImage()}}>
            <Image 
                style={styles.image}
                source={{uri:imagePath}}/>
            
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
        borderRadius:width*height*0.4,
        
        marginBottom:20
    },
    image:{
        alignSelf:"center",
        width:'90%',
        height:'100%',
        borderRadius:125,
    },
    textContainer:{
        flex:1,
        alignContent:"center"
    }
})
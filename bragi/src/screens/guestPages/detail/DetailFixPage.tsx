import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,Pressable,Image} from 'react-native'
import { useRootNavigation } from '../../../navigations/StackNavigation'
import ImagePicker from '../../../components/Image/ImagePicker'
import { COLOR } from '../../../colors/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducerState } from '../../../components/redux/store/store'
import { client } from '../../../services/client'
import { setImagePath } from '../../../components/redux/action/actionLogin'
export default function DetailFixPage(){
    const {POST_PROFILE_IMAGE} = client()
    const navigation = useRootNavigation()
    const signedUser = useSelector((state: RootReducerState) => state.login.state)
    const [imageUrl,setImageUrl] = useState<string>('')
    const path =useSelector((state: RootReducerState)=> state.path.path)
    const [fixed,setFixed] = useState(false)
    const dispatch = useDispatch() 
    useEffect(()=>{

        setImageUrl(signedUser.data.url)
        console.log('signedUser',signedUser)
        console.log('Imageurl',imageUrl)
    },[signedUser])

    useEffect(()=>{
        console.log(fixed)
        if(path!=undefined){
            setFixed(true)
        }
        
        console.log('path',path)
        console.log('path',path)
        
    },[path])

    
    const Header = () =>{
        const onPressCancel = () => {
           
            navigation.pop()
        }
        const onPressSubmit = () => {
            POST_PROFILE_IMAGE(path.name).then(()=>{
                navigation.pop()
            })
            setTimeout(()=>{
                dispatch(setImagePath(undefined))
                setFixed(false)
            },500)       
        }
        return (
            <View style={styles.header}>
                <Pressable onPress={onPressCancel}>
                    <Text style={styles.itemText}>취소</Text>
                </Pressable>
                    <Text style={styles.titleText}>프로필 편집</Text>
                <Pressable onPress={onPressSubmit}>
                    <Text style={styles.itemText}>완료</Text>
                </Pressable>
                
            </View>
        )
    }
    const UserImage = () => {
        return (
           <ImagePicker canChange={true} defaultImage={fixed?path.path:imageUrl} />
        )
    }
    return(
        <View style={styles.container}>
            <Header/>
            <UserImage/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLOR.BACKCOLOR
    },
    header:{
        flex:0.1,
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    titleText:{
        fontSize:18,
        color:COLOR.FONTCOLOR_WHITE,
    },
    itemText:{
        fontSize:18,
        color:COLOR.FONTCOLOR_WHITE,
    },
    image:{
       borderWidth:1,
       borderColor:'white',
        borderRadius:200,
    }
})
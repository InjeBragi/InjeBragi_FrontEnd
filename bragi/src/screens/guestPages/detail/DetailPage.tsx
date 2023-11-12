import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import Header from '../../../components/Header/Header'
import { COLOR } from '../../../colors/Colors'
import { useSelector } from 'react-redux'
import { RootReducerState } from '../../../components/redux/store/store'
import { useRootNavigation } from '../../../navigations/StackNavigation'



export default function DetailPage() {
    const signedUser = useSelector((state: RootReducerState) => state.login.state)
    const [imageUrl,setImageUrl] = useState<string>('')
    const navigation = useRootNavigation()
   
    useEffect(()=>{

        setImageUrl(signedUser.data.url)
        
    },[signedUser])
 
    const UserInfoHeader = () => {
        return (
            <View style={styles.userInfoHeaderContaner}>
                <View style={styles.imageContainer}>
                    <Image style={styles.userImage} 
                        source={{uri:imageUrl}}/>
                    
                </View>
                <View style={styles.borderW}>
                    <Text style={styles.infoText}>0</Text>
                    <Text style={styles.infoText}>게시물</Text>
                </View>
                <View style={styles.borderW}>
                    <Text style={styles.infoText}>0</Text>
                    <Text style={styles.infoText}>팔로워</Text>
                </View>
                <View style={styles.borderW}>
                    <Text style={styles.infoText}>0</Text>
                    <Text style={styles.infoText}>팔로잉</Text>
                </View>
            </View>
        )
    }
    const SettingUserButton = () =>{
        return(
            <Pressable style={styles.button}
                onPress={onPressProfileSetting}
            >
            <Text style={styles.fontColor}>프로필 편집</Text>
        </Pressable>
        )
    } 
    const onPressOption = () =>{

    }
    const onPressProfileSetting = () =>{
        navigation.navigate('UserFix')
    }
    const UserFeeds = ()=>{
        /*데이터 베이스를 통해 가져온 피드 사진 보여주기 */
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.fontColor}>게시물 없음</Text>
            </View>
        )
    }
   
    return (
        <View style={styles.container}>
            <Header iconName='list' title={signedUser.data.name} onPress={onPressOption} />
            <UserInfoHeader />
            <SettingUserButton/>
            <UserFeeds/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.BACKCOLOR,
        padding: 20
    },
    userInfoHeaderContaner: {
        flex: 0.2,
        flexDirection: 'row',

    },
    imageContainer: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userImage: {
        flex:1,
        width: 75,
        height: 75,
        backgroundColor: COLOR.INPUTBOX_GRAY,
        borderRadius: 75 * 0.5,
        resizeMode:'cover'
    },
    borderW: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoText: {
        color: COLOR.FONTCOLOR_WHITE,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    button:{
        marginLeft:5,
        marginTop:15,
        backgroundColor:COLOR.SEPARATE_LINE,
        alignItems:"center",
        justifyContent:"center",
        width:"50%",
        height:30,
        borderRadius:10,
    },
    fontColor:{
        //fontWeight:"bold",
        fontSize:15,
        color:COLOR.FONTCOLOR_WHITE
    }
})
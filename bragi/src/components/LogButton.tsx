import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native"
import { COLOR } from "../colors/Colors"

type Props = {
    title:string,
    onPress:()=>void,
    icon:string
}
export default function LogButton({title,onPress,icon}:Props){
    console.log(icon)
    return(
        <Pressable style={styles.button}
        onPress={()=>{onPress()}}>
            <View style={{position:"absolute"}}>
            <Image style={styles.icon} source={{uri:icon}}/>
            </View>
            <View style={styles.textContiner}>
            <Text style={styles.buttonFont}>{title}</Text>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button:{
        borderWidth:1,
        borderColor:'white',
        height:50,
        width:'80%',
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,
        flexDirection:"row",
        borderRadius:20
    },
    textContiner:{
        flex:1,
        alignItems:"center",
    },
    buttonFont:{
        color:COLOR.FONTCOLOR_WHITE,
        fontSize:24
    },
    icon:{
        width:50,
        height:50
    }
})
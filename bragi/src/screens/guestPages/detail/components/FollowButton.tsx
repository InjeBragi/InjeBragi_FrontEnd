import { Pressable, StyleSheet, Text } from "react-native";
import { COLOR } from "../../../../colors/Colors";

export default function FollowButton(){
    return(
        <Pressable style={styles.button}>
            <Text style={styles.fontColor}>팔로우</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button:{
        marginLeft:5,
        marginTop:15,
        backgroundColor:COLOR.MAIN_COLOR_GREEN,
        alignItems:"center",
        justifyContent:"center",
        width:"30%",
        height:30
    },
    fontColor:{
        fontWeight:"bold",
        fontSize:15,
        color:COLOR.FOLLOWBUTTON_GRAY
    }
})
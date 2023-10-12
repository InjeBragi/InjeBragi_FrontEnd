import { StyleSheet, Text, View } from "react-native"
import { COLOR } from "../../colors/Colors"

type headerProps={
    title:string
}
export default function LogHeader({title}:headerProps){
    return(
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    titleContainer:{
        alignItems:"center",
        marginBottom:30
    },
    titleText:{
        fontWeight:"bold",
        fontSize:17,
        color:COLOR.FONTCOLOR_WHITE
    }
})
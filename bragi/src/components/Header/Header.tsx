import { StyleSheet, Text, View } from "react-native"
import { COLOR } from "../../colors/Colors"

export type HeaderProps = {
    title:string,
    iconName:string
}
export default function Header({title,iconName}:HeaderProps){
    return(
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.titleText}>{iconName}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    titleContainer:{
        
        justifyContent:"space-between",
        flexDirection:"row",
        marginBottom:30
    },
    titleText:{
        fontWeight:"bold",
        fontSize:17,
        color:COLOR.FONTCOLOR_WHITE
    }
})
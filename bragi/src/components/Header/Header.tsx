import { StyleSheet, Text, View } from "react-native"
import { COLOR } from "../../colors/Colors"
import Icon from 'react-native-vector-icons/Ionicons'
export type HeaderProps = {
    title:string,
    iconName:string,
    onPress:()=>void
}
export default function Header({title,iconName,onPress}:HeaderProps){
    return(
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Icon name={iconName}  size={18} color={'white'}/>
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
import { StyleSheet, Text, View, Pressable } from "react-native"
import { COLOR } from "../../colors/Colors"
import Icon from 'react-native-vector-icons/Ionicons'
export type HeaderProps = {
    title:string,
    leftIconName:any,
    rightIconName:any,
    onPressLeft:()=>void
    onPressRight:()=>void
}
export default function Header({title,leftIconName,rightIconName,onPressLeft,onPressRight}:HeaderProps){
    return (
      <View style={styles.titleContainer}>
        {leftIconName ? (
          <>
            <Pressable onPress={onPressLeft}>
              <Icon name={leftIconName} size={18} color={'white'} />
            </Pressable>
            <Text style={styles.titleText}>{title}</Text>
            <Pressable onPress={onPressRight}>
              {rightIconName == '다음'||'공유' ? (
                <Text style={styles.nextText}>{rightIconName}</Text>
              ) : (
                <Icon name={rightIconName} size={18} color={'white'} />
              )}
            </Pressable>
          </>
        ) : (
          <>
            <Text style={styles.titleText}>{title}</Text>
            <Pressable onPress={onPressRight}>
              {rightIconName == '다음' ? (
                <Text style={styles.nextText}>다음</Text>
              ) : (
                <Icon name={rightIconName} size={18} color={'white'} />
              )}
            </Pressable>
          </>
        )}
      </View>
    );
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
    },
    nextText:{
        fontSize:16,
        color:COLOR.FIX_FONT_BLUE
    }
})
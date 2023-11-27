
import React,{useMemo,useCallback,useRef,useState} from 'react'
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Text,View,TextInput,Image,Pressable,KeyboardAvoidingView,FlatList,Dimensions } from "react-native";
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { BottomSheetProvider } from '@gorhom/bottom-sheet/lib/typescript/contexts';
import { COLOR } from '../../../../colors/Colors';
import { useSelector } from 'react-redux';
import { RootReducerState } from '../../../../components/redux/store/store';
const height = Dimensions.get("screen").height
export default  function CommentPage(){
    const [text,setText] = useState('')
    const signedUser = useSelector((state: RootReducerState) => state.login.state)
    
   
   
    //signedUser.data.url
    return(
        <View style={{height:85}}>
            {/* 헤더뷰 */}
            {/* 
            */}
        <KeyboardAvoidingView style={{
           position:'absolute',
            flexDirection:'row',
            width:"100%",
            borderTopWidth:0.7,
            borderColor:COLOR.SEPARATE_LINE,
            height:75,
            flex:0.1,
            bottom:10
            }}>
                <View style={{width:"18%",
                alignItems:'center',
                justifyContent:'center',
                }}>
                <Image 
                style={{height:50,width:50,borderRadius:25}}
            source={{uri:
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QA4RXhpZgAASUkqAAgAAAABAJiCAgAWAAAAGgAAAAAAAABFZHVhcmRvIE1hcmlhbm8gUml2ZXJv/+0AYlBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAABGHAJQAAllZHVyaXZlcm8cAnQAFkVkdWFyZG8gTWFyaWFubyBSaXZlcm8cAm4AGEdldHR5IEltYWdlcy9pU3RvY2twaG90b//hBMpodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgZGM6UmlnaHRzPSJFZHVhcmRvIE1hcmlhbm8gUml2ZXJvIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG8iIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSIxMTkxMjk0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'
            }}/>
                </View>
            <View
             style={{width:"70%",justifyContent:'center',marginRight:10}}>
            <TextInput
            style={{borderWidth:0.7,
                borderColor:COLOR.
                SEPARATE_LINE,
                borderRadius:20,
                height:50,
                paddingLeft:10,
                color:COLOR.FONTCOLOR_WHITE
            }}
                value={text}
                onChangeText={(value)=>{setText(value)}}
                placeholder='답글 달기'
                placeholderTextColor={COLOR.SEPARATE_LINE}
            />
            </View>
           
            <Pressable style={{width:"9%",justifyContent:'center'}}>
            <Text style={{color:COLOR.FIX_FONT_BLUE}}>게시</Text>
            </Pressable>
        </KeyboardAvoidingView>
        </View>       
    )

}
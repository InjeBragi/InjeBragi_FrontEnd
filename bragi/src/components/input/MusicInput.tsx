import { useCallback, useEffect, useState } from "react";
import { TextInput } from "react-native";
import { client } from "../../services/client";
import { COLOR } from "../../colors/Colors";
import {useDispatch} from 'react-redux'
import { searchMusicOnPage } from "../redux/action/actionMusic";
export default function MusicInput(){
    const {SPOTIFY_SEARCH_GET} = client()
    const [text,setText] = useState<string>('')
    
    const dispatch = useDispatch()
    const onSubmitText = () => {
        SPOTIFY_SEARCH_GET(text).then(
            (result:object|any)=>{dispatch(searchMusicOnPage(result))}
        )
        
    }
   
    return(
        <>
            <TextInput
                style={{
                    backgroundColor:COLOR.FONTCOLOR_WHITE,
                    color:COLOR.BACKCOLOR,
                    fontSize:16,
                    fontWeight:"bold",
                    width:"100%",
                    borderRadius:10,
                    marginBottom:30
                }}
                value={text}
                onChangeText={(value)=>{setText(value)}}
                onSubmitEditing={()=>{onSubmitText()}}
                placeholder="어떤 것을 듣고 싶나요?"
            />
            
        </>
    )
}

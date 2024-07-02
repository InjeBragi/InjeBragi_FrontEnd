import { Dimensions, FlatList, Image, PanResponder, StyleSheet, Text, View } from "react-native";
import Icon  from "react-native-vector-icons/Ionicons";
import { COLOR } from "../../colors/Colors";
import { useRef } from "react";


export default function Feed(){
    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height
    const panAnim = PanResponder.create({
        
    })
    const testFeedData =
      [
         {
            name:'test1',
            musicArtist:'iu',
            musicTitle:'블루밍',
            musicUrl:'https://p.scdn.co/mp3-preview/ccd524ffc8fe8f2e2972bfe2641a8347966da478?cid=c891f91da33b4f0a92c46e9e759d2ce9',
            musicImage:'data:image/jpeg;base64,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',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8pLbduZee9G1VbuE6o0DY2dJiXrvVRpTbA&usqp=CAU',
            contentText:'브라기 브라기오사우르스',
            goodCount:50

         },
         {
            name:'test1',
            musicArtist:'iu',
            musicTitle:'블루밍',
            musicUrl:'https://p.scdn.co/mp3-preview/ccd524ffc8fe8f2e2972bfe2641a8347966da478?cid=c891f91da33b4f0a92c46e9e759d2ce9',
            musicImage:'data:image/jpeg;base64,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',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8pLbduZee9G1VbuE6o0DY2dJiXrvVRpTbA&usqp=CAU',
            contentText:'브라기 브라자',
            goodCount:50

         }
      ]
      console.log(testFeedData[0].image)
      const FeedCard = () =>{
        return(
            <View style={{height:height*0.76}}>
                <View style={{flex:0.08,marginBottom:10,flexDirection:"row"}}>
                    {/* title */}
                    <View style={styles.feedUserImageBox}>
                        <Image style={styles.feedUserImage}source={{uri:testFeedData[0].image}}/>
                    </View>
                    <View style={styles.feedUserInfoBox}>
                        <Text style={styles.textWhite}>{testFeedData[0].name}</Text>
                        <View style={{flexDirection:"row"}}>
                            {/* music info */}
                            <Icon style={{alignSelf:"center",marginRight:5}} name="musical-notes-outline" size={13} color={'white'}/>
                            <Text style={styles.textGray}>{testFeedData[0].musicArtist} -</Text>
                            <Text style={styles.textGray}>{testFeedData[0].musicTitle}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:0.72}}>
                    {/* content */}
                    <Image style={styles.contentImage} source={{uri:testFeedData[0].musicImage}}/>
                </View>
                <View style={{flex:0.2}}>
                    {/* footer */}
                    <View style={{flexDirection:"row"}}>
                        <Icon style={{marginRight:10}}name="heart-outline" color={"white"} size={25}></Icon>
                        <Icon name="chatbubble-outline" color={"white"} size={25}></Icon>
                    </View>
                    <View>
                        <Text style={styles.contentText}>좋아요 {testFeedData[0].goodCount} 개</Text>
                        <Text style={styles.contentText}>
                        {testFeedData[0].contentText}
                        </Text>
                    </View>
                </View>
                
            </View>
        )
      }
    return(
        <View style={{flex:1}}>
           
        </View>
    )
}
const styles=StyleSheet.create({
    feedUserImageBox:{
        flex:0.15,
        width:'100%',
        height:'100%',
        borderRadius:25,
        
    },
    feedUserImage:{
        width:'100%',
        height:'100%',
        borderRadius:25
    },
    feedUserInfoBox:{
        flex:0.75,
        
        paddingLeft:15
    },
    textWhite:{
        fontSize:16,
        color:'white'
    },
    textGray:{
        
        fontSize:13,
        color:COLOR.FONTCOLOR_WHITE,
        marginRight:5
    },
    contentImage:{
        width:'100%',
        height:'100%'
    },
    contentText:{
        fontSize:14,
        color:'white'
    }
})
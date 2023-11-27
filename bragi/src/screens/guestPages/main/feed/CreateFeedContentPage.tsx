import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useRootNavigation} from '../../../../navigations/StackNavigation';
import {COLOR} from '../../../../colors/Colors';
import Header from '../../../../components/Header/Header';
import {setFeedMusic} from '../../../../components/redux/action/actionFeedCreate';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { RootReducerState } from '../../../../components/redux/store/store';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function CreateFeedContentPage() {
  const [text, setText] = useState<string>('');

  const musicData = useSelector((state:RootReducerState) => state.feedCreate.music);
  const navigation = useRootNavigation();
  const dispatch = useDispatch();

  console.log(width, height);
  console.log(musicData);

  const onPressCalncel = () => {
    dispatch(setFeedMusic(''));
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Header
        leftIconName={'chevron-back-sharp'}
        onPressLeft={onPressCalncel}
        onPressRight={() => {}}
        rightIconName={'공유'}
        title="게시물 작성"
      />
      <View style={styles.containerTop}>
        <Swiper style={{}} index={0}>
            
            <View style={styles.slider}>
            <Image style={styles.musicImage} source={{uri: musicData.imageUrl}} /> 
            </View>
            <View style={styles.slider}>
                <></>
            </View>
        </Swiper>
        
      </View>
      <View style={styles.containerBottom}>
        <View
          style={{
            width: width * 0.9,
            height: (height / 2) * 0.5,
            marginTop: 10,
          }}>
          <TextInput
            style={styles.textInputStyle}
            value={text}
            onChangeText={value => {
              setText(value);
            }}
            placeholder="문구를 입력해주세요..."
            placeholderTextColor={COLOR.PLACEHOLDER_WHITE}
            multiline={true}
          />
          {/* 사진 추가하기 버튼 */}
          <Pressable 
          style={styles.addButton}
          onPress={()=>{}}>
            <View style={styles.buttonLeft}>
              <Icon
                style={{alignSelf: 'center', marginRight: 10}}
                name="images-outline"
                color={COLOR.FONTCOLOR_WHITE}
                size={17}
              />
              <Text style={styles.addButtonText}>사진 추가하기</Text>
            </View>
            <View style={styles.buttonRight}>
              <Icon
                name="chevron-forward-sharp"
                color={COLOR.FONTCOLOR_WHITE}
                size={17}
                style={{
                  marginRight: 10,
                }}
              />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKCOLOR,
    padding: 20,
  },
  slider: {
    alignSelf:'center',
    flex:1,
    width: width * 0.5,
    height: (height / 2) * 0.7,
    resizeMode: 'cover',
    backgroundColor:COLOR.FONTCOLOR_WHITE
  },
  musicImage: {
    alignSelf:'center',
    flex:1,
    width: width * 0.5,
    height: (height / 2) * 0.7,
    resizeMode: 'cover',
    backgroundColor:COLOR.FONTCOLOR_WHITE
  },
  containerTop: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  textInputStyle: {
    flex: 1,
    color: COLOR.FONTCOLOR_WHITE,
    borderBottomWidth: 0.4,
    borderColor: COLOR.SEPARATE_LINE,
  },
  containerBottom: {
    flex: 0.4,
    zIndex: 1,
  },
  addButton: {
    flexDirection: 'row',
    borderBottomWidth: 0.4,
    borderColor: COLOR.SEPARATE_LINE,
    height: (height / 2) * 0.2,
  },
  addButtonText: {
    color: COLOR.FONTCOLOR_WHITE,
    fontSize: 17,
    alignSelf: 'center',
  },
  buttonLeft: {
    flexDirection: 'row',
    flex: 0.3,
  },
  buttonRight: {
    flex: 0.7,
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StyleSheet, Text, UIManager } from 'react-native';
import StackNavigation, { RootStackParamList } from './src/navigations/StackNavigation';
import TabNavigation from './src/navigations/TabNavigation';
import { Provider } from 'react-redux';
import store from './src/components/redux/store/store';

if(Platform.OS ==="android"){
  if(UIManager.setLayoutAnimationEnabledExperimental){
      UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}
const customTextProps = {
  style: {
    fontFamily: 'JalnanGothic'
  }
};
function App(): JSX.Element {
 
  return (
    <SafeAreaProvider>
      
      <SafeAreaView style={styles.container}>
      <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      </Provider>
      </SafeAreaView>
      </SafeAreaProvider>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderWidth:1,
    backgroundColor:"#000000"
  }
})
export default App;

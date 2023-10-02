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
import { StyleSheet, Text } from 'react-native';
import StackNavigation from './src/navigations/StackNavigation';


function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
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

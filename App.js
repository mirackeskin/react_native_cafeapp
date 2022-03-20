/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './src/screens/Categories';
import Product from './src/screens/Product'

const Stack=createNativeStackNavigator();

const App: () => Node = () => {

  return (
    <NavigationContainer style={styles.backgroundStyle}>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            
            title:"",
            headerStyle:{
              backgroundColor:"#655339"
            },
            headerTitleStyle:{
              textAlign: 'center',
            }
          }} />
          <Stack.Screen name="Categories" component={Categories}></Stack.Screen>
          <Stack.Screen name="Product" component={Product}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  backgroundStyle:{
    backgroundColor:"transparent",
    flex:1,
  },
  
});

export default App;


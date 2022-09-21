import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Appstack from './src/Navigation/Appstack'
//import Authstack from './src/Navigation/Authstack';
const Stack = createNativeStackNavigator()
 function App (){
  return (
   <NavigationContainer>
    <Appstack/>
   </NavigationContainer>
  )}
export default App;
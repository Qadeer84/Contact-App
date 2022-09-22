import React from "react";
import TabNavigator from "./TabNavigator";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
const Appstack =()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Contact" component={TabNavigator}/>
      </Stack.Navigator>
    )
}
export default Appstack
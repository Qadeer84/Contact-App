import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreateAccountScreen from "../Screens/CreateAccountScreen/index";
import CallDetailsScreen from '../Screens/CallDetailsScreen/index'
import CallOkScreen from "../Screens/CallOkScreen";
const Stack = createNativeStackNavigator()
const Authstack =()=>{
    return(
        
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen}/>
        <Stack.Screen name="CallDetailsScreen" component={CallDetailsScreen}/>
        <Stack.Screen name="CallOkScreen" component={CallOkScreen}/>
      </Stack.Navigator>
    )
}
export default Authstack
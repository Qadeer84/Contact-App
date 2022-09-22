import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Feather  from 'react-native-vector-icons/Feather';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactsScreen from '../Screens/ContactsScreen';
import CallHistoryScreen from '../Screens/CallHistoryScreen'
import DialNumberScreen from '../Screens/DialNumberScreen'
import FavouriteScreen from '../Screens/FavouriteScreen'
import { View } from 'react-native';
import { totalSize } from "react-native-dimension";

const Tab = createBottomTabNavigator();
const TabNavigator=()=> {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarStyle:{backgroundColor:'white'},
      tabBarInactiveTintColor:'grey',
      tabBarActiveTintColor:'#FFA771',
     
        
    }}
    >
       <Tab.Screen name="Dial" component={DialNumberScreen} 
        options={{
        tabBarIcon:({focused})=>(
        <View style={{height:35,width:50,alignItems:'center',justifyContent:'center',borderRadius:20,backgroundColor: focused ? '#FFEEDD': 'white' }}>
          <MaterialCommunityIcons name='dialpad'  color={'grey'} size={totalSize(3)} 
          />
        </View>
         )
        }}
       />
      <Tab.Screen name="Call" component={CallHistoryScreen} 
       options={{
        tabBarIcon:({focused})=>(
          <View style={{height:35,width:50,alignItems:'center',justifyContent:'center',borderRadius:20,backgroundColor: focused ? '#FFEEDD': 'white' }}>
            <Feather name='clock'  color={'grey'} size={totalSize(3)} 
            />
          </View>
           )
          }}
         />
      <Tab.Screen name="Contacts" component={ContactsScreen}
       options={{
        tabBarIcon:({focused})=>(
          <View style={{height:35,width:50,alignItems:'center',justifyContent:'center',borderRadius:20,backgroundColor: focused ? '#FFEEDD': 'white' }}>
            <Feather name='user'  color={'grey'} size={totalSize(3)} 
            />
          </View>
           )
          }}
         />
      <Tab.Screen name="More" component={FavouriteScreen}
       options={{
        tabBarIcon:({focused})=>(
          <View style={{height:35,width:50,alignItems:'center',justifyContent:'center',borderRadius:20,backgroundColor: focused ? '#FFEEDD': 'white' }}>
            <MaterialCommunityIcons name='heart-circle-outline'  color={'grey'} size={totalSize(3)} 
            />
          </View>
           )
          }}
         />
    </Tab.Navigator>
  )}
export default  TabNavigator
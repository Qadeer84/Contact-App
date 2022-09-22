import React from "react";
import { View,Text,SafeAreaView,ScrollView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { totalSize,height,width } from "react-native-dimension";
import styles from './styles'
import RecentItem from "../../Components/RecentItem";
import { CallData } from "../../Components/Model/data";
const CallHistoryScreen=()=>{
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style={styles.container}>
      <View style={styles.textView}>
      <Text style={styles.text}>Recent</Text>
      <MaterialCommunityIcons
              name='dots-vertical'
               size={totalSize(4)}
               style={{marginRight:width(5)}}
               />
                </View>
                <View style={styles.listView}>
                  { CallData.map(item =>( 
                  <RecentItem
                   key={item.id}
                  time={item.time}
                   title={item.title}
                   subtitle={item.subtitle}
                   icon={item.icon}
                   color={item.color}
                   backgroundColor={item.backgroundColor}
                   /> )) }
                </View>
    </SafeAreaView>
    </ScrollView>
  )
}
export default CallHistoryScreen
import React from "react";
import { View,Text,SafeAreaView ,ScrollView} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { totalSize,height,width } from "react-native-dimension";
import styles from './styles'
import { DialData } from "../../Components/Model/data";
import RecentItem from "../../Components/RecentItem";
import { DialNumpad } from "../../Components/DialNumpad";
const DialNumberScreen=()=>{
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style={styles.container}>
      <View style={styles.inputView}>
      <Text style={styles.text}>Recent</Text>
      <MaterialCommunityIcons
              name='dots-vertical'
               size={totalSize(4)}
               style={{marginRight:width(5)}}
               />
                </View>
                <View style={styles.list}>
                  { DialData.map(item =>( 
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
                <View style={{alignItems:'center',marginTop:height(3)}}>
                
                </View>
                <DialNumpad/>
    </SafeAreaView>
    </ScrollView>
  )
}
export default DialNumberScreen
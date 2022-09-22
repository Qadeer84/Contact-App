import React from "react";
import { View,Text,SafeAreaView,Image,ScrollView,TouchableOpacity} from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import { totalSize,height,width } from "react-native-dimension";
import styles from './styles'
import { BorderedTextinput } from "../../Components/TextInputs";
import ListItem from "../../Components/ListItem";
import { paid } from "../../Components/Model/data"
const ContactsScreen=({navigation})=>{
  
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style={styles.container}>
      <View style={styles.inputView}>
      <Text style={styles.title}>Contacts</Text>
      <TouchableOpacity >
      <Feather
              name='plus'
               color={'red'}
               size={totalSize(4)}
               style={{marginRight:width(5)}}
               /></TouchableOpacity>
                </View>
                <View style={styles.inputStyle}>
                <Feather
              name='search'
               size={totalSize(3)}
               style={{marginLeft:width(2),marginRight:width(1)}}
               />
                <BorderedTextinput
                  placeholder={'Search'} />
                </View>
                <View style={styles.listView}>
              
                <View style={{marginTop:height(3)}}>
                  { paid.map(item =>( 
                  <ListItem
                   key={item.id}
                   photo={item.poster}
                   title={item.title}
                   subtitle={item.subtitle}
                   /> )) }
                </View>
          
                <Text style={{marginTop:height(2)}}> A{'\n\n'} B{'\n\n'} C{'\n\n'} D{'\n\n'} E{'\n\n'} F{'\n\n'} G{'\n\n'} H{'\n\n'} I{'\n\n'} J{'\n\n'} K{'\n\n'} L{'\n\n'} M{'\n\n'} N{'\n\n'} O{'\n\n'} P{'\n\n'} Q{'\n\n'} R{'\n\n'} S{'\n\n'} T{'\n\n'} U{'\n\n'} V{'\n\n'} W{'\n\n'} X{'\n\n'} Y{'\n\n'} X</Text>
                </View>
                
    </SafeAreaView>
    </ScrollView>
  )
}
export default ContactsScreen
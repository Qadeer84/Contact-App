import React from "react";
import { View,Text,SafeAreaView ,ScrollView} from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import { totalSize,height,width } from "react-native-dimension";
import { BorderedTextinput } from "../../Components/TextInputs";
import styles from "./styles";
import FavouriteItem from "../../Components/FavouriteItem";
import {FavouriteData1} from '../../Components/Model/data';
import {FavouriteData2} from '../../Components/Model/data';
const FavouriteScreen=()=>{
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style={styles.container}>
      
      <View style={styles.inputView}>
      <Text style={styles.title}>Favourites</Text>
      <Feather
              name='plus'
               color={'red'}
               size={totalSize(4)}
               style={{marginRight:width(5)}}
               />
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
                <View style={styles.item}>
                <View style={{marginTop:height(3),flexDirection:'row'}}>
               <View>
                { FavouriteData1.map(item =>( 
                  <FavouriteItem
                   key={item.id}
                   photo={item.poster}
                   title={item.title}
                   subtitle={item.subtitle}
                   /> )) }</View>
                   <View style={{marginLeft:width(10)}}>
                    { FavouriteData2.map(item =>( 
                  <FavouriteItem
                   key={item.id}
                   photo={item.poster}
                   title={item.title}
                   subtitle={item.subtitle}
                   /> )) }</View>
                 
                  </View>
                  <Text style={{marginTop:height(2)}}> B{'\n\n'} C{'\n\n'} D{'\n\n'} E{'\n\n'} F{'\n\n'} G{'\n\n'} H{'\n\n'} I{'\n\n'} J{'\n\n'} K{'\n\n'} L{'\n\n'} M{'\n\n'} N{'\n\n'} O{'\n\n'} P{'\n\n'} Q{'\n\n'} R{'\n\n'} S{'\n\n'} T{'\n\n'} U{'\n\n'} V{'\n\n'} W{'\n\n'} X{'\n\n'} Y{'\n\n'} X</Text>
                
                </View>
    </SafeAreaView>
    </ScrollView>
  )
}
export default FavouriteScreen
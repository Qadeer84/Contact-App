import React from "react";
import {Text,View} from 'react-native'
import { height, totalSize, width } from "react-native-dimension";
import Feather from 'react-native-vector-icons/Feather'
export default function RecentItem({title,subtitle,time,icon,color,backgroundColor}){
    return(
        <View >
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderBottomWidth:0.5,borderBottomColor:'#57636F40'}}>
            <View style={{height:30,width:30,borderWidth:0.4,alignItems:'center',justifyContent:'center',backgroundColor}}>
            {icon}
               </View>

              <View style={{marginBottom:height(2),marginTop:height(2),marginRight:width(10)}}>
                <Text style={{fontWeight:'900',fontSize:totalSize(2.5)}}>{subtitle}</Text>
                <Text style={{fontWeight:'500'}}>{title}</Text>
                </View>
            
                <Text style={{fontWeight:'400',color}}>{time}</Text> 
        </View>
        </View>
    )
}
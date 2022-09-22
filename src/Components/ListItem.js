import React from "react";
import {Text,View,Image} from 'react-native'
import { height, totalSize, width } from "react-native-dimension";
export default function ListItem({title,subtitle,photo}){
    return(
        <View >
            <View style={{flexDirection:'row',alignItems:'center',marginTop:height(3),borderBottomWidth:0.5,borderBottomColor:'#57636F40'}}>
                <Image source={photo}
                style={{width:50,height:50,marginRight:width(3),marginBottom:height(2)}}
                />
              <View style={{marginBottom:height(2)}}>
                <Text style={{fontWeight:'900',fontSize:totalSize(2.5)}}>{subtitle}</Text>
                <Text style={{fontWeight:'500'}}>{title}</Text>
                </View>
        </View>
        </View>
    )
};

import React from "react";
import {Text,View,Image} from 'react-native'
import { height, totalSize, width } from "react-native-dimension";
export default function FavouriteItem({title,subtitle,photo}){
    return(
        <View >
            <View style={{alignItems:'center',marginTop:height(3),borderBottomWidth:0.5,borderBottomColor:'#57636F40'}}>
                <Image source={photo}
                style={{width:80,height:70,marginBottom:height(2)}}
                />
                <Text style={{fontWeight:'900',fontSize:totalSize(2.5)}}>{subtitle}</Text>
                <Text style={{fontWeight:'500',marginBottom:height(2)}}>{title}</Text>
                
        </View>
        </View>
    )
};

import React from "react";
import { StyleSheet } from "react-native";
import { totalSize,height,width } from "react-native-dimension";
 export default styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
     },
     textView:{
        marginTop:height(3),
        flexDirection:'row',
        alignItems:'center',
       justifyContent:'space-between'
    },
    text:{
      marginLeft:width(5),
      fontSize:totalSize(3.5),
      fontWeight:'bold'
    },
    listView:{
      marginTop:height(2),
      marginRight:width(7),
      marginLeft:width(5),
    }
})
import React from "react";
import { StyleSheet } from "react-native";
import { totalSize,height,width } from "react-native-dimension";
 export default styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        marginBottom:height(5), 
     },
     header:{
        marginTop:height(3),
        flexDirection:'row',
        alignItems:'center',
       justifyContent:'space-between'
    },
})
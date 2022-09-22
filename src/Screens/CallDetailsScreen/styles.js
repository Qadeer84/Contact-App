import React from "react";
import { StyleSheet } from "react-native";
import { height,width } from "react-native-dimension";
 export default styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        marginBottom:height(5),
        
     },
     inputView:{
        marginTop:height(3),
        flexDirection:'row',
        alignItems:'center',
       justifyContent:'space-between'
    },
    Text:{
      flexDirection:'row',
      
    }
})
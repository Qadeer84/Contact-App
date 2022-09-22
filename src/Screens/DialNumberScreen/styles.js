import React from "react";
import { StyleSheet } from "react-native";
import { totalSize,height,width } from "react-native-dimension";
 export default styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
     },
     text:{
      marginLeft:width(5),fontSize:totalSize(3.5),fontWeight:'bold'
     },
     list:{
      marginTop:height(2),marginRight:width(7),marginLeft:width(5)
     },
     inputView:{
        marginTop:height(3),
        flexDirection:'row',
        alignItems:'center',
       justifyContent:'space-between'
    },
numpadWrapper:{
   flexDirection:'row',
   justifyContent:'space-around',
   marginVertical:18,

},
numpad:{
   alignItems:'center',
},
numpadNumber:{
   fontWeight:'bold',
   color:'black',
   fontSize:totalSize(3)
},


})
import React from "react";
import { StyleSheet } from "react-native";
import { totalSize,height,width } from "react-native-dimension";
 export default styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
     },
     inputView:{
        marginTop:height(3),
        flexDirection:'row',
        alignItems:'center',
       justifyContent:'space-between'
    },
    button:{
      width:'85%',
      padding:8,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      backgroundColor: '#FBBA32',
      marginHorizontal:width(8),
      marginTop:height(4),
      marginBottom:height(4),
     

    },
    buttonText:{
      color:'white',
      fontWeight:'bold',
      fontSize:totalSize(2.5),
    }
})


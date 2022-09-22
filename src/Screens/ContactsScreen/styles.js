import React from "react";
import { StyleSheet } from "react-native";
import { totalSize,height,width } from "react-native-dimension";
 export default styles=StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'white'
    },
    title:{
      marginLeft:width(5),
      fontSize:totalSize(3.5),
      fontWeight:'bold'
    },
    inputView:{
        marginTop:height(3),
        flexDirection:'row',
        alignItems:'center',
       justifyContent:'space-between'
    },
    inputStyle:{
        width:'90%',
        height:35,
        backgroundColor:'#E4E4E4',
        marginHorizontal:width(4),
        marginTop:height(2),
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
    },
    text:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:15,
        borderBottomWidth:0.4,
        borderBottomColor:'#E4E4E4',
        
      },
      images:{
        width:40,
        height:40,
        marginRight:width(2)
      },
      listView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:width(4),
        marginLeft:width(4)
      }
})
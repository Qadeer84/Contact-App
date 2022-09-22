import React from "react";
import { View,Text,SafeAreaView,Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { totalSize,height,width } from "react-native-dimension";
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export function DialNumpad() {
    return (
        <View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
        <View style={{alignItems:'center'}}>
        <View style={{width:45,height:45,  backgroundColor:'#E4E4E4',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
        <Text style={{fontWeight:'bold'}}>1</Text>
        <Text style={{fontWeight:'400',fontSize:totalSize(1.5)}}>%^</Text>
         </View>
         </View>
         <View  style={{alignItems:'center'}}>
        <View style={{width:45,height:45,  backgroundColor:'#E4E4E4',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
        <Text style={{fontWeight:'bold'}}>2</Text>
        <Text style={{fontWeight:'400',fontSize:totalSize(1.5)}}>ABC</Text>
         </View>
         </View>
         <View  style={{alignItems:'center'}}>
        <View style={{width:45,height:45,  backgroundColor:'#E4E4E4',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
        <Text style={{fontWeight:'bold'}}>3</Text>
        <Text style={{fontWeight:'400',fontSize:totalSize(1.5)}}>DEF</Text>
         </View>
         </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:height(3)}}>
        <View style={{alignItems:'center'}}>
        <View style={{width:45,height:45,  backgroundColor:'#E4E4E4',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
        <Text style={{fontWeight:'bold'}}>4</Text>
        <Text style={{fontWeight:'400',fontSize:totalSize(1.5)}}>GHI</Text>
         </View>
         </View>
         <View  style={{alignItems:'center'}}>
        <View style={{width:45,height:45,  backgroundColor:'#E4E4E4',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
        <Text style={{fontWeight:'bold'}}>5</Text>
        <Text style={{fontWeight:'400',fontSize:totalSize(1.5)}}>JKL</Text>
         </View>
         </View>
         <View  style={{alignItems:'center'}}>
        <View style={{width:45,height:45,  backgroundColor:'#E4E4E4',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
        <Text style={{fontWeight:'bold'}}>6</Text>
        <Text style={{fontWeight:'400',fontSize:totalSize(1.5)}}>MNO</Text>
         </View>
         </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:height(3)}}>
        <View style={{alignItems:'center'}}>
        <View style={{width:45,height:45,  backgroundColor:'#E4E4E4',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
        <Text style={{fontWeight:'bold'}}>7</Text>
        <Text style={{fontWeight:'400',fontSize:totalSize(1.5)}}>PQRS</Text>
         </View>
         </View>
         <View  style={{alignItems:'center'}}>
        <View style={{width:45,height:45,  backgroundColor:'#E4E4E4',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
        <Text style={{fontWeight:'bold'}}>8</Text>
        <Text style={{fontWeight:'400',fontSize:totalSize(1.5)}}>TUV</Text>
         </View>
         </View>
         <View  style={{alignItems:'center'}}>
        <View style={{width:45,height:45,  backgroundColor:'#E4E4E4',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
        <Text style={{fontWeight:'bold'}}>9</Text>
        <Text style={{fontWeight:'400',fontSize:totalSize(1.5)}}>WXYZ</Text>
         </View>
         </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:height(3)}}>
        <View style={{alignItems:'center'}}>
        <View style={{width:45,height:45,  backgroundColor:'#E4E4E4',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
        <Text style={{fontWeight:'bold'}}>*</Text>
         </View>
         </View>
         <View  style={{alignItems:'center'}}>
        <View style={{width:45,height:45,  backgroundColor:'#E4E4E4',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
        <Text style={{fontWeight:'bold'}}>0</Text>
        <Text style={{fontWeight:'400',fontSize:totalSize(1.5)}}>+</Text>
         </View>
         </View>
         <View  style={{alignItems:'center'}}>
        <View style={{width:45,height:45,  backgroundColor:'#E4E4E4',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
        <Text style={{fontWeight:'bold'}}>#</Text>
         </View>
         </View>
        </View>

       <View style={{alignItems:'center',marginTop:height(3),marginBottom:height(3),marginLeft:width(30)}}>
       <View style={{marginTop:height(3),flexDirection:'row',alignItems:'center'}}>
       <View style={{width:45,height:45,  backgroundColor:'#E4E4E4',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
      <MaterialIcons
       name='call'
        color={'blue'}
        size={totalSize(4)}
        /> 
        </View>
         <Feather
       name='delete'
        color={'#FFA771'}
        size={totalSize(4)}
        style={{marginLeft:width(20)}}
        />
        </View>
        </View>
        </View>
    )
}
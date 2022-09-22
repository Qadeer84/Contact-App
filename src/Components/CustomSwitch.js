import React,  {useState}from "react";
import {Text,View ,StyleSheet ,TouchableOpacity} from 'react-native'
import { height, totalSize, width } from "react-native-dimension";
export default function Customswitch({
    selectionMode,
    option1,
    option2,
    onSelectSwitch
}){
    const [getSelectionmode,setSelectionMode] =useState(selectionMode)
    const updateSwitchData=(value) =>{
        setSelectionMode(value)
        onSelectSwitch(value)
    }

    return(
        <View style={{
         height:30,
        width:'40%',
        borderRadius:10,
        borderColor:'#AD40AF',
        flexDirection:'row',
        justifyContent:'center',
       
        
        }}>
        <TouchableOpacity
        activeOpacity={1}
        onPress={()=>updateSwitchData(1)}
        style={{
            flex:1,
            backgroundColor:getSelectionmode== 1 ? '#fff' : '#fff',
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            borderBottomWidth:2,
            borderBottomLeftRadius:1,
            borderBottomRightRadius:1,
            borderBottomColor:getSelectionmode== 1 ? 'red' : '#fff',
            
        }}
        >
        <Text style={{
      color: getSelectionmode ==1 ? 'red' : 'black',
      fontSize:totalSize(2),
      fontWeight:'bold',
     
        }}>{option1}</Text>
        </TouchableOpacity>

        <TouchableOpacity
        activeOpacity={1}
        onPress={()=>updateSwitchData(2)}
        style={{
            flex:1,
            backgroundColor:getSelectionmode== 2 ? '#fff' : '#fff',
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            borderBottomWidth:2,
            borderBottomLeftRadius:1,
            borderBottomRightRadius:1,
            borderBottomColor:getSelectionmode== 2 ? 'red' : '#fff',
        }}
        >
        <Text style={{
      color: getSelectionmode ==2 ? 'red' : 'black',
      fontSize:totalSize(2),
      fontWeight:'bold',
        }}>{option2}</Text>
        </TouchableOpacity>
        </View>
    )
}


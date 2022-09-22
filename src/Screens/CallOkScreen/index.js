import React,{useState} from "react";
import { View,Text,SafeAreaView,Image,ScrollView,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { totalSize,height,width } from "react-native-dimension";
import styles from './styles'
import boyimage from '../../Assets/Images/boy2.png'
const CallOkScreen=({navigation})=>{
  return(
     <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.header}>
     <TouchableOpacity onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons
              name='chevron-left'
               size={totalSize(5)}
               />
               </TouchableOpacity>
      <MaterialCommunityIcons
              name='dots-vertical'
               size={totalSize(4)}
               style={{marginRight:width(5)}}
               />
                </View >
                <View style={{marginTop:height(5),alignItems:'center'}}>
                <Image  source={boyimage} style={{height:100,width:100}} />
                <Text style={{fontWeight:'900',marginTop:height(2)}}>Brishton Beaker</Text>
                <Text style={{fontWeight:'500',marginTop:height(2)}}>(+880) 33456 777</Text>
                <Text style={{fontWeight:'500',marginTop:height(2),color:'#FF6013'}}>02 : 47</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View   style={{alignItems:'center'}}>
                <TouchableOpacity>
            <View style={{width:40,height:40,backgroundColor:'#FFDBCA',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
             <MaterialCommunityIcons
            name='record'
             color={'#FF6013'}
             size={totalSize(4)}
             />
             </View>
             </TouchableOpacity>
             <Text style={{fontWeight:'bold',marginTop:height(1)}}>record</Text>
             </View>
             <View   style={{alignItems:'center'}}>
                <TouchableOpacity>
            <View style={{width:40,height:40,backgroundColor:'#FFDBCA',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
             <Feather
            name='pause'
             color={'#FF6013'}
             size={totalSize(4)}
             />
             </View>
             </TouchableOpacity>
             <Text style={{fontWeight:'bold',marginTop:height(1)}}>hold</Text>
             </View>
             <View  style={{alignItems:'center'}}>
                <TouchableOpacity>
            <View style={{width:40,height:40,backgroundColor:'#FFDBCA',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
             <Feather
            name='plus'
             color={'#FF6013'}
             size={totalSize(4)}
             />
             </View>
             </TouchableOpacity>
             <Text style={{fontWeight:'bold',marginTop:height(1)}}>add call</Text>
             </View>
          
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
           
           <View  style={{alignItems:'center'}}>
            <TouchableOpacity>
           <View style={{width:40,height:40,backgroundColor:'#FFDBCA',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
            <Feather
           name='volume-2'
            color={'#FF6013'}
            size={totalSize(4)}
            />
            </View>
            </TouchableOpacity>
            <Text style={{fontWeight:'bold',marginTop:height(1)}}>speaker</Text>
            </View>
            <View  style={{alignItems:'center'}}>
                <TouchableOpacity>
           <View style={{width:40,height:40,backgroundColor:'#FFDBCA',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
            <Feather
           name='mic'
            color={'#FF6013'}
            size={totalSize(4)}
            />
            </View>
            </TouchableOpacity>
            <Text style={{fontWeight:'bold',marginTop:height(1)}}>mic</Text>
            </View>
            <View  style={{alignItems:'center'}}>
                <TouchableOpacity>
           <View style={{width:40,height:40,backgroundColor:'#FFDBCA',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3)}}>
            <Feather
           name='user'
            color={'#FF6013'}
            size={totalSize(4)}
            />
            </View>
            </TouchableOpacity>
            <Text style={{fontWeight:'bold',marginTop:height(1)}}>contact</Text>
            </View>
           </View>
           <View style={{alignItems:'center'}}>
            <TouchableOpacity>
           <View style={{width:40,height:40,backgroundColor:'#FF6013',borderRadius:20,alignItems:'center',justifyContent:'center',marginTop:height(3),marginBottom:height(5)}}>
            <MaterialIcons
           name='call'
            color={'white'}
            size={totalSize(4)}
            />
            </View>
            </TouchableOpacity>
            </View>
           
                </View>
    </ScrollView>
  )
}
export default CallOkScreen
import React,{useState} from "react";
import { View,Text,SafeAreaView,Image,ScrollView,TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo' 
import AntDesign from 'react-native-vector-icons/AntDesign' 
import { totalSize,height,width } from "react-native-dimension";
import styles from './styles'
import boyimage from '../../Assets/Images/boy2.png'
import Skype from '../../Assets/Images/skypeicon.svg'
import Gmail from '../../Assets/Images/gmailicon.svg'
const CallDetailsScreen=({navigation})=>{
  return(
     
    <SafeAreaView style={styles.container}>
      <View style={styles.inputView}>
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
                <Text style={{fontWeight:'500',marginTop:height(2)}}>London, UK</Text>
                <View style={styles.Text}>
                <Text style={{fontWeight:'700',marginTop:height(4),color:'red',borderBottomWidth:1,borderBottomColor:'red'}}>Details</Text>
                <Text style={{fontWeight:'700',marginTop:height(4),color:'grey',marginLeft:width(5)}}>Call log</Text>
                </View>
                
               <View style={{alignItems:'center',flexDirection:'row',marginTop:height(5)}}>
               <MaterialIcons
                        name='call'
                   size={totalSize(5)}
                   color='#400080'
                   style={{marginLeft:width(3)}}
                   />
                   <Text style={{fontWeight:'500',fontSize:totalSize(2.5),marginLeft:width(7)}}>(+880 33456 777) <Text style={{fontSize:totalSize(1.5)}}> {'\n'}Phone Number</Text> </Text>
                   <TouchableOpacity onPress={()=> navigation .navigate('CallOkScreen')}> 
                   <View style={{width:25,height:25,backgroundColor:'#DFDFDF',borderRadius:15,marginLeft:width(13),alignItems:'center',justifyContent:'center'}}>
                  
                   <MaterialIcons
                        name='call'
                   size={totalSize(2.5)}
                   color='#400080'
                   />
                   </View></TouchableOpacity>
                   <TouchableOpacity>
                  <View style={{width:25,height:25,backgroundColor:'#FFDBCA',borderRadius:15,marginLeft:width(3),alignItems:'center',justifyContent:'center'}}>
                  <AntDesign
                        name='message1'
                   size={totalSize(2)}
                   color='#FF6013'
                   />
                  </View></TouchableOpacity>
                   </View>
                   <View style={{alignItems:'center',flexDirection:'row',marginTop:height(5)}}>
                   <Skype height={25} width={25} style={{marginLeft:width(5)}} />
                   <Text style={{fontWeight:'500',fontSize:totalSize(2.5),marginLeft:width(7)}}>live.beakerbisto <Text style={{fontSize:totalSize(1.5)}}> {'\n'}Skype Account</Text> </Text>
                   <TouchableOpacity  onPress={()=> navigation .navigate('CallOkScreen')}>
                   <View style={{width:25,height:25,backgroundColor:'#DFDFDF',borderRadius:15,marginLeft:width(18),alignItems:'center',justifyContent:'center'}}>
                   <MaterialIcons
                        name='call'
                   size={totalSize(2.5)}
                   color='#400080'
                   /></View></TouchableOpacity>
                    <TouchableOpacity>
                  <View style={{width:25,height:25,backgroundColor:'#FFDBCA',borderRadius:15,marginLeft:width(3),alignItems:'center',justifyContent:'center'}}>
                  <AntDesign
                        name='message1'
                   size={totalSize(2)}
                   color='#FF6013'
                   />
                  </View></TouchableOpacity>
                   </View>
                   <View style={{alignItems:'center',flexDirection:'row',marginTop:height(5),marginRight:width(5)}}>
                   <Gmail height={25} width={25}  />
                   <Text style={{fontWeight:'500',fontSize:totalSize(2.5),marginLeft:width(7)}}>beaker99@gmail.com <Text style={{fontSize:totalSize(1.5)}}> {'\n'}Gmail Address</Text> </Text>
                 <TouchableOpacity>
                  <View style={{width:25,height:25,backgroundColor:'#FFDBCA',borderRadius:15,marginLeft:width(5),alignItems:'center',justifyContent:'center'}}>
                  <Entypo
                        name='mail'
                   size={totalSize(2.5)}
                   color='#FF6013'
                   />
                  </View></TouchableOpacity>
                   </View>
                  </View>
                  
        
                
    </SafeAreaView>

  )
}
export default CallDetailsScreen
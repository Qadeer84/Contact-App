import React from "react";
import { View,Text,SafeAreaView,ScrollView,TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { totalSize,height,width } from "react-native-dimension";
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import styles from './styles'
import { ColoredTextinput } from "../../Components/TextInputs";
import {Spacer} from '../../Components/Spacers/index'
const CreateAccountScreen=({navigation})=>{
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style={styles.container}>
      <View style={styles.inputView}>
      <MaterialCommunityIcons
              name='chevron-left'
               size={totalSize(5)}
            
               />
                <Text style={{fontSize:totalSize(3.5),fontWeight:'600',marginRight:width(15)}}>Create Account</Text>
      <MaterialCommunityIcons
              name='dots-vertical'
               size={totalSize(4)}
               style={{marginRight:width(5)}}
               />
                    </View>
                    <View style={{alignItems:'center',marginTop:height(5)}}>
                    <View style={{width:80,height:80,backgroundColor:'#E4E4E4'}}>
                    <Feather
                   name='plus'
               size={totalSize(4)}
               color={'red'}
               style={{alignSelf:'flex-end'}}
               />
                    <MaterialCommunityIcons
              name='camera-outline'
               size={totalSize(5)}
            color={'red'}
            style={{alignSelf:'center',justifyContent:'center'}}
               />
                    </View>
                    <Text style={{marginTop:height(2),fontWeight:'900'}}>Add photo</Text>
                <Text style={{marginTop:height(2),fontWeight:'400'}}>Will only be saved on the phone</Text>
                <Spacer height={height(4)}/>
                <ColoredTextinput
                title={'Add Name'}
                left={ <Feather
                    name='user'
                    color={'red'}
                    size={totalSize(4)}
                    style={{marginBottom:height(2)}}
                />}
        />
        <ColoredTextinput
                title={'Address'}
                left={ <SimpleLineIcons
                    name='location-pin'
                    color={'red'}
                    size={totalSize(4)}
                    style={{marginBottom:height(2)}}
                />}
        />
         <ColoredTextinput
                title={'Mobile Number'}
                left={ <SimpleLineIcons
                    name='call-end'
                    color={'#400080'}
                    size={totalSize(4)}
                    style={{marginBottom:height(2)}}
                />}
        />
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('CallDetailsScreen')}>
        <Text style={{fontWeight:'700',color:'red',alignSelf:'flex-end',marginRight:width(7),marginTop:height(2)}}>Add Other Field</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.button}>
         <Text style={styles.buttonText}>Create Account</Text>
          </View>
        </TouchableOpacity>
    </SafeAreaView>
    </ScrollView>
  )
}
export default CreateAccountScreen
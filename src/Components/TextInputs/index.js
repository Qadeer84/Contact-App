import React from 'react'
import { StyleSheet, TextInput, View, placeholder,Text } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
export function BorderedTextinput({ placeholder }) {
    return (
        <View style={styles.textInput}>
            <TextInput
                placeholder={placeholder}
                style={{
                    fontSize: totalSize(2),
                    fontWeight: 'bold',

                }}
            >
            </TextInput>
        </View>
    )
}
export function ColoredTextinput({ placeholder, left, right, title }) {

    return (
        <View style={[styles.textInputOneMainContainer]}>
            {
                title ?
                    <>
                        <Text style={{ fontSize: totalSize(2.2), color: '#444444',fontWeight:'600' ,marginLeft:width(14)}}>{title}</Text>
                    </>
                    :
                    null
            }
             <View style={[styles.textInputOneSubContainer]}>
                {left ? left : null}
                <View style={{ flex:1 }}>
                    <TextInput
                        placeholder={placeholder}
                        style={{
                            fontSize: totalSize(2),
                            fontWeight: 'normal',
                            height: height(7),
                            marginLeft:width(5)
                        }}
                    >
                    </TextInput>
                </View>
                {right ? right : null}
            </View>
        </View>
             )
            }
            export function Dialnumpadinput() {
                return (
                    <View >
                        
                    </View>
                )
            }
const styles = StyleSheet.create({
    textInput: {
        flex:1,
        backgroundColor: '#0000',
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    textInputOneMainContainer: {
        marginTop:height(3),
        width:'85%',
        marginHorizontal: width(5),
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    textInputOneSubContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
        
    },
})

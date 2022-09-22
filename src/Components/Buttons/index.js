import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
export function ColoredButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button,]}>
      <Text style={styles.buttonText} >{text}</Text>
    </TouchableOpacity>

  )
}
const styles = StyleSheet.create({
    button: {
      width: '90%',
      height: height(4),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      backgroundColor: '#FBBA32',
      padding: totalSize(1.5),
      //marginHorizontal: width(5),
      marginTop:height(3),
      marginBottom:height(),
    },
    buttonText: {
      fontSize:10,
      fontWeight: '500',
      color: 'white',
    }
})
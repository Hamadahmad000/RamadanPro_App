import { TextInput , Text, View} from 'react-native'
import React from 'react'
import styles from './InputStyle'

export default function Input({Placeholder,Title,value,onchange}) {
  return (
  <View style={styles.Container}>
    <Text style={styles.Title}>{Title}</Text>
     <TextInput placeholder={Placeholder} style={styles.Input} placeholderTextColor={'black'} value={value} onChangeText={(text)=>{
      onchange(text)
     }}/>
  </View>
  )
}
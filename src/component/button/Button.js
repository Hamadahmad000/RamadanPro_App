import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './ButtonStyle'

export default function Button({Title,onpress}) {
  return (
    <TouchableOpacity style={styles.Container} onPress={()=>onpress?onpress():null}>

      <Text style={styles.ButtonText}>{Title}</Text>
    </TouchableOpacity>
   
  )
}
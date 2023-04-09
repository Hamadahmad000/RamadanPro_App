import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './ButtonStyle'

export default function Button({Title}) {
  return (
    <TouchableOpacity style={styles.Container}>

      <Text style={styles.ButtonText}>{Title}</Text>
    </TouchableOpacity>
   
  )
}
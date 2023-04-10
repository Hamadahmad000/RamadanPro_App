import { View, Text } from 'react-native'
import React from 'react'
import Stack from './src/navigation/Stack'
import { NavigationContainer } from '@react-navigation/native'

export default function MainComponent() {
  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  )
}
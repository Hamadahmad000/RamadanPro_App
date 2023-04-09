import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/screens/login/Login'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './src/navigation/Stack'
export default function App() {
  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  )
}
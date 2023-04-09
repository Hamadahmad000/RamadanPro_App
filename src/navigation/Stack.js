import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/login/Login'
import Signup from '../screens/signup/signup'
import Bottom from './bottom/Bottom'
import VideoScreen from '../screens/videoScreen/Video'
import Loader from '../screens/Loading/Loader'
import Quran from '../screens/quran/Quran'

export default function Stack() {
    const Stack = createStackNavigator()
    const CustomHeader = {
        headerShown:false
    }
  return (
    <Stack.Navigator>
      <Stack.Screen name='BottomNav' component={Bottom} options={CustomHeader}/>
      <Stack.Screen name='Signup' component={Signup} options={CustomHeader}/>
      <Stack.Screen name='Login' component={Login} options={CustomHeader}/>
      <Stack.Screen name='Video' component={VideoScreen} options={CustomHeader}/>
      <Stack.Screen name='Quran' component={Quran} options={CustomHeader}/>
      <Stack.Screen name='Loading' component={Loader} options={CustomHeader}/>
    </Stack.Navigator>
  )
}
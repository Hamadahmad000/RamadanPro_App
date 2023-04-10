import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/screens/login/Login'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './src/navigation/Stack'
import { Provider } from 'react-redux'
import store from './src/store/Store'
import MainComponent from './MainComponent'
export default function App() {
  return (
    <Provider store={store}>
      <MainComponent/>
    </Provider>
  )
}
import { View, Text,Image ,StatusBar} from 'react-native'
import React, { useEffect } from 'react'
import styles from './SplashStyle'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackActions, useNavigation } from '@react-navigation/native'
export default function Splash() {
  const navigation = useNavigation()
  useEffect(() => {
   setTimeout(() => {
    async function fetchdata() {
      AsyncStorage.getItem('USER').then((response)=>{
        const USER = JSON.parse(response)
        console.log(USER);
        DeterMindUser()
      })
      
    }
    fetchdata()
  }, 2000)
}, [])


const DeterMindUser = async()=>{
    const isLogined = await AsyncStorage.getItem('isLogined')
    try {
      if(isLogined){
         navigation.dispatch(StackActions.replace('BottomNav'))
        }else{
          
          navigation.dispatch(StackActions.replace('Login'))
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <LinearGradient colors={['#00F260', '#0575E6']} style={styles.Container}>
      <StatusBar hidden={true}/>
       <Image source={require('../../assets/icons/lamp.png')} style={styles.Logo}/>
       <Text style={styles.AppTitle}>Ramadan Pro</Text>
       <View style={styles.DeveloperName}>
        <Text style={styles.DeveloperTitle}>Developed by</Text>
        <Text style={styles.Developer}>Hamad Mirza</Text>
       </View>
    </LinearGradient>
  )
}
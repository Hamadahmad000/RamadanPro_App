import {View, Text, ScrollView, Image,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import styles from './LoginStyle';
import Input from '../../component/input/Input';
import Button from '../../component/button/Button';
import {useNavigation} from '@react-navigation/native'
export default function Login() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const navigation = useNavigation()
  return (
  <ScrollView>
      <View style={styles.Container}>
      <View style={styles.TopDiv}>
        <Image source={require('../../assets/img/logo.png')} style={styles.Logo}/>
      </View>
      <View style={styles.InputDiv}>
        <Input Placeholder={'Enter your email'} Title={'Email Address'} value={Email} onchange={(text)=>{
          setEmail(text)
        }}/>
        <Input Placeholder={'Enter your password'} Title={'Password'}value={Password} onchange={(text)=>{
          setPassword(text)
        }}/>
        <Button Title={'Sign In'}/>
      </View>
      <View style={styles.SignupButtonDiv}>
        <Text style={styles.SignupBtnTitle}>Don't have and account?</Text>
        <TouchableOpacity style={styles.signupButton} onPress={()=>navigation.navigate('Signup')}>
          <Text style={styles.SignBtnText}>Sign Up</Text><Image source={require('../../assets/icons/right-arrow.png')} style={styles.SignupIcom}/>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
  );
}

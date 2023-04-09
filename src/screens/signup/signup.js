import {View, Text, ScrollView, Image,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import styles from './signUpStyle';
import Input from '../../component/input/Input';
import Button from '../../component/button/Button';

export default function Signup() {
    const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  return (
  <ScrollView>
      <View style={styles.Container}>
      <View style={styles.TopDiv}>
        <Image source={require('../../assets/img/logo.png')} style={styles.Logo}/>
      </View>
      <View style={styles.InputDiv}>
        <Input Placeholder={'Enter your Name'} Title={'First and Last Name'} value={Name} onchange={(text)=>{
          setName(text)
        }}/>
        <Input Placeholder={'Enter your email'} Title={'Email Address'} value={Email} onchange={(text)=>{
          setEmail(text)
        }}/>
        <Input Placeholder={'Enter your password'} Title={'Password'}value={Password} onchange={(text)=>{
          setPassword(text)
        }}/>
        <Input Placeholder={'Confirm password'} Title={'Confirm Password'}value={ConfirmPassword} onchange={(text)=>{
          setConfirmPassword(text)
        }}/>
        <Button Title={'Sign Up'}/>
      </View>
      <View style={styles.SignupButtonDiv}>
        <Text style={styles.SignupBtnTitle}>Don't have and account?</Text>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.SignBtnText}>Sign Up</Text><Image source={require('../../assets/icons/right-arrow.png')} style={styles.SignupIcom}/>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
  );
}

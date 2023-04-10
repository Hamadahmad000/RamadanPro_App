import {View, Text, ScrollView, Image, TouchableOpacity,StatusBar} from 'react-native';
import React, {useState} from 'react';
import styles from './signUpStyle';
import Input from '../../component/input/Input';
import Button from '../../component/button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigation } from '@react-navigation/native';
import Loader from '../Loading/Loader';

export default function Signup() {
  //   input States

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [secureText, setsecureText] = useState(true);
  const [secureText2, setsecureText2] = useState(true);

  // Input Error States

  const [isBadName, setisBadName] = useState(false);
  const [isBadEmail, setisBadEmail] = useState(false);
  const [isBadPassword, setisBadPassword] = useState(false);
  const [isBadConfirmPassword, setisBadConfirmPassword] = useState(false);
  const [isLoading, setisLoading] = useState(false)
  // useHooks 

  const navigation = useNavigation()

  const createUser = async () => {

    try {
      const DATA = {
        NAME: Name,
        EMAIL: Email,
        PASSWORD: Password,
        CPASSWORD: ConfirmPassword,
      };
      
        if (!Name) {
          setisBadName(true);
        }
        if (!Email) {
          setisBadEmail(true);
        }
        if (!Password) {
          setisBadPassword(true);
        }
        if (!ConfirmPassword) {
          setisBadConfirmPassword(true);
        }
     
        if (Name) {
          setisBadName(false);
        }
        if (Email) {
          setisBadEmail(false);
        }
        if (Password) {
          setisBadPassword(false);
        }
        if (ConfirmPassword) {
          setisBadConfirmPassword(false);
        }

        if(Name,Email,Password,ConfirmPassword){
          setisLoading(true)
       setTimeout(() => {
        AsyncStorage.setItem('USER',JSON.stringify(DATA)).then(()=>{
          navigation.dispatch(StackActions.replace('Login'))
        })
       }, 1000);
        }

    

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Container}>
      <StatusBar hidden={true}/>
        <Loader isvisible={isLoading}/>
        <View style={styles.TopDiv}>
          <Image
            source={require('../../assets/img/logo.png')}
            style={styles.Logo}
          />
        </View>
        <View style={styles.InputDiv}>
          <Input
            Placeholder={'Enter your Name'}
            Title={'First and Last Name'}
            value={Name}
            onchange={text => {
              setName(text);
            }}
            isError={isBadName}
          />
          
          <Input
            Placeholder={'Enter your email'}
            Title={'Email Address'}
            value={Email}
            onchange={text => {
              setEmail(text);
            }}
            isError={isBadEmail}
          />
          <Input
            Placeholder={'Enter your password'}
            showeye={true}
            secure={secureText}
            setSecure={setsecureText}
            Title={'Password'}
            value={Password}
            onchange={text => {
              setPassword(text);
            }}
            isError={isBadPassword}
          />
          <Input
            Placeholder={'Confirm password'}
            showeye={true}
            secure={secureText2}
            setSecure={setsecureText2}
            Title={'Confirm Password'}
            value={ConfirmPassword}
            onchange={text => {
              setConfirmPassword(text);
            }}
            isError={isBadConfirmPassword}
          />
          <Button Title={'Sign Up'} onpress={createUser} />
        </View>
        <View style={styles.SignupButtonDiv}>
          <Text style={styles.SignupBtnTitle}>Already have and account?</Text>
          <TouchableOpacity style={styles.signupButton} onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.SignBtnText}>Sign In</Text>
            <Image
              source={require('../../assets/icons/right-arrow.png')}
              style={styles.SignupIcom}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

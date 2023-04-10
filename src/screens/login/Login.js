import {View, Text, ScrollView, Image, TouchableOpacity,StatusBar} from 'react-native';
import React, {useState} from 'react';
import styles from './LoginStyle';
import Input from '../../component/input/Input';
import Button from '../../component/button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions, useNavigation} from '@react-navigation/native';
import Loader from '../Loading/Loader';

export default function Login() {
  //   input States

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const [secureText, setsecureText] = useState(true);
  const [isUserNotRegister, setisUserNotRegister] = useState(false);

  // Input Error States

  const [isBadEmail, setisBadEmail] = useState(false);
  const [isBadPassword, setisBadPassword] = useState(false);

  const [isLoading, setisLoading] = useState(false);
  // useHooks

  const navigation = useNavigation();

  const LoginUser = async () => {
    setisLoading(true);
    try {
      const res = await AsyncStorage.getItem('USER');
      const USER = await JSON.parse(res);

      if (!Email) {
        setisBadEmail(true);
        setisLoading(false);
      }
      if (!Password) {
        setisBadPassword(true);
        setisLoading(false);
      }

      if (Email) {
        setisBadEmail(false);
      }
      if (Password) {
        setisBadPassword(false);
      }

      if ((Email, Password)) {
        setTimeout(async() => {
          if (Email == USER.EMAIL && Password == USER.PASSWORD) {
            setisUserNotRegister(false);
            await AsyncStorage.setItem('isLogined','true')
            navigation.dispatch(StackActions.replace('BottomNav'));
          } else {
            setisUserNotRegister(true);
          }

          setisLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      console.log('work3');
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flex: 1}}>
      <View style={styles.Container}>
      <StatusBar hidden={true}/>
        <Loader isvisible={isLoading} />
        <View style={styles.TopDiv}>
          <Image
            source={require('../../assets/img/logo.png')}
            style={styles.Logo}
          />
          {isUserNotRegister ? (
            <Text
              style={{alignSelf: 'center', marginVertical: 10, color: 'red'}}>
              User Not Found
            </Text>
          ) : null}
        </View>
        <View style={styles.InputDiv}>
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

          <Button Title={'SignIn'} onpress={LoginUser} />
        </View>
        <View style={styles.SignupButtonDiv}>
          <Text style={styles.SignupBtnTitle}>Don't have and account?</Text>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.SignBtnText}>Sign Up</Text>
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

import {View, Text, Alert} from 'react-native';
import React from 'react';
import styles from './SettingStyle';
import Button from '../../component/button/Button';
import {StackActions, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Setting() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Button
        Title={'Logout'}
        onpress={() => {
          Alert.alert('Logout', 'Do you want to logout ?', [
            {
              text: 'Yes',
              onPress:()=>{
                AsyncStorage.clear()
                navigation.dispatch(StackActions.replace('Signup'))
              }
            },
            {
              text: 'No',
            },
          ]);
        }}
      />
    </View>
  );
}

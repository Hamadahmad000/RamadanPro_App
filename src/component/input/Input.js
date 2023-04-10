import {TextInput, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './InputStyle';

export default function Input({
  Placeholder,
  Title,
  value,
  onchange,
  secure,
  setSecure,
  showeye,
  isError
}) {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>{Title}</Text>
      <View style={styles.FieldDIv}>
        <TextInput
          placeholder={Placeholder}
          style={styles.Input}
          placeholderTextColor={'black'}
          value={value}
          onChangeText={text => {
            onchange(text);
          }}
          secureTextEntry={secure ? secure : false}
        />
        {showeye ? (
          <TouchableOpacity onPress={()=>setSecure(!secure)} style={styles.EyeIcon}>
            <Image
              source={
                secure
                  ? require('../../assets/icons/eye.png')
                  : require('../../assets/icons/eye_slash.png')
              }
              style={styles.SecureTextIcon}
            />
          </TouchableOpacity>
        ) : null}
       
      {
        isError ?   <Image source={require('../../assets/icons/error.png')} style={styles.errorIcon}/> : null
      }


      </View>
    </View>
  );
}

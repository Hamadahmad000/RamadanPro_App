import { View, Text, Modal, Image ,ActivityIndicator} from 'react-native'
import React from 'react'
import styles from './LoaderStyle'
import { Colors } from '../../constant'


export default function Loader({isvisible}) {
  return (
    <Modal
    animationType="fade"
    transparent={true}
    visible={isvisible}
   
    
    >
       <View style={styles.Container}>
      
      <ActivityIndicator size={'large'} color={Colors.EnamelledDragon}/>
       </View>
    </Modal>
  )
}
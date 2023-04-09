import { View, Text } from 'react-native'
import React from 'react'
import Video from 'react-native-video'
import styles from './VideoStyle';
import {useRoute} from '@react-navigation/native'
export default function VideoScreen() {
    const route = useRoute()
    const {videoLink} = route.params
    
  return (
   
    
     <Video source={videoLink} style={styles.VideoScreen} fullscreen controls />
    
  )
}
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import React,{useState} from 'react';
import styles from './BottomNavStyle';
import Home from '../../screens/home/Home';
import Prayer from '../../screens/prayer/Prayer';
import Calender from '../../screens/calender/Calender';
import Setting from '../../screens/setting/Setting';
import { Colors } from '../../constant';

export default function Bottom() {
    const [Screen, setScreen] = useState(0)
  return (
    <View style={styles.Conatainer}>
        <StatusBar hidden={true}/>
      
     {
        Screen == 0 ? <Home/> : Screen == 1 ? <Prayer/> : Screen == 2 ? <Calender/> : <Setting/>
     }



      <View style={styles.BttomNav}>
        <TouchableOpacity style={styles.ButtonDiv} onPress={()=>{
            setScreen(0)
        }}>
          <Image
            source={Screen == 0 ? require('../../assets/icons/Home_Selecred.png') : require('../../assets/icons/Home.png')}
            style={styles.icon}
          />
          <Text style={[styles.buttonText,{color : Screen == 0 ? Colors.EnamelledDragon : Colors.Dark}]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonDiv} onPress={()=>{
            setScreen(1)
        }}>
          <Image
            source={Screen == 1 ? require('../../assets/icons/Clock_Selected.png') : require('../../assets/icons/clock.png')}
            style={styles.icon}
          />
          <Text style={[styles.buttonText,{color : Screen == 1 ? Colors.EnamelledDragon : Colors.Dark}]}>Prayer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonDiv} onPress={()=>{
            setScreen(2)
        }}>
          <Image
            source={Screen == 2 ? require('../../assets/icons/calendar_Selected.png') : require('../../assets/icons/calendar.png')}
            style={styles.icon}
          />
          <Text style={[styles.buttonText,{color : Screen == 2 ? Colors.EnamelledDragon : Colors.Dark}]}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonDiv} onPress={()=>{
            setScreen(3)
        }}>
          <Image
            source={Screen == 3 ? require('../../assets/icons/settings_Selected.png') : require('../../assets/icons/Setting.png')}
            style={styles.icon}
          />
          <Text style={[styles.buttonText,{color : Screen == 3 ? Colors.EnamelledDragon : Colors.Dark}]}>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

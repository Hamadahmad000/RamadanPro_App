import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './PrayerStyle';
import LinearGradient from 'react-native-linear-gradient';
import dayjs from 'dayjs';
import {GetData} from '../../config/Axios';
import Loader from '../Loading/Loader';
export default function Prayer() {
  const [date, setdate] = useState(dayjs());
  const [PrayerData, setPrayerData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const Year = new Date().getFullYear() 
  const Month = new Date().getMonth()
  
  useEffect(() => {
    
    const inteval = setInterval(() => {
      setisLoading(true);
      setdate(dayjs());
    }, 1000 * 60);
    async function fetchdata() {
      GetData(
        `https://api.aladhan.com/v1/calendarByCity/${Year}/${Month}?city=Alipur Chatha&country=Pakistan%20Kingdom&method=1`,
      ).then(response => {
        setPrayerData(response.data.data);
      });
    }
    fetchdata();
    setisLoading(false);
    return () => clearInterval(inteval);
  }, []);

  const displayPrayerData = ({item}) => {
    return (
      <View>
        <Text style={styles.PrayerDayDate}>{item.date.readable}</Text>
        <View style={styles.TimeTable}>
          <Text style={styles.TimeTableLeft}>Fajr</Text>
          <Text style={styles.TimeTableRight}>{item.timings.Fajr}</Text>
        </View>
        <View style={styles.TimeTable}>
          <Text style={styles.TimeTableLeft}>Zohar</Text>
          <Text style={styles.TimeTableRight}>{item.timings.Dhuhr}</Text>
        </View>
        <View style={styles.TimeTable}>
          <Text style={styles.TimeTableLeft}>Asar</Text>
          <Text style={styles.TimeTableRight}>{item.timings.Asr}</Text>
        </View>
        <View style={styles.TimeTable}>
          <Text style={styles.TimeTableLeft}>Magrib</Text>
          <Text style={styles.TimeTableRight}>{item.timings.Maghrib}</Text>
        </View>
        <View style={styles.TimeTable}>
          <Text style={styles.TimeTableLeft}>Isha</Text>
          <Text style={styles.TimeTableRight}>{item.timings.Isha}</Text>
        </View>
      </View>
    );
  };

  return (
    <LinearGradient colors={['#00F260', '#0575E6']} style={{flex: 1}}>
      <View style={styles.Container}>
        <Loader isvisible={isLoading} />
        <View style={styles.Header}>
          <Text style={styles.HeaderTitle}>Prayer TimeTable</Text>
        </View>

        <View style={styles.TimeDiv}>
          <Text style={styles.TimeDivTextTime}>{date.format('hh:mm')}</Text>
          <Text style={styles.TimeDivText}>{date.format('dddd, DD MMMM')}</Text>
        </View>
        <View style={styles.Devider}></View>
        <View style={styles.Devider2}></View>
        {/*  */}

        <FlatList data={PrayerData} renderItem={displayPrayerData} />
      </View>
    </LinearGradient>
  );
}

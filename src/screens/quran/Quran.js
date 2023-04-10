import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './QuranScreenStyle';
import {useNavigation} from '@react-navigation/native';
import {GetData} from '../../config/Axios';
import Loader from '../Loading/Loader';
import * as Animatable from 'react-native-animatable';
export default function Quran() {
  const navigation = useNavigation();
  const [data, setdata] = useState([]);
  const [SurahsList, setSurahsList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  // const [ShowData, setShowData] = useState(false)
  useEffect(() => {
    setisLoading(true);
    async function fetchdata() {
      await GetData('http://api.alquran.cloud/v1/surah').then(response => {
        setdata(response.data.data);
      });
      Loaddata();
    }
    fetchdata();
  }, []);

  const Loaddata = async () => {
    setisLoading(false);
  };

  const DisplaySurahs = ({item,index}) => {
    return (
      <Animatable.View
      animation={'fadeInUp'}
      duration={1000}
      delay={1000}
      >
      <TouchableOpacity
      
        style={styles.ListDiv}
        onPress={() => {
          navigation.navigate('Ayats', {
            surahNumber: item.number,
            surahName: item.englishName,
          });
        }}>
        <View style={styles.LeftContent}
        >
          <View style={styles.Surah_NumberDiv}>
            <Text style={styles.Surah_Number}>{item.number}</Text>
          </View>
          <Text style={styles.Surah}>{item.englishName}</Text>
        </View>
        <Text style={styles.AyatNameUrdu}>{item.name}</Text>
      </TouchableOpacity>
      </Animatable.View>
    );
  };

  return (
    <View style={styles.Container}>
      <Loader isvisible={isLoading} />
      <View style={styles.Header}>
        <TouchableOpacity
          style={styles.IconDiv}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={styles.Headericon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Al-Qur'an</Text>
        <TouchableOpacity style={styles.IconDiv}>
          <Image
            source={require('../../assets/icons/search-interface-symbol.png')}
            style={styles.Headericon}
          />
        </TouchableOpacity>
      </View>
      <FlatList data={data} renderItem={DisplaySurahs} />
    </View>
  );
}

{
  /* <View style={styles.ListDiv}>
       
<View style={styles.Surah_NumberDiv}>
<Text style={styles.Surah_Number}>1</Text>
</View>
 <Text style={styles.Surah}>Al-Fatiha</Text>

</View> */
}

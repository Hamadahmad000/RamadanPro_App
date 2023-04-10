import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './AyatsScreenSyle';
import {useNavigation, useRoute} from '@react-navigation/native';

import Loader from '../../Loading/Loader';
import {GetData} from '../../../config/Axios';

// import {useSelector} from 'react-redux';
// import {useDispatch} from 'react-redux';
// import {AddSruahFav} from '../../../store/action/Action';

export default function Ayats() {
  const [isLoading, setisLoading] = useState(false);
  const [data, setdata] = useState({});
  const navigation = useNavigation();

  const route = useRoute();
  const {surahNumber, surahName} = route.params;
  // const ReduxData = useSelector((state)=>state)
  // console.log(ReduxData);
  // const dispatch = useDispatch()
  useEffect(() => {
    setisLoading(true);
    async function fetchdata() {
      try {
        await GetData(
          `http://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`,
        ).then(response => {
          setdata(response.data.data.ayahs);
          // console.log(response.data.data);
          Loaddata();
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  const Loaddata = () => {
    setisLoading(false);
  };

  const DisplaySurahs = ({item}) => {
    return (
      <View style={styles.ListDiv}>
        <View style={styles.Surah_NumberDiv}>
          <Text style={styles.Surah_Number}>{item.numberInSurah}</Text>
        </View>

        <View style={styles.LeftContent}>
          <Text style={styles.AyatNameUrdu}>{item.text}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            ToastAndroid.show('Audio future comming soon Inshahllah', 2000);
          }}>
          <Image
            source={require('../../../assets/icons/volume.png')}
            style={styles.AudioIcon}
          />
        </TouchableOpacity>
      </View>
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
            source={require('../../../assets/icons/back.png')}
            style={styles.Headericon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{surahName}</Text>
        <TouchableOpacity
          style={styles.IconDiv}
          onPress={() => {
            // dispatch(AddSruahFav(data.name))
          }}>
          <Image
            source={require('../../../assets/icons/heart.png')}
            style={styles.Headericon}
          />
        </TouchableOpacity>
      </View>
      <FlatList data={data} renderItem={DisplaySurahs} />
    </View>
  );
}

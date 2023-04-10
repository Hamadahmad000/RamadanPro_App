import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './HomeStyle';
// import VideoPlayer from 'react-native-video-player'
import {useNavigation} from '@react-navigation/native';
import Loader from '../Loading/Loader';
export default function Home() {
  const navigation = useNavigation();
  const [isLoading, setisLoading] = useState(false);

  const PlayVideos = (link)=>{
      setisLoading(true)
      setTimeout(() => {
        setisLoading(false)
        navigation.navigate('Video', {
          videoLink: link,
        })
      }, 1000);
  }

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.Container}>
        <Loader isvisible={isLoading}/>
        <View style={styles.TopDiv}>
          <Image
            source={require('../../assets/img/bg1.png')}
            style={styles.TopImage}
            resizeMode="cover"
          />
          <View style={styles.RamzanDetailsCard}>
            <View style={styles.DetailsTop}>
              <View style={styles.DetailsTopinner1}>
                <Text style={styles.Time}>3:40 AM</Text>
                <Text style={styles.TimeTitle}>Sahri Last Time</Text>
              </View>
              <View style={styles.TextDevider}></View>
              <View style={styles.DetailsTopinner2}>
                <Text style={styles.Time}>3:40 AM</Text>
                <Text style={styles.TimeTitle}>Sahri Last Time</Text>
              </View>
            </View>
            <View style={styles.DetailsBottom}>
              <Text style={styles.DateTime}>Wednesday, 14 April</Text>
              <View style={styles.Info}>
                <Text style={styles.InfoText}>01 Ramadan || 1442</Text>
                <View style={styles.City}>
                  <Image
                    source={require('../../assets/icons/location-pin.png')}
                    style={styles.LocationIcon}
                  />
                  <Text style={styles.InfoCity}>Alipur Chatha</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.Header}>
            <View>
              <Text style={styles.HeaderTitle}>Assalamualaikum,</Text>
              <Text style={styles.HeaderDescription}>Ramadan Kareem!</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Quran')}>
              <Image
                source={require('../../assets/icons/book.png')}
                style={styles.BookIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.BottomDiv}>
          <View style={styles.Card}>
            <View style={styles.User}>
              <Image
                source={require('../../assets/icons/lamp.png')}
                style={styles.PostIcon}
              />
              <Text style={styles.PosterText}>Daily Live Discusion</Text>
            </View>
            <TouchableOpacity
              style={styles.video}
              onPress={() => {
               PlayVideos(require('../../assets/Videos/0409.mp4'))
              }}>
              <Image
                source={require('../../assets/img/Thumnail.png')}
                style={styles.Thumnail}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.Card}>
            <View style={styles.User}>
              <Image
                source={require('../../assets/icons/quran.png')}
                style={styles.PostIcon}
              />
              <Text style={styles.PosterText}>Dua</Text>
            </View>
            <TouchableOpacity style={styles.video}>
              <Text style={styles.DuaText}>
                O Allah! I fasted for You and I believe in You [and i put my
                trust in you] and I break my fast with Your sustenance.
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.Card}>
            <View style={styles.User}>
              <Image
                source={require('../../assets/icons/lamp.png')}
                style={styles.PostIcon}
              />
              <Text style={styles.PosterText}>Daily Live Discusion</Text>
            </View>
            <TouchableOpacity
              style={styles.video}
              onPress={() => {
                PlayVideos(require('../../assets/Videos/Kun_anta.mp4'))
              }}>
              <Image
                source={require('../../assets/img/Thumnail2.png')}
                style={styles.Thumnail}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

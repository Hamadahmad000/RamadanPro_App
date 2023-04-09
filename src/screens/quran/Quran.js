import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './QuranScreenStyle'
import { useNavigation } from '@react-navigation/native'
import { GetData } from '../../config/Axios'


export default function Quran() {
  const navigation = useNavigation()
  const [data, setdata] = useState([])
  const [SurahsList, setSurahsList] = useState({})
  useEffect(() => {
    Loaddata()
  }, [])
  
  const Loaddata = async()=>{
    const response = await GetData('http://api.alquran.cloud/v1/quran/ar.alafasy')
    // console.log(response.data.data.surahs[5].englishName);
    setdata(response.data.data.surahs)
   
        data.map((list)=>{
          setSurahsList(list)

        })
      console.log(SurahsList);
  }

  // const DisplaySurahs = ({item,index})=>{
  //   return(
  //     <View style={styles.ListDiv}>
  //      {console.log(item)}
  //     <View style={styles.Surah_NumberDiv}>
  //     <Text style={styles.Surah_Number}>1</Text>
  //     </View>
  //      <Text style={styles.Surah}>{'Al-Fatiha'}</Text>
 
  //    </View>
  //   )
  // }

  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <TouchableOpacity style={styles.IconDiv} onPress={()=>navigation.goBack()}>
          <Image source={require('../../assets/icons/back.png')} style={styles.Headericon}/>
        </TouchableOpacity>
          <Text style={styles.title}>Al-Qur'an</Text>
          <TouchableOpacity style={styles.IconDiv}>
          <Image source={require('../../assets/icons/search-interface-symbol.png')} style={styles.Headericon}/>
        </TouchableOpacity>
      </View>
    {/* <FlatList data={data} renderItem={DisplaySurahs}/> */}
    </View>
  )
}

{/* <View style={styles.ListDiv}>
       
<View style={styles.Surah_NumberDiv}>
<Text style={styles.Surah_Number}>1</Text>
</View>
 <Text style={styles.Surah}>Al-Fatiha</Text>

</View> */}
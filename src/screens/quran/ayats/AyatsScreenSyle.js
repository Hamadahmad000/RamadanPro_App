import {StyleSheet} from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Colors } from '../../../constant'


const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:Colors.white
    },
    title:{
      color:Colors.white,
      fontSize:responsiveFontSize(2),
      letterSpacing:1
    },
    Header:{
      backgroundColor:Colors.EnamelledDragon,
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:'5%',
      alignItems:'center',
      paddingVertical:responsiveHeight(4)
    },
    Headericon:{
        height:responsiveWidth(4),
        width:responsiveWidth(4),
        tintColor:Colors.white
    },
    IconDiv:{
        padding:responsiveWidth(2.4),
        backgroundColor:Colors.EnamelledLight,
        borderRadius:responsiveWidth(1.6)
    },
    ListDiv:{
        flexDirection:'row',
       width:'90%',
        alignItems:'center',
       alignSelf:'center',
        paddingVertical:responsiveWidth(4),
        borderBottomWidth:.2,
        justifyContent:'space-between'
    },
    Surah_Number:{
       
       color:Colors.white,
       fontWeight:'500',
       fontSize:responsiveFontSize(2)

    },
    Surah_NumberDiv:{
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        alignSelf:'center',
        backgroundColor:Colors.EnamelledDragon,
        // padding:responsiveWidth(3),
        borderRadius:50,
        height:responsiveWidth(9),
        width:responsiveWidth(9),
    },
    Surah:{
        fontWeight:'bold',
        color:Colors.black,
        paddingLeft:responsiveWidth(2)
    },
    LeftContent:{
        flexDirection:'row',
        alignItems:'center'
    },
    AyatNameUrdu:{
        color:Colors.black,
        width:responsiveWidth(65)
    }
})

export default styles
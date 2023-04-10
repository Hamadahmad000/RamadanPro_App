import {StyleSheet} from 'react-native'
import { Colors } from '../../constant'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'


const styles = StyleSheet.create({
    Container:{
        flex:1,
        // backgroundColor:Colors.EnamelledDragon
    },
    Header:{
        height:responsiveHeight(15),
        alignItems:'center',
        justifyContent:'center'
    },
    HeaderTitle:{
        fontWeight:'bold',
        fontSize:responsiveFontSize(2),
        textTransform:'uppercase',
        color:Colors.white,
        borderBottomWidth:.2,
        paddingBottom:responsiveHeight(1),
        borderColor:Colors.white
    },
    TimeDiv:{
        height:responsiveHeight(10),
        alignItems:'center',
        justifyContent:'center'
    },
    TimeDivText:{
        fontSize:responsiveFontSize(1.8),
        fontWeight:'bold',
        color:Colors.white,
        letterSpacing:2
    },
    TimeDivTextTime:{
        fontSize:responsiveFontSize(4),
        fontWeight:'bold',
        color:Colors.white,
        letterSpacing:2
    },
    Devider:{
        height:.5,
        width:'85%',
        backgroundColor:Colors.white,
        alignSelf:'center',
        marginTop:responsiveHeight(5)
    },
    Devider2:{
        height:.5,
        width:'65%',
        backgroundColor:Colors.white,
        alignSelf:'center',
        marginTop:responsiveHeight(2)
    },
    TimeTable:{
        flexDirection:'row',
        width:'85%',
        alignSelf:'center',
        paddingVertical:responsiveHeight(3),
        justifyContent:'space-between',
     
    },
    TimeTableLeft:{
        fontSize:responsiveFontSize(1.8),
        color:Colors.white,
        fontWeight:'500'
  
    },
    TimeTableRight:{
        fontSize:responsiveFontSize(1.8),
        color:Colors.white,
        fontWeight:'500'
    },
    PrayerDayDate:{
        fontSize:responsiveFontSize(2),
        alignSelf:'center',
        color:Colors.white,
        marginTop:responsiveHeight(3),
        borderBottomWidth:.3,
        paddingBottom:responsiveHeight(1),
        borderColor:Colors.white
    }
})

export default styles
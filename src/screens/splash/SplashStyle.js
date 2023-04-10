import {StyleSheet} from 'react-native'
import { Colors } from '../../constant'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:Colors.EnamelledDragon,
        alignItems:'center',
        justifyContent:'center'
    },
    Logo:{
        height:responsiveWidth(30),
        width:responsiveWidth(30),
        
    },
    AppTitle:{
        fontSize:responsiveFontSize(2.3),
        fontWeight:'500',
        lineHeight:responsiveHeight(8),
        color:'#ffffff',
        letterSpacing:1,
        textTransform:'uppercase'
    },
    DeveloperName:{
         position:'absolute',
         bottom:responsiveHeight(8),
         alignItems:'center'
    },
    DeveloperTitle:{
        fontSize:responsiveFontSize(1.8),
        color:'#ffffff',
        lineHeight:responsiveHeight(3)
    },
    Developer:{
        color:'#ffffff',
        fontSize:responsiveFontSize(2)
    }
})

export default styles
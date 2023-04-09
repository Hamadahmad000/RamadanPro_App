import { StyleSheet} from 'react-native'
import { Colors } from '../../constant'
import { responsiveWidth,responsiveHeight,responsiveFontSize } from 'react-native-responsive-dimensions'
const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:Colors.white
    },
    TopDiv:{
      alignItems:'center',
      justifyContent:'center',
      paddingBottom:responsiveHeight(5),
      paddingTop:responsiveHeight(8)
    },
    Logo:{
     height:responsiveWidth(35),
     width:responsiveWidth(35)
    },
    InputDiv:{
        marginTop:responsiveHeight(2)
    },
    SignupIcom:{
        height:responsiveWidth(3),
        width:responsiveWidth(3)
    },
    SignupButtonDiv:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'85%',
        alignSelf:'center',
        marginTop:responsiveHeight(3)
    },
    signupButton:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    SignBtnText:{
            fontSize:responsiveFontSize(1.8),
            fontWeight:'bold',
            color:Colors.black,
            paddingHorizontal:7
            
    },
    SignupBtnTitle:{
        fontSize:responsiveFontSize(1.8),
        color:Colors.black,
        fontWeight:'500'
    }



})


export default styles
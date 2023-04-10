import {StyleSheet} from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Colors } from '../../constant'


const styles = StyleSheet.create({
    Conatainer:{
        flex:1,
        
    },
    BttomNav:{
        height:responsiveHeight(9),
        backgroundColor:Colors.white,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        
    },
    icon:{
        height:responsiveWidth(6),
        width:responsiveWidth(6)
    },
    ButtonDiv:{
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        paddingTop:responsiveHeight(.5)
    }
})

export default styles
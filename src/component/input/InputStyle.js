import {StyleSheet} from 'react-native'
import { responsiveWidth,responsiveHeight,responsiveFontSize } from 'react-native-responsive-dimensions'
import { Colors, FontSizes } from '../../constant'

const styles = StyleSheet.create({
    Container:{
        width:'85%',
        alignSelf:'center',
        borderBottomWidth:0.2,
        marginVertical:responsiveHeight(1)
    },
    Title:{
    fontSize:responsiveFontSize(1.5)
    },
    Input:{
     color:Colors.black,
     paddingHorizontal:0
    }
})

export default styles



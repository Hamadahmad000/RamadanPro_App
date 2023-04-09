import {StyleSheet} from 'react-native'
import { responsiveWidth } from 'react-native-responsive-dimensions'


const styles = StyleSheet.create({
    Icon:{
        height:responsiveWidth(10),
        width:responsiveWidth(10)
    },
    Container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default styles
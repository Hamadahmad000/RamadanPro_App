import {StyleSheet} from 'react-native';

import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constant';
const styles = StyleSheet.create({
  Container: {
    width: '85%',
    backgroundColor: Colors.EnamelledDragon,
    alignItems: 'center',
    justifyContent:'center',
    paddingVertical:responsiveHeight(2.2),
    alignSelf:'center',
    marginTop:responsiveHeight(2),
    borderRadius:responsiveWidth(2),
    shadowColor: Colors.EnamelledDragon,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity:  0.21,
    shadowRadius: 7.68,
    elevation: 10
   
  },
  ButtonText:{
    color:Colors.white,
    fontSize:responsiveFontSize(2),

  }
});

export default styles;

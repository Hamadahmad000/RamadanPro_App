import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constant';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingBottom:responsiveHeight(10)
  },
  TopDiv: {
    flex: 1,
    height: responsiveHeight(46),
  },
  BottomDiv: {
    
    flex: 1,
    paddingTop:responsiveHeight(5)
  },
  TopImage: {
    width: '100%',
    height: responsiveHeight(30),
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  RamzanDetailsCard: {
    backgroundColor: Colors.white,
    padding: responsiveWidth(7),
    width: '85%',
    alignSelf: 'center',
    borderRadius: responsiveWidth(5),
    position: 'absolute',
    top: responsiveHeight(23),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.27,
    elevation: 10,
  },
  DetailsTop: {
    flexDirection: 'row',
  },
  TextDevider: {
    width: 0.2,
    backgroundColor: Colors.black,
    height: '100%',
    marginHorizontal: responsiveWidth(5),
  },
  Time: {
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    color: Colors.EnamelledDragon,
  },
  TimeTitle: {
    marginTop: responsiveHeight(0.5),
    fontSize: responsiveFontSize(1.8)
  },
  DetailsBottom: {},
  LocationIcon: {
    height: responsiveWidth(3),
    width: responsiveWidth(3),
  },
  City: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: responsiveWidth(4),
  },
  Info: {
    flexDirection: 'row',
  },
  DateTime: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: Colors.Dark,
    paddingVertical: responsiveHeight(1),
  },
  InfoText:{fontSize:responsiveFontSize(1.8)},
  InfoCity:{fontSize:responsiveFontSize(1.8)},
  BookIcon:{
  height:responsiveWidth(7),
  width:responsiveWidth(7),
  tintColor:Colors.white
  },
  Header:{
    width:'85%',
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    position:'absolute',
    top:responsiveHeight(5)
  },
  HeaderTitle:{ 
    fontSize:responsiveFontSize(2.5),
    fontWeight:'bold',
    color:Colors.white
  },
  HeaderDescription:{
    color:Colors.white
  },
//   
Card:{
    padding:responsiveWidth(7),
    backgroundColor:Colors.white,
    width:'85%',
    alignSelf:'center',
    borderRadius:responsiveWidth(4),
    marginBottom:responsiveHeight(4),
    
},
PostIcon:{
    height:responsiveWidth(8),
    width:responsiveWidth(8),
    marginRight:responsiveWidth(2)
},
User:{
    flexDirection:'row',
    alignItems:'center'
},
PosterText:{
    fontWeight:'500',
    color:Colors.black
},
Thumnail:{
    height:responsiveWidth(40),
    width:'100%',
    borderRadius:responsiveWidth(5)

    
},
video:{
    marginTop:responsiveHeight(2)
},
DuaText:{
    fontSize:responsiveFontSize(1.9)
}
});

export default styles;

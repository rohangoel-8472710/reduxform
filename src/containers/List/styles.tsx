import {StyleSheet, Platform, Dimensions} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
var screen = Dimensions.get('window');
const styles = StyleSheet.create({
  itemText: {
    color: colors.white,
    padding: vw(10),
    fontSize: vw(16),
  },
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? vw(35) : vw(0),
  },
  imageStyle: {
    width: vw(100),
    height: vw(100),
    margin: vw(5),
  },
  textView: {
    flex: 1,
    flexDirection: 'column',
    height: vw(100),
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  seperator: {
    height: vh(2),
    backgroundColor: colors.white,
  },
  listView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.mediumGreen,
  },
  addIconView: {
    backgroundColor: colors.lightRed,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: vw(64),
  },
  addIcon: {
    marginRight: vw(10),
  },
  addIconImage: {
    height: vw(35),
    width: vw(35),
  },
  ModalView: {
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? vw(30) : vw(0),
    shadowRadius: vw(10),
    width: screen.width - vw(40),
    height: vw(280),
  },
  modalHeading: {
    fontSize: vw(16),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: vw(20),
  },
  input: {
    borderBottomColor: colors.grey,
    height: vw(40),
    marginLeft: vw(30),
    marginRight: vw(30),
    marginTop: vw(20),
    marginBottom: vw(10),
    borderBottomWidth: vw(1),
  },
  commonButton: {
    padding: vw(8),
    marginLeft: vw(70),
    marginRight: vw(70),
    height: vw(40),
    borderRadius: vw(6),
    backgroundColor: colors.orangeRed,
    alignItems: 'center',
  },
  commonText: {
    fontSize: vw(18),
    color: colors.white,
  },
});
export default styles;

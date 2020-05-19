import {StyleSheet} from 'react-native';
import {vw, vh} from '../../constants/dimensions';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: vw(70),
    alignItems: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    height: vw(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: vw(14),
    fontWeight: '500',
    width: vw(80),
  },
  input: {
    borderColor: colors.inputBorder,
    borderWidth: vw(1),
    height: vw(37),
    width: vw(220),
    padding: vw(5),
    color: colors.black,
    fontSize: vw(15),
  },
  parentView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.lightOrange,
  },
  heading: {
    fontSize: vw(40),
    fontWeight: 'bold',
    textAlign: 'center',
    margin: vw(70),
  },
  submitButton: {
    alignItems: 'center',
    margin: vw(40),
    backgroundColor: colors.blue,
  },
  submitText: {
    color: colors.white,
    fontSize: vw(16),
    height: vw(37),
    width: vw(200),
    textAlign: 'center',
    padding: vw(10),
  },
  clearButton: {
    alignItems: 'center',
  },
  clearText: {
    backgroundColor: colors.powderBlue,
    color: colors.black,
    fontSize: vw(16),
    height: vw(37),
    width: vw(200),
    textAlign: 'center',
    padding: vw(10),
  },
});
export default styles;

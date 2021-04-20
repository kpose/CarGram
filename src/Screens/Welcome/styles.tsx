import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils';
import {heightPercentageToDP as hp} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(40),
    marginBottom: hp(5),
  },
  title: {
    //color: COLORS.LIGHT_PURPLE,
  },
  subheading: {
    marginTop: hp(2),
    fontWeight: 'bold',
    marginBottom: hp(2),
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default styles;

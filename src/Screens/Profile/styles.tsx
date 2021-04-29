import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
  },
  profileHeader: {
    height: hp(12),
    backgroundColor: 'red',
  },
  backIcon: {
    marginTop: hp(5),
    marginLeft: wp(4),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalAction: {
    margin: wp(2),
  },
});

export default styles;

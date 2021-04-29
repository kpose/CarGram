import React, {useRef} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import {useSelector} from 'react-redux';
import {HomeStackProps} from '../../Navigation/NavigationTypes';
import {ProfileHeader, BioArea} from '../../Components';
import {EditProfileModal} from '../../Modals';
import {Modalize} from 'react-native-modalize';
import {CustomStyles} from '../../Utils/Style';
import {heightPercentageToDP} from '../../Utils/Helper/responsive';
import {CombinedDarkTheme, CombinedDefaultTheme} from '../../Utils/Theme/theme';
import {ThemeContext} from '../../Contexts';
import {COLORS} from '../../Utils';

const Profile = ({navigation}: HomeStackProps) => {
  const {credentials} = useSelector(state => state.user);
  const editProfileRef = useRef<Modalize>(null);
  const {isDarkTheme} = React.useContext(ThemeContext);

  const openEditProfile = () => {
    editProfileRef.current?.open();
  };

  const modalHeader = () => {
    return (
      <View style={styles.modalHeader}>
        <TouchableOpacity onPress={() => editProfileRef.current?.close()}>
          <Text style={[CustomStyles.modalAction, styles.modalAction]}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('ki')}>
          <Text
            style={[
              CustomStyles.modalAction,
              styles.modalAction,
              {color: COLORS.PRIMARY},
            ]}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  console.log(credentials);
  return (
    <>
      <Modalize
        ref={editProfileRef}
        modalHeight={heightPercentageToDP(65)}
        modalStyle={{
          backgroundColor: isDarkTheme
            ? COLORS.PRIMARY
            : CombinedDefaultTheme.colors.background,
        }}
        HeaderComponent={modalHeader}>
        <EditProfileModal />
      </Modalize>

      <View style={styles.container}>
        <ProfileHeader
          onBackPress={() => navigation.navigate('Home')}
          profileImage={credentials.imageUrl}
          onButtonPress={openEditProfile}
        />

        <BioArea
          bio={credentials.bio}
          location={credentials.location}
          website={credentials.website}
          created={credentials.createdAt}
          handle={credentials.handle}
          firstname={credentials.firstname}
          lastname={credentials.lastname}
        />
      </View>
    </>
  );
};

export default Profile;

import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {HomeStackProps} from '../../Navigation/NavigationTypes';
import {ProfileHeader, BioArea} from '../../Components';

const Profile = ({navigation}: HomeStackProps) => {
  const {credentials} = useSelector(state => state.user);
  console.log(credentials);
  return (
    <View style={styles.container}>
      <ProfileHeader
        onBackPress={() => navigation.navigate('Home')}
        profileImage={credentials.imageUrl}
      />

      <BioArea
        bio={credentials.bio}
        location={credentials.location}
        website={credentials.website}
        created={credentials.createdAt}
      />
    </View>
  );
};

export default Profile;

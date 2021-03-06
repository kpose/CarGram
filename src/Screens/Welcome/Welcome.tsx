import React from 'react';
import {StatusBar, View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import {LargeButton} from '../../Components';
import {COLORS} from '../../Utils';
import {heightPercentageToDP as hp} from '../../Utils/Helper/responsive';
import {AuthStackProps} from '../../Navigation/NavigationTypes';
import {CustomStyles} from '../../Utils/Style';

const Welcome = ({navigation}: AuthStackProps) => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} hidden={true} />

      <View style={styles.titleContainer}>
        <Text style={[CustomStyles.title, styles.title]}>CarGram</Text>
        <Text style={[CustomStyles.caption, styles.subheading]}>
          Chat about cars with other passionate fans
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <LargeButton
          title="Sign In"
          backgroundColor={COLORS.PRIMARY}
          onPress={() => navigation.navigate('Signin')}
        />
        <View style={{marginTop: hp(2)}} />
        <LargeButton
          title="Sign Up"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </View>
  );
};

export default Welcome;

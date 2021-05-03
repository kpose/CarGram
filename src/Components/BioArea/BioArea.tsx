import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {CustomStyles, regularIcon} from '../../Utils/Style';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from '../../Utils/Helper/responsive';
import Hyperlink from 'react-native-hyperlink';
import {COLORS} from '../../Utils';
import dayjs from 'dayjs';

type BioAreaProps = {
  bio: string;
  location: string;
  website: string;
  created: string;
  handle: string;
  firstname: string;
  lastname: string;
};

const BioArea = (props: BioAreaProps) => {
  return (
    <View style={styles.container}>
      <Text style={[CustomStyles.heading]}>
        {props.firstname} {props.lastname}
      </Text>
      <Text style={[CustomStyles.caption]}>@{props.handle}</Text>
      {props.bio ? (
        <Text style={[CustomStyles.postBody, styles.bio]}>{props.bio}</Text>
      ) : null}
      <View style={styles.locationContainer}>
        {props.location ? (
          <>
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={regularIcon}
              style={{marginRight: wp(0.5)}}
            />
            <Text style={[CustomStyles.postBody]}>{props.location}</Text>
          </>
        ) : null}

        {props.website && (
          <>
            <MaterialCommunityIcons
              name="link-variant"
              size={regularIcon}
              style={{marginRight: wp(0.5), marginLeft: wp(3)}}
            />
            <Hyperlink linkDefault={true} linkStyle={{color: COLORS.PRIMARY}}>
              <Text style={[CustomStyles.postBody]}>{props.website}</Text>
            </Hyperlink>
          </>
        )}
      </View>

      <View style={styles.locationContainer}>
        <MaterialCommunityIcons
          name="calendar-month"
          size={regularIcon}
          style={{marginRight: wp(0.5)}}
        />
        <Text style={[CustomStyles.postBody]}>
          Joined, {dayjs(props.created).format('MMM YYYY')}
        </Text>
      </View>
    </View>
  );
};

export default BioArea;

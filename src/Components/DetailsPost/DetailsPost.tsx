import React from 'react';
import {View, Pressable} from 'react-native';
import {Text, Avatar, Button} from 'react-native-paper';
import {CustomStyles, regularIcon} from '../../Utils/Style';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../Utils';
import {widthPercentageToDP} from '../../Utils/Helper/responsive';

type DetailsProps = {
  image: string;
  handle: string;
  body: string;
  time: string;
  date: string;
  likes: number;
  comments: number;
};

const DetailsPost = (props: DetailsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Image size={50} source={{uri: props.image}} />
        <View style={styles.nameContainer}>
          <Text style={[CustomStyles.name]}>Yidumy Mydumu</Text>
          <Text style={[CustomStyles.handle]}>@{props.handle}</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text
          style={[
            CustomStyles.postDetailsBody,
            {marginRight: widthPercentageToDP(2)},
          ]}>
          {props.body}
        </Text>
        <View style={styles.dateContainer}>
          <Text style={[CustomStyles.postBody]}>4:45 AM</Text>
          <Text style={[CustomStyles.postBody, styles.comment]}>
            25-10-2021
          </Text>
        </View>
        <View style={styles.divide} />
        <View style={styles.retweetContainer}>
          <Text style={[CustomStyles.postBody]}>{props.likes} likes</Text>
          <Text style={[CustomStyles.postBody, styles.comment]}>
            {props.comments} comments
          </Text>
        </View>
        <View style={styles.divide} />
        <View style={styles.retweetIcons}>
          <Pressable>
            <MaterialCommunityIcons
              name="comment-outline"
              style={{color: COLORS.DARK_GRAY}}
              size={regularIcon}
            />
          </Pressable>
          <Pressable onPress={() => console.log('ki')}>
            <MaterialCommunityIcons
              style={{color: COLORS.DARK_GRAY}}
              name="heart-outline"
              size={regularIcon}
            />
          </Pressable>
          <Pressable>
            <MaterialCommunityIcons
              name="delete-empty"
              style={{color: COLORS.DARK_GRAY}}
              size={regularIcon}
            />
          </Pressable>
        </View>
        <View style={styles.divide} />
      </View>
    </View>
  );
};

export default DetailsPost;

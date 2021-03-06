import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../Contexts';
import {useSelector} from 'react-redux';
import {CustomStyles} from '../Utils/Style';

const DrawerContent = (props: any) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const {toggleTheme, isDarkTheme} = React.useContext(ThemeContext);
  const {credentials} = useSelector(state => state.user);

  const {navigation} = props;

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    toggleTheme();
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri: credentials.imageUrl,
            }}
            size={50}
          />
          <Title style={[CustomStyles.heading]}>Kpose Richard</Title>
          <Caption style={[CustomStyles.caption]}>
            @{credentials.handle}
          </Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[CustomStyles.caption, styles.paragraph]}>
                202
              </Paragraph>
              <Caption style={[CustomStyles.caption]}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[CustomStyles.caption, styles.paragraph]}>
                159
              </Paragraph>
              <Caption style={[CustomStyles.caption]}>Followers</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Profile"
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons name="tune" color={color} size={size} />
            )}
            label="Preferences"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={color}
                size={size}
              />
            )}
            label="Bookmarks"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={onToggleSwitch}>
            <View style={styles.preference}>
              <Text>Dark Mode</Text>
              <View pointerEvents="none">
                <Switch value={isSwitchOn} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>RTL</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

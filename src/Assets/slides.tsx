import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export const slides = [
  {
    key: 'k1',
    title: 'Ecommerce Leader',
    text: 'Best ecommerce in the world',
    image: {
      uri: 'https://i.imgur.com/jr6pfzM.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#F7BB64',
  },
  {
    key: 'k2',
    title: 'fast delivery',
    text: 'get your order insantly fast',
    image: {
      uri: 'https://i.imgur.com/au4H7Vt.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#F4B1BA',
  },
  {
    key: 'k3',
    title: 'many store ',
    text: 'Multiple store location',
    image: {
      uri: 'https://i.imgur.com/bXgn893.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#4093D2',
  },
  {
    key: 'k4',
    title: '24 hours suport',
    text: ' Get Support 24 Hours with Real Human',
    image: {
      uri: 'https://i.imgur.com/mFKL47j.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#644EE2',
  },
];

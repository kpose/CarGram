import React, {useContext} from 'react';
import {ActivityIndicator, View, StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../Utils';

const {height, width} = Dimensions.get('window');

const Spinner = () => {
  return (
    <View style={styles.loaderContainer}>
      <View style={styles.indicator}>
        <ActivityIndicator
          size="large"
          color={COLORS.PRIMARY}
          style={{
            left: 1.3,
            top: 1,
          }}
        />
      </View>
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  loaderContainer: {
    zIndex: 1,
    elevation: 2,
    height,
    width,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.SEMI_TRANSPARENT,
  },
  indicator: {
    backgroundColor: COLORS.DARK_GRAY,
    height: 44,
    width: 44,
    borderRadius: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

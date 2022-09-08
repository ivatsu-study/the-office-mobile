import React from 'react';
import { Animated, View } from 'react-native';

import PrisonMikeLoadingImage from '../../../../assets/prison-mike.png';
import styles from './styles';

type LoadingPrisonMikePropTypes = {
  spin: Animated.AnimatedInterpolation
}

const LoadingPrisonMike: React.FunctionComponent<LoadingPrisonMikePropTypes> = ({ spin }) => (
  <View style={styles.loadingContainer}>
    <Animated.Image
      style={[
        styles.image,
        { transform: [{ rotate: spin }] }
      ]}
      source={PrisonMikeLoadingImage}
    />
  </View>
);

export default React.memo(LoadingPrisonMike);

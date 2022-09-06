import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

type ScrollViewContainerPropTypes = {
  children: React.ReactNode;
}

function ScrollViewContainer({ children }: ScrollViewContainerPropTypes) {
  return (
    <ScrollView style={styles.scrollContainer}>{children}</ScrollView>
  );
}

ScrollViewContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollViewContainer;

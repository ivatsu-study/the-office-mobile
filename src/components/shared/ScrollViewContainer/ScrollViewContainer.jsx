import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function ScrollViewContainer({ children }) {
  return (
    <ScrollView style={styles.scrollContainer}>{children}</ScrollView>
  );
}

ScrollViewContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollViewContainer;

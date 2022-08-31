import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function AppContainer({ children, withStatusBar }) {
  return (
    <View style={styles.container}>
      {withStatusBar && (<StatusBar style="auto" />)}
      {children}
    </View>
  );
}

AppContainer.defaultProps = {
  withStatusBar: false,
};

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
  withStatusBar: PropTypes.bool,
};

export default AppContainer;

import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function NavButton({ onPress, navText }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <Text style={styles.btnText}>{navText}</Text>
    </TouchableOpacity>
  );
}

NavButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  navText: PropTypes.string.isRequired,
};

export default NavButton;

import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

type NavButtonPropTypes = {
  onPress: (event: GestureResponderEvent) => void;
  navText: string;
}

function NavButton({ onPress, navText }: NavButtonPropTypes) {
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

import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native'

import styles from './navButton.styles'

interface INavButtonPropTypes {
  onPress: (event: GestureResponderEvent) => void
  navText: string
}

const NavButton: React.FunctionComponent<INavButtonPropTypes> = ({
  onPress,
  navText,
}: INavButtonPropTypes) => (
  <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
    <Text style={styles.btnText}>{navText}</Text>
  </TouchableOpacity>
)

export default NavButton

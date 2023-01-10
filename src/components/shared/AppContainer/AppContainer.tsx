import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

import styles from './styles'

interface IAppContainerPropTypes {
  children: React.ReactNode
  withStatusBar?: boolean
}

const AppContainer: React.FunctionComponent<IAppContainerPropTypes> = ({
  children,
  withStatusBar = false,
}: IAppContainerPropTypes) => (
  <View style={styles.container}>
    {withStatusBar && <StatusBar style="auto" />}
    {children}
  </View>
)

export default AppContainer

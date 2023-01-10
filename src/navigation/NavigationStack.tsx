import { NavigationContainer } from '@react-navigation/native'
import TabNavigationStack from './TabNavigationStack'

const NavigationStack: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <TabNavigationStack />
    </NavigationContainer>
  )
}

export default NavigationStack

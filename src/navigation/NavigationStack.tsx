import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  CharactersScreen,
  CrewScreen,
  EpisodesScreen,
  HomeScreen,
  QuotesScreen,
} from '../screens'

import {
  CHARACTERS_SCREEN,
  CREW_SCREEN,
  EPISODES_SCREEN,
  HOME_SCREEN,
  QUOTES_SCREEN,
} from './screens'
import { IRootStackParamList } from './types'

const Stack = createNativeStackNavigator<IRootStackParamList>()

const NavigationStack: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME_SCREEN.NAME}>
        <Stack.Screen
          name={HOME_SCREEN.NAME}
          component={HomeScreen}
          options={{
            headerShown: false,
            title: HOME_SCREEN.TITLE,
          }}
        />
        <Stack.Screen
          name={QUOTES_SCREEN.NAME}
          component={QuotesScreen}
          options={{
            title: QUOTES_SCREEN.TITLE,
          }}
        />
        <Stack.Screen
          name={CHARACTERS_SCREEN.NAME}
          component={CharactersScreen}
          options={{
            title: CHARACTERS_SCREEN.TITLE,
          }}
        />
        <Stack.Screen
          name={EPISODES_SCREEN.NAME}
          component={EpisodesScreen}
          options={{
            title: EPISODES_SCREEN.TITLE,
          }}
        />
        <Stack.Screen
          name={CREW_SCREEN.NAME}
          component={CrewScreen}
          options={{
            title: CREW_SCREEN.TITLE,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStack

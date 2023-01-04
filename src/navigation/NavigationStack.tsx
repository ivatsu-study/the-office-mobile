import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import {
  CharactersScreen,
  CrewScreen,
  EpisodesScreen,
  HomeScreen,
  QuotesScreen,
} from '../screens'

import {
  CHARACTERS_SCREEN_NAME,
  CREW_SCREEN_NAME,
  EPISODES_SCREEN_NAME,
  HOME_SCREEN_NAME,
  QUOTES_SCREEN_NAME,
} from './screens'
import { IRootStackParamList } from './types'

const Stack = createNativeStackNavigator<IRootStackParamList>()
const queryClient = new QueryClient()

const NavigationStack: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator initialRouteName={HOME_SCREEN_NAME}>
          <Stack.Screen name={HOME_SCREEN_NAME} component={HomeScreen} />
          <Stack.Screen name={QUOTES_SCREEN_NAME} component={QuotesScreen} />
          <Stack.Screen
            name={CHARACTERS_SCREEN_NAME}
            component={CharactersScreen}
          />
          <Stack.Screen
            name={EPISODES_SCREEN_NAME}
            component={EpisodesScreen}
          />
          <Stack.Screen name={CREW_SCREEN_NAME} component={CrewScreen} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  )
}

export default NavigationStack

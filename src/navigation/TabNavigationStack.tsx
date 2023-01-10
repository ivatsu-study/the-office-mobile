import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
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

const Tab = createBottomTabNavigator()

const TabNavigationStack: () => JSX.Element = () => {
  return (
    <Tab.Navigator
      initialRouteName={HOME_SCREEN.NAME}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name={HOME_SCREEN.NAME}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: HOME_SCREEN.TITLE,
        }}
      />
      <Tab.Screen
        name={QUOTES_SCREEN.NAME}
        component={QuotesScreen}
        options={{
          tabBarLabel: QUOTES_SCREEN.TITLE,
        }}
      />
      <Tab.Screen
        name={CHARACTERS_SCREEN.NAME}
        component={CharactersScreen}
        options={{
          tabBarLabel: CHARACTERS_SCREEN.TITLE,
        }}
      />
      <Tab.Screen
        name={EPISODES_SCREEN.NAME}
        component={EpisodesScreen}
        options={{
          tabBarLabel: EPISODES_SCREEN.TITLE,
        }}
      />
      <Tab.Screen
        name={CREW_SCREEN.NAME}
        component={CrewScreen}
        options={{
          tabBarLabel: CREW_SCREEN.TITLE,
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigationStack

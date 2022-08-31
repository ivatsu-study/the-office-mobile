import { Text, View, TouchableOpacity } from "react-native";

import AppContainer from "../components/shared/AppContainer/AppContainer";
import {
  CHARACTERS_SCREEN_NAME,
  CREW_SCREEN_NAME,
  EPISODES_SCREEN_NAME,
  QUOTES_SCREEN_NAME,
} from "../navigation/screens";

function HomeScreen({ navigation }) {

  const navigateToQoutesScreen = () => navigation.navigate(QUOTES_SCREEN_NAME);
  const navigateToCharactersScreen = () => navigation.navigate(CHARACTERS_SCREEN_NAME);
  const navigateToEpisodesScreen = () => navigation.navigate(EPISODES_SCREEN_NAME);
  const navigateToCrewScreen = () => navigation.navigate(CREW_SCREEN_NAME);

  return (
    <AppContainer withStatusBar>
      <View>
        <Text>
          Quotes, facts and information on NBC’s beloved mockumentary series
          The Office.
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={navigateToQoutesScreen}>
          <Text>Quotes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToCharactersScreen}>
          <Text>Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToEpisodesScreen}>
          <Text>Episodes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToCrewScreen}>
          <Text>Crew</Text>
        </TouchableOpacity>
      </View>
    </AppContainer>
  )
}

export default HomeScreen;

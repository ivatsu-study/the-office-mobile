import {
  Text, View, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import OfficeMainImage from '../../../assets/office.png';
import { AppContainer, NavButton } from '../../components/shared';
import {
  CHARACTERS_SCREEN_NAME,
  CREW_SCREEN_NAME,
  EPISODES_SCREEN_NAME,
  QUOTES_SCREEN_NAME,
} from '../../navigation/screens';

import styles from './styles';

function HomeScreen({ navigation }) {
  const navigateToQoutesScreen = () => navigation.navigate(QUOTES_SCREEN_NAME);
  const navigateToCharactersScreen = () => navigation.navigate(CHARACTERS_SCREEN_NAME);
  const navigateToEpisodesScreen = () => navigation.navigate(EPISODES_SCREEN_NAME);
  const navigateToCrewScreen = () => navigation.navigate(CREW_SCREEN_NAME);

  return (
    <AppContainer withStatusBar>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={OfficeMainImage}
        />
      </View>
      <Text style={styles.headingText}>
        Quotes, facts and information on NBC’s beloved mockumentary series
        The Office.
      </Text>
      <View style={styles.navButtonContainer}>
        <NavButton onPress={navigateToQoutesScreen} navText="Quotes" />
        <NavButton onPress={navigateToCharactersScreen} navText="Characters" />
        <NavButton onPress={navigateToEpisodesScreen} navText="Episodes" />
        <NavButton onPress={navigateToCrewScreen} navText="Crew" />
      </View>
    </AppContainer>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    reset: PropTypes.func,
    goBack: PropTypes.func,
    setParams: PropTypes.func,
    dispatch: PropTypes.func,
    setOptions: PropTypes.func,
    isFocused: PropTypes.func,
    addListener: PropTypes.func,
  }).isRequired,
};

export default HomeScreen;

import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { GET_EPISODES } from '../../api/url';
import { AppContainer, ScrollViewContainer } from '../../components/shared';

import styles from './styles';

function EpisodesScreen() {
  const { isLoading, error, data } = useQuery(['episodesData'], () => fetch(GET_EPISODES).then((res) => res.json()));
  if (isLoading) return <Text>Loading...</Text>;
  if (error) {
    return (
      <Text>{`An error has occurred: ${error.message}`}</Text>
    );
  }

  return (
    <AppContainer withStatusBar>
      <ScrollViewContainer>
        {data?.data.map((episode) => (
          <View key={episode._id} style={styles.episodeContainer}>
            <Text style={styles.episodeTitle}>{episode.title}</Text>
            <Text style={styles.episodeAirDate}>{`${new Date(episode.airDate).getUTCDate()}/${new Date(episode.airDate).getMonth()}/${new Date(episode.airDate).getFullYear()}`}</Text>
            <Text style={styles.episodeDescription}>{episode.description}</Text>
            <View style={styles.episodeDirector}>
              <Text>{`${episode.director.name} (${episode.director.role})`}</Text>
              <Text>
                {episode.writer.name}
                {' '}
                {`(${episode.writer.role})`}
              </Text>
            </View>
          </View>
        ))}
      </ScrollViewContainer>
    </AppContainer>
  );
}

export default EpisodesScreen;

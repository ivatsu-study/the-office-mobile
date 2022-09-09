import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { fetchEpisodes } from '../../api/queries';
import { AppContainer, ScrollViewContainer } from '../../components/shared';
import { LoadingPrisonMikeContainer } from '../../containers/shared';

import styles from './styles';

type Director = {
  _id: string;
  name: string;
  role: string;
}

type Writer = {
  _id: string;
  name: string;
  role: string;
}

type Episode = {
  _id: string;
  airDate: string;
  description: string;
  director: Director;
  title: string;
  writer: Writer;
}


function EpisodesScreen() {
  const { isLoading, error, data } = useQuery(['episodesData'], fetchEpisodes);
  if (isLoading) {
    return (
      <LoadingPrisonMikeContainer />
    );
  }
  if (error instanceof Error) {
    return (
      <Text>{`An error has occurred: ${error.message}`}</Text>
    );
  }

  return (
    <AppContainer withStatusBar>
      <ScrollViewContainer>
        {data?.data.map((episode: Episode) => (
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

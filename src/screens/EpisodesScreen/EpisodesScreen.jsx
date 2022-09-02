import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { GET_EPISODES } from '../../api/url';
import { AppContainer, ScrollViewContainer } from '../../components/shared';

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
          <View key={episode._id}>
            <Text>{episode.title}</Text>
            <Text>{episode.description}</Text>
            {episode.director.firstname && episode.director.lastname && (
              <Text>{`${episode.director.firstname} ${episode.director.lastname}`}</Text>
            )}
            <Text>
              {episode.writer.name}
              {' '}
              {`(${episode.writer.role})`}
            </Text>
            <Text>{episode.airDate}</Text>
          </View>
        ))}
      </ScrollViewContainer>
    </AppContainer>
  );
}

export default EpisodesScreen;

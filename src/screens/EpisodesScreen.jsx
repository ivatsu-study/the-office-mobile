import { ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { GET_EPISODES } from '../api/url';
import AppContainer from '../components/shared/AppContainer/AppContainer';

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
      <View>
        <Text>Episodes</Text>
      </View>
      <ScrollView>
        {data?.data.map((episode) => (
          <View key={episode._id}>
            <Text>{episode.airDate}</Text>
            <Text>{episode.description}</Text>
            <Text>{episode.description}</Text>
            <Text>{`${episode.director.firstname} ${episode.director.lastname}`}</Text>
            <Text>{episode.title}</Text>
            <Text>{episode.writer.name}</Text>
            <Text>{episode.writer.role}</Text>
          </View>
        ))}
      </ScrollView>
    </AppContainer>
  );
}

export default EpisodesScreen;

import { ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { GET_CREW } from '../api/url';
import AppContainer from '../components/shared/AppContainer/AppContainer';

function CrewScreen() {
  const { isLoading, error, data } = useQuery(['crewData'], () => fetch(GET_CREW).then((res) => res.json()));
  if (isLoading) return <Text>Loading...</Text>;
  if (error) {
    return (
      <Text>{`An error has occurred: ${error.message}`}</Text>
    );
  }

  return (
    <AppContainer withStatusBar>
      <View>
        <Text>Crew</Text>
      </View>
      <ScrollView>
        {data?.data.map((crewMember) => (
          <View key={crewMember._id}>
            <Text>{crewMember.name}</Text>
            <Text>{crewMember.role}</Text>
          </View>
        ))}
      </ScrollView>
    </AppContainer>
  );
}

export default CrewScreen;

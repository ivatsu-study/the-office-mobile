import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { GET_CREW } from '../../api/url';
import { AppContainer, ScrollViewContainer } from '../../components/shared';

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
      <ScrollViewContainer>
        {data?.data.map((crewMember) => (
          <View key={crewMember._id}>
            <Text>{crewMember.name}</Text>
            <Text>{crewMember.role}</Text>
          </View>
        ))}
      </ScrollViewContainer>
    </AppContainer>
  );
}

export default CrewScreen;

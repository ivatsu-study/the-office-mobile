import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { GET_CREW } from '../../api/url';
import { AppContainer, ScrollViewContainer } from '../../components/shared';
import { LoadingPrisonMikeContainer } from '../../containers/shared';

import styles from './styles';

type CrewMember = {
  _id: string;
  name: string;
  role: string;
}

function CrewScreen() {
  const { isLoading, error, data } = useQuery(['crewData'], () => fetch(GET_CREW).then((res) => res.json()));
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
        {data?.data.map((crewMember: CrewMember) => (
          <View key={crewMember._id} style={styles.crewContainer}>
            <Text style={styles.crewMember}>{`${crewMember.name} (${crewMember.role})`}</Text>
          </View>
        ))}
      </ScrollViewContainer>
    </AppContainer>
  );
}

export default CrewScreen;

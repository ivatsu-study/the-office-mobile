import { Text, View } from 'react-native'
import { useQuery } from '@tanstack/react-query'

import { fetchCrew } from '../../api/queries'
import { ICrewMember } from '../../api/types'
import { AppContainer, ScrollViewContainer } from '../../components/shared'
import { LoadingPrisonMikeContainer } from '../../containers/shared'

import styles from './styles'

const CrewScreen: React.FunctionComponent = () => {
  const { isLoading, error, data } = useQuery(['crewData'], fetchCrew)
  if (isLoading) {
    return <LoadingPrisonMikeContainer />
  }
  if (error instanceof Error) {
    return <Text>{`An error has occurred: ${error.message}`}</Text>
  }

  return (
    <AppContainer withStatusBar>
      <ScrollViewContainer>
        {data?.map((crewMember: ICrewMember) => (
          <View key={crewMember._id} style={styles.crewContainer}>
            <Text
              style={styles.crewMember}
            >{`${crewMember.name} (${crewMember.role})`}</Text>
          </View>
        ))}
      </ScrollViewContainer>
    </AppContainer>
  )
}

export default CrewScreen

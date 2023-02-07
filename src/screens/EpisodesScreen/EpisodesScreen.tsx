import { useQuery } from '@tanstack/react-query'
import { Text, View } from 'react-native'

import { fetchEpisodes } from '../../api/queries'
import { IEpisode } from '../../api/types'
import { AppContainer, ScrollViewContainer } from '../../components/shared'
import { LoadingPrisonMikeContainer } from '../../containers/shared'
import styles from './episodesScreen.styles'

const EpisodesScreen: React.FunctionComponent = () => {
  const { isLoading, error, data } = useQuery(['episodesData'], fetchEpisodes)
  if (isLoading) {
    return <LoadingPrisonMikeContainer />
  }
  if (error instanceof Error) {
    return <Text>{`An error has occurred: ${error.message}`}</Text>
  }

  return (
    <AppContainer withStatusBar>
      <ScrollViewContainer>
        {data?.map((episode: IEpisode) => (
          <View key={episode._id} style={styles.episodeContainer}>
            <Text style={styles.episodeTitle}>{episode.title}</Text>
            <Text style={styles.episodeAirDate}>{`${new Date(
              episode.airDate,
            ).getUTCDate()}/${new Date(episode.airDate).getMonth()}/${new Date(
              episode.airDate,
            ).getFullYear()}`}</Text>
            <Text style={styles.episodeDescription}>{episode.description}</Text>
            <View style={styles.episodeDirector}>
              <Text>{`${episode.director.name} (${episode.director.role})`}</Text>
              <Text>
                {episode.writer.name} {`(${episode.writer.role})`}
              </Text>
            </View>
          </View>
        ))}
      </ScrollViewContainer>
    </AppContainer>
  )
}

export default EpisodesScreen

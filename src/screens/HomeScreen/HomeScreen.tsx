import { useQuery } from '@tanstack/react-query'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { fetchRandomQuote } from '../../api/queries'
import { HeroImage } from '../../components/HomeScreen'
import { AppContainer } from '../../components/shared'
import { LoadingPrisonMikeContainer } from '../../containers/shared'
import quotesScreenStyles from '../QuotesScreen/quotesScreen.styles'
import styles from './homeScreen.styles'

const HomeScreen: React.FunctionComponent = () => {
  const {
    isLoading,
    error,
    data: quote,
  } = useQuery(['randomQuote'], fetchRandomQuote)

  const insets = useSafeAreaInsets()

  if (isLoading) {
    return <LoadingPrisonMikeContainer />
  }
  if (error instanceof Error) {
    return <Text>{`An error has occurred: ${error.message}`}</Text>
  }

  return (
    <AppContainer withStatusBar>
      <View
        style={
          // Paddings to handle safe area
          {
            paddingTop: insets.top,
          }
        }
      >
        <Text style={[styles.headingText]}>
          Quotes, facts and information on NBC’s beloved mockumentary series The
          Office.
        </Text>
      </View>
      <HeroImage />
      {quote != null && (
        <View style={styles.quoteContainer}>
          <View key={quote._id} style={quotesScreenStyles.quoteContainer}>
            <Text style={quotesScreenStyles.quoteText}>{quote.content}</Text>
            <Text style={quotesScreenStyles.quoteAuthor}>
              {`${quote.character.firstname} ${quote.character.lastname}`}
            </Text>
          </View>
        </View>
      )}
    </AppContainer>
  )
}

export default HomeScreen

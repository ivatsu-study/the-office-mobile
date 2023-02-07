import { useQuery } from '@tanstack/react-query'
import { Text, View } from 'react-native'

import { fetchQuotes } from '../../api/queries'
import { IQuote } from '../../api/types'
import { AppContainer, ScrollViewContainer } from '../../components/shared'
import { LoadingPrisonMikeContainer } from '../../containers/shared'
import styles from './quotesScreenStyles'

const QuotesScreen: React.FunctionComponent = () => {
  const { isLoading, error, data } = useQuery(['quotesData'], fetchQuotes)
  if (isLoading) {
    return <LoadingPrisonMikeContainer />
  }
  if (error instanceof Error) {
    return <Text>{`An error has occurred: ${error.message}`}</Text>
  }

  return (
    <AppContainer withStatusBar>
      {data !== undefined ? (
        <ScrollViewContainer>
          {data?.map((quote: IQuote) => (
            <View key={quote._id} style={styles.quoteContainer}>
              <Text style={styles.quoteText}>{quote.content}</Text>
              <Text
                style={styles.quoteAuthor}
              >{`${quote.character.firstname} ${quote.character.lastname}`}</Text>
            </View>
          ))}
        </ScrollViewContainer>
      ) : (
        <Text>Oops! There&apos;s nothing to show 😱</Text>
      )}
    </AppContainer>
  )
}

export default QuotesScreen

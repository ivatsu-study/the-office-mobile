import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import NavigationStack from './src/navigation/NavigationStack'

const queryClient = new QueryClient()

const App: React.FunctionComponent = () => (
  <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
      <NavigationStack />
    </SafeAreaProvider>
  </QueryClientProvider>
)

export default App

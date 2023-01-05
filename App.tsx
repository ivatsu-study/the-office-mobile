import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NavigationStack from './src/navigation/NavigationStack'

const queryClient = new QueryClient()

const App: React.FunctionComponent = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationStack />
  </QueryClientProvider>
)

export default App

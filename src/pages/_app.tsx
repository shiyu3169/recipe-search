import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import RecipeProvider from '../providers/RecipeProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RecipeProvider>
        <Component {...pageProps} />
      </RecipeProvider>
    </QueryClientProvider>
  )
}

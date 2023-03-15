import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import RecipeProvider from '../providers/RecipeProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SSRProvider from 'react-bootstrap/SSRProvider'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <SSRProvider>
      <QueryClientProvider client={queryClient}>
        <RecipeProvider>
          <Component {...pageProps} />
        </RecipeProvider>
      </QueryClientProvider>
    </SSRProvider>
  )
}

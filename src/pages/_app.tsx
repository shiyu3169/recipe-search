import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import RecipeProvider from '../providers/RecipeProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecipeProvider>
      <Component {...pageProps} />
    </RecipeProvider>
  )
}

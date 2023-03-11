import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import RecipeProvider from '../providers/recipeProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecipeProvider>
      <Component {...pageProps} />
    </RecipeProvider>
  )
}

import { Container } from 'react-bootstrap'
import RecipesList from '../../components/RecipesList'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Recipe } from '../../providers/RecipeProvider'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Favorite() {
  const [favorites] = useLocalStorage<{ [x: string]: Recipe }>('favorites', {})

  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])
  return (
    <>
      <Head>
        <title>RecipeFinder</title>
        <meta
          name='description'
          content='Find delicious recipes for any occasion with our easy-to-use recipe search app'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Container>
          <h1>Favorites</h1>
          {!isSSR && <RecipesList recipes={Object.values(favorites)} />}
        </Container>
      </main>
    </>
  )
}

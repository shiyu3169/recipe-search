import Head from 'next/head'
import { Container } from 'react-bootstrap'
import RecipeSearch from '../components/RecipeSearch'

export default function Home() {
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
        <Container className='my-5'>
          <RecipeSearch />
          {/*
        4. Users can save their favorite recipes to a bookmark list. 
        5. The bookmark list should be displayed on a separate page, with each saved recipe displayed as a card with the name and image of the recipe.
        6. Users can remove a saved recipe from the bookmark list by clicking on a "Remove" button on the recipe card.
        7. The web app should have a responsive design and be accessible.
      */}
        </Container>
      </main>
    </>
  )
}

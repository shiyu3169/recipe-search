import Head from 'next/head'
import Container from 'react-bootstrap/esm/Container'
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
          {/* 1. The home page should have a search bar where users can enter keywords to search for recipes.  */}
          <RecipeSearch />
          {/*
        2. The search results should display recipe cards with each recipe's name, image, and brief description. 
        3. Users can click on a recipe card to view the full recipe details, including the ingredients and instructions.
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

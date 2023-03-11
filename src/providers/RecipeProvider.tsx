import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react'
import { ActionMap } from '../types/actionMap'

export type Recipe = {
  idMeal: string
  strMeal: string
  strInstructions: string
  strMealThumb: string
}

type RecipeState = {
  recipes: Recipe[]
}

export enum RecipeActionType {
  SEARCH_RECIPES = 'SEARCH_RECIPES',
}

export type RecipeActionPayload = {
  [RecipeActionType.SEARCH_RECIPES]: {
    searchTerm: string
  }
}

type RecipeAction =
  ActionMap<RecipeActionPayload>[keyof ActionMap<RecipeActionPayload>]

const initialState = {
  recipes: [],
}

const recipeReducer = (state: RecipeState, action: RecipeAction) => {
  const { type, payload } = action
  switch (type) {
    default:
      return initialState
  }
}

type RecipeContextProps = {
  state: RecipeState
  dispatch: Dispatch<RecipeAction>
}

const RecipeContext = createContext<RecipeContextProps>({
  state: initialState,
  dispatch: () => null,
})

const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState)
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider

export const useRecipeContext = () => useContext(RecipeContext)

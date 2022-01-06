/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      name
      ingredients {
        items {
          id
          name
          quantity
          recipeId
          createdAt
          updatedAt
          recipeIngredientsId
        }
        nextToken
      }
      instructions {
        items {
          id
          info
          recipeId
          createdAt
          updatedAt
          recipeInstructionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ingredients {
          nextToken
        }
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
      id
      name
      quantity
      recipeId
      recipe {
        id
        name
        ingredients {
          nextToken
        }
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      recipeIngredientsId
    }
  }
`;
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantity
        recipeId
        recipe {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        recipeIngredientsId
      }
      nextToken
    }
  }
`;
export const getInstruction = /* GraphQL */ `
  query GetInstruction($id: ID!) {
    getInstruction(id: $id) {
      id
      info
      recipeId
      recipe {
        id
        name
        ingredients {
          nextToken
        }
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      recipeInstructionsId
    }
  }
`;
export const listInstructions = /* GraphQL */ `
  query ListInstructions(
    $filter: ModelInstructionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        info
        recipeId
        recipe {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        recipeInstructionsId
      }
      nextToken
    }
  }
`;

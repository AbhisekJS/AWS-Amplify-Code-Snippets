/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
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
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
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
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
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
export const createInstruction = /* GraphQL */ `
  mutation CreateInstruction(
    $input: CreateInstructionInput!
    $condition: ModelInstructionConditionInput
  ) {
    createInstruction(input: $input, condition: $condition) {
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
export const updateInstruction = /* GraphQL */ `
  mutation UpdateInstruction(
    $input: UpdateInstructionInput!
    $condition: ModelInstructionConditionInput
  ) {
    updateInstruction(input: $input, condition: $condition) {
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
export const deleteInstruction = /* GraphQL */ `
  mutation DeleteInstruction(
    $input: DeleteInstructionInput!
    $condition: ModelInstructionConditionInput
  ) {
    deleteInstruction(input: $input, condition: $condition) {
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

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
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
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient {
    onUpdateIngredient {
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
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient {
    onDeleteIngredient {
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
export const onCreateInstruction = /* GraphQL */ `
  subscription OnCreateInstruction {
    onCreateInstruction {
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
export const onUpdateInstruction = /* GraphQL */ `
  subscription OnUpdateInstruction {
    onUpdateInstruction {
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
export const onDeleteInstruction = /* GraphQL */ `
  subscription OnDeleteInstruction {
    onDeleteInstruction {
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

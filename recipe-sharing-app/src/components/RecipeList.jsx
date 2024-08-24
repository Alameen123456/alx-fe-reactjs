import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes();  // Trigger filtering whenever the component renders
  }, [filterRecipes]);

  return (
    <ul>
      {filteredRecipes.map(recipe => (
        <li key={recipe.id}>{recipe.title}</li>
      ))}
    </ul>
  );
};

export default RecipeList;

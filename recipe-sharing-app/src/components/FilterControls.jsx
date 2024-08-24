import React from 'react';
import { useRecipeStore } from './recipeStore';

const FilterControls = () => {
  const setFilterByIngredients = useRecipeStore(state => state.setFilterByIngredients);
  const setFilterByPrepTime = useRecipeStore(state => state.setFilterByPrepTime);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Filter by ingredients (comma-separated)" 
        onChange={(e) => setFilterByIngredients(e.target.value.split(','))}
      />
      <input 
        type="number" 
        placeholder="Max preparation time (minutes)" 
        onChange={(e) => setFilterByPrepTime(Number(e.target.value))}
      />
    </div>
  );
};

export default FilterControls;

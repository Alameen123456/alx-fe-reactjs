import create from 'zustand';
const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filterBy: {
    ingredients: [],
    maxPrepTime: null,
  },
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilterByIngredients: (ingredients) =>
    set((state) => ({
      filterBy: { ...state.filterBy, ingredients },
    })),
  setFilterByPrepTime: (time) =>
    set((state) => ({
      filterBy: { ...state.filterBy, maxPrepTime: time },
    })),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => {
      let filtered = state.recipes;

      if (state.searchTerm) {
        filtered = filtered.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
      }

      if (state.filterBy.ingredients.length > 0) {
        filtered = filtered.filter((recipe) =>
          state.filterBy.ingredients.every((ing) =>
            recipe.ingredients.includes(ing)
          )
        );
      }

      if (state.filterBy.maxPrepTime) {
        filtered = filtered.filter(
          (recipe) => recipe.preparationTime <= state.filterBy.maxPrepTime
        );
      }

      return { filteredRecipes: filtered };
    }),
}));

export { useRecipeStore };

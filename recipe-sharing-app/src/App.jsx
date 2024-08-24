import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <h1>Recipe Sharing App</h1>
          <AddRecipeForm />
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

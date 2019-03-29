const express = require('express');
const helmet = require('helmet');

const projects = require('./models/projects-model.js');
const recipes = require('./models/recipes-model.js');

const server = express();

server.use(helmet());
server.use(express.json());

// list all projects
server.get('/api/projects', async (req, res) => {
  try {
    const allProjects = await projects.getProjects();
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create projects
server.post('/api/projects', async (req, res) => {
  try {
    if (req.body.name && req.body.description) {
      const project_id = await projects.addProjects(req.body);
      res.status(201).json(project_id[0]);
    } else {
      res.status(400).json({ error: "Please add project name and description." }) 
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// list a dish by id
server.get('/api/projects/:id', async (req, res) => {
  try {
    let dish = await projects.getDish(req.params.id);
    const dishRecipes = await recipes.getRecipesByDish(req.params.id);
    dish.recipes = dishRecipes;
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ error: "Dish not found." })
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// list all recipes
server.get('/api/recipes', async (req, res) => {
  try {
    const allRecipes = await recipes.getRecipes();
    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create recipe
server.post('/api/recipes', async (req, res) => {
  try {
    if (req.body.name && req.body.project_id) {
      const recipe_id = await recipes.addRecipe(req.body);
      res.status(201).json(recipe_id[0]);
    } else {
      res.status(400).json({ error: "Please add a recipe and dish ID name." }) 
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// list a recipe by id
server.get('/api/recipes/:id', async (req, res) => {
  try {
    const recipe = await recipes.getRecipe(req.params.id);
    const ingredients = await recipes.getIngredientsByRecipe(req.params.id);
    recipe.ingredients = ingredients;
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ error: "Recipe not found." })
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);

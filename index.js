const express = require('express');
const helmet = require('helmet');

const projects = require('./models/projects-model.js');
const actions = require('./models/actions-model.js');

const server = express();

server.use(helmet());
server.use(express.json());

// create projects
server.post('/api/projects', async (req, res) => {
  try {
    if (req.body.name && req.body.description) {
      const project_id = await projects.addProjects(req.body);
      res.status(201).json(project_id[0]);
    } else {
      res.status(400).json({ error: "Please include project name and description." }) 
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// list all projects
server.get('/api/projects', async (req, res) => {
  try {
    const allProjects = await projects.getProjects();
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json(error);
  }
});

// // list a dish by id
// server.get('/api/projects/:id', async (req, res) => {
//   try {
//     let dish = await projects.getDish(req.params.id);
//     const dishactions = await actions.getactionsByDish(req.params.id);
//     dish.actions = dishactions;
//     if (dish) {
//       res.status(200).json(dish);
//     } else {
//       res.status(404).json({ error: "Dish not found." })
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// create actions
server.post('/api/actions', async (req, res) => {
  try {
    if (req.body.project_id && req.body.description) {
      const action_id = await actions.addAction(req.body);
      res.status(201).json(action_id[0]);
    } else {
      res.status(400).json({ error: "Please include action description and project ID." }) 
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// list all actions
server.get('/api/actions', async (req, res) => {
  try {
    const allActions = await actions.getActions();
    res.status(200).json(allActions);
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);

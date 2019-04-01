const express = require('express');
const helmet = require('helmet');

const projects = require('./data/models/projects-model.js');
const actions = require('./data/models/actions-model.js');
const contexts = require('./data/models/contexts-model.js');

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

// list project by id
server.get('/api/projects/:id', async (req, res) => {
  try {
    let project = await projects.getProject(req.params.id);
    const projectActions = await actions.getActionsByProject(req.params.id);
    project.actions = projectActions;
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ error: "Project not found." })
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

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

// list action by id
server.get('/api/actions/:id', async (req, res) => {
  try {
    let action = await actions.getAction(req.params.id);
    const actionContexts = await contexts.getContextsByAction(req.params.id);
    action.contexts = actionContexts;
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ error: "Project not found." })
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);

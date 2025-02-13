import type { RequestHandler } from "express";

// Import access to data
import projectRepository from "./projectRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all projects
    const projects = await projectRepository.readAll();

    // Respond with the projects in JSON format
    res.json(projects);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific project based on the provided ID
    const projectId = Number(req.params.id);
    const project = await projectRepository.read(projectId);

    // If the project is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the project in JSON format
    if (project == null) {
      res.sendStatus(404);
    } else {
      res.json(project);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the project data from the request body
    const newProject = {
      title: req.body.title,
      imgCard: req.body.imgCard,
      description: req.body.description,
      heroImg: req.body.heroImg,
      img1: req.body.img1,
      img2: req.body.img2,
      url: req.body.url,
    };

    // Create the project
    const insertId = await projectRepository.create(newProject);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted project
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };

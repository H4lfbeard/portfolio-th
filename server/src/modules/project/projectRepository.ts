import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Project = {
  id: number;
  title: string;
  imgCard: string;
  description: string;
  heroImg: string;
  img1: string;
  img2: string;
  url: string;
};

class ProjectRepository {
  // The C of CRUD - Create operation

  async create(project: Omit<Project, "id">) {
    // Execute the SQL INSERT query to add a new project to the "project" table
    const [result] = await databaseClient.query<Result>(
      "insert into project (title, imgCard, description, heroImg, img1, img2, url) values (?, ?, ?, ?, ?, ?, ?)",
      [
        project.title,
        project.imgCard,
        project.description,
        project.heroImg,
        project.img1,
        project.img2,
        project.url,
      ],
    );

    // Return the ID of the newly inserted project
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific project by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from project where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the project
    return rows[0] as Project;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all projects from the "project" table
    const [rows] = await databaseClient.query<Rows>("select * from project");

    // Return the array of projects
    return rows as Project[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing project

  // async update(project: Project) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an project by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new ProjectRepository();

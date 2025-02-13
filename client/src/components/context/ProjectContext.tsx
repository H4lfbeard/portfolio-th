import { createContext, useContext } from "react";

interface Project {
  id: string;
  title: string;
  imgCard: string;
  description: string;
  heroImg: string;
  img1: string;
  img2: string;
  url: string;
}

interface ProjectContextType {
  projects: Project[];
}

// Create the context (default value is empty)
export const ProjectContext = createContext<ProjectContextType | undefined>(
  undefined,
);

export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
}

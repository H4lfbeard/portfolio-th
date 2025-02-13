import { createContext, useContext } from "react";

interface Project {
  title: string;
  img: string;
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

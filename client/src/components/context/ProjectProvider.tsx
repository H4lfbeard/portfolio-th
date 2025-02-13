import type { ReactNode } from "react";
import { ProjectContext } from "./ProjectContext";

interface ProjectProviderProps {
  children: ReactNode;
}

const projectData = [
  {
    title: "WildEats",
    img: "src/assets/images/WildEats.png",
  },
  {
    title: "Wildify",
    img: "src/assets/images/Wildify.png",
  },
  {
    title: "Veever",
    img: "src/assets/images/Veever.png",
  },
];

export function ProjectProvider({ children }: ProjectProviderProps) {
  return (
    <ProjectContext.Provider value={{ projects: projectData }}>
      {children}
    </ProjectContext.Provider>
  );
}

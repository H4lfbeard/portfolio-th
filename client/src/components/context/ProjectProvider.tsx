import { type ReactNode, useEffect, useState } from "react";
import { ProjectContext } from "./ProjectContext";

interface ProjectProviderProps {
  children: ReactNode;
}

export function ProjectProvider({ children }: ProjectProviderProps) {
  // useEffect to fetch data from an API
  const [projectData, setProjectData] = useState<Project[]>([]);
  useEffect(() => {
    // Fetch data from API
    fetch("http://localhost:3310/api/project")
      .then((response) => response.json())
      .then((data) => setProjectData(data))
      .catch((error) => console.error("Error fetching fucking data: ", error));
  }, []); // Empty array ensures this effect runs only once when the component mounts

  return (
    <ProjectContext.Provider value={{ projects: projectData }}>
      {children}
    </ProjectContext.Provider>
  );
}

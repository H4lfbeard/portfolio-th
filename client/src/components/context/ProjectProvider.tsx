import type { ReactNode } from "react";
import { ProjectContext } from "./ProjectContext";

interface ProjectProviderProps {
  children: ReactNode;
}

const projectData = [
  {
    id: "wild-eats",
    title: "WildEats",
    imgCard: "/images/wildEats.png",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna nunc, vehicula non accumsan ut, blandit in enim. Aenean bibendum ac sapien euismod condimentum. Aenean faucibus nisi sed dui facilisis efficitur. Phasellus molestie feugiat massa eget malesuada. Maecenas feugiat non dolor a fringilla. Vestibulum ultricies at nulla malesuada gravida. Nam et leo vulputate, condimentum arcu eu, vehicula augue. Suspendisse auctor placerat ex vel tempor. Curabitur eu massa in erat laoreet ornare nec id mi. Suspendisse potenti. Donec sit amet massa a arcu egestas accumsan. Cras mi turpis, vulputate tempor porttitor nec, ornare a metus. Sed cursus egestas velit ut convallis. Proin bibendum finibus tortor, vitae consectetur ligula vehicula quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    heroImg: "/images/veever-hero.jpg",
    img1: "/images/mockup-phone.png",
    img2: "/images/mockup-charte.png",
    url: "https://h4lfbeard.github.io/Wild-Eats.github.io/",
  },
  {
    id: "wildify",
    title: "Wildify",
    imgCard: "/images/Wildify.png",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna nunc, vehicula non accumsan ut, blandit in enim. Aenean bibendum ac sapien euismod condimentum. Aenean faucibus nisi sed dui facilisis efficitur. Phasellus molestie feugiat massa eget malesuada. Maecenas feugiat non dolor a fringilla. Vestibulum ultricies at nulla malesuada gravida. Nam et leo vulputate, condimentum arcu eu, vehicula augue. Suspendisse auctor placerat ex vel tempor. Curabitur eu massa in erat laoreet ornare nec id mi. Suspendisse potenti. Donec sit amet massa a arcu egestas accumsan. Cras mi turpis, vulputate tempor porttitor nec, ornare a metus. Sed cursus egestas velit ut convallis. Proin bibendum finibus tortor, vitae consectetur ligula vehicula quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    heroImg: "/images/veever-hero.jpg",
    img1: "/images/mockup-phone.png",
    img2: "/images/mockup-charte.png",
    url: "https://github.com/H4lfbeard/Wildify",
  },
  {
    id: "veever",
    title: "Veever",
    imgCard: "/images/Veever.png",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna nunc, vehicula non accumsan ut, blandit in enim. Aenean bibendum ac sapien euismod condimentum. Aenean faucibus nisi sed dui facilisis efficitur. Phasellus molestie feugiat massa eget malesuada. Maecenas feugiat non dolor a fringilla. Vestibulum ultricies at nulla malesuada gravida. Nam et leo vulputate, condimentum arcu eu, vehicula augue. Suspendisse auctor placerat ex vel tempor. Curabitur eu massa in erat laoreet ornare nec id mi. Suspendisse potenti. Donec sit amet massa a arcu egestas accumsan. Cras mi turpis, vulputate tempor porttitor nec, ornare a metus. Sed cursus egestas velit ut convallis. Proin bibendum finibus tortor, vitae consectetur ligula vehicula quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    heroImg: "/images/veever-hero.jpg",
    img1: "/images/mockup-phone.png",
    img2: "/images/mockup-charte.png",
    url: "https://github.com/VeeverFR/Veever_wild",
  },
];

export function ProjectProvider({ children }: ProjectProviderProps) {
  // useEffect to fetch data from an API
  // const [projects, setProjects] = useState<Project[]>([]);
  return (
    <ProjectContext.Provider value={{ projects: projectData }}>
      {children}
    </ProjectContext.Provider>
  );
}

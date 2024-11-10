import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiPrisma, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { DiMongodb, DiJavascript1, DiNodejsSmall } from 'react-icons/di';
import { IconType } from 'react-icons';
import { SiMui } from 'react-icons/si';
import { RiFirebaseFill } from "react-icons/ri";


// Define the type for icon names
type IconName =
  | 'HTML'
  | 'React'
  | 'CSS'
  | 'NextJS'
  | 'Tailwind'
  | 'TypeScript'
  | 'MongoDB'
  | 'JavaScript'
  | 'NodeJS'
  | 'ExpressJS'
  | 'MUI'
  | 'GitHub'
  // | 'Prisma'
  | 'Redux'
  | 'Firebase'

// Define the icon object type to include icon and color
type IconObject = {
  icon: IconType;
  color: string;
};

// Define the icons object with each icon component and its color
export const icons: { [key in IconName]: IconObject } = {
  React: { icon: FaReact, color: '#61DBFB' },
  HTML: { icon: FaHtml5, color: '#E34F26' },
  CSS: { icon: FaCss3Alt, color: '#1572B6' },
  NextJS: { icon: SiNextdotjs, color: '#000000' },
  Tailwind: { icon: SiTailwindcss, color: '#38B2AC' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  MongoDB: { icon: DiMongodb, color: '#47A248' },
  JavaScript: { icon: DiJavascript1, color: '#F7DF1E' },
  NodeJS: { icon: DiNodejsSmall, color: '#43853D' },
  ExpressJS: { icon: SiExpress, color: '#000000' },
  MUI: { icon: SiMui, color: '#007FFF' },
  GitHub: { icon: FaGithub, color: '#181717' },
  // Prisma: { icon: SiPrisma, color: '#0C344B' },
  Redux: { icon: SiRedux, color: '#764ABC' },
  Firebase: {icon:RiFirebaseFill,color: '#f78c00'}
}


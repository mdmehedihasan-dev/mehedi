import { IconType } from 'react-icons';
import { FaChrome, FaGitAlt } from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di';
import { AiOutlineApi } from 'react-icons/ai';
import { SiMongodb, SiPostman, SiVisualstudiocode, SiOpenai } from 'react-icons/si';

// Define the type for tool names
type ToolName =
  | 'Chrome'
  | 'VSCode'
  | 'Git'
  | 'ChatGPT'
  | 'MongoDBCompass'
  | 'Postman';

// Define the icon object type
type ToolObject = {
  icon: IconType;
  color: string;
};

// Create the tools object with icons and colors
export const toolsAndSoftware: { [key in ToolName]: ToolObject } = {
  Chrome: { icon: FaChrome, color: '#f4ba13' },
  VSCode: { icon: SiVisualstudiocode, color: '#007ACC' },
  Git: { icon: FaGitAlt, color: '#F05032' },
  ChatGPT: { icon: SiOpenai, color: '#10A37F' },
  MongoDBCompass: { icon: SiMongodb, color: '#47A248' },
  Postman: { icon: SiPostman, color: '#FF6C37' }
};

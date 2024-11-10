/* eslint-disable jsx-a11y/alt-text */
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { icons } from './icons'
import { toolsAndSoftware } from './toolsAndSoftware'

type IconProps = {
  name: keyof typeof icons
  size?: number
  color?: string
}


const IconRenderer: React.FC<IconProps> = ({ name, size = 50, color }) => {
  const { icon: IconComponent, color: defaultColor } = icons[name];
  return <IconComponent size={size} color={color || defaultColor} />;
};

// tools and software 
type ToolProps = {
  name: keyof typeof toolsAndSoftware;
  size?: number;
};

const ToolRenderer: React.FC<ToolProps> = ({ name, size = 40 }) => {
  const { icon: ToolIcon, color } = toolsAndSoftware[name];
  return <ToolIcon size={size} color={color} />;
};



export default function Skill() {
  const skills: Array<keyof typeof icons> = [
    'HTML',
    'CSS',
    'Tailwind',
    'MUI',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'NextJS',
    'NodeJS',
    'ExpressJS',
    'GitHub',
    'MongoDB',
    // 'Prisma',
     'Firebase'
  ] 


  // tools and software i use 
  const tools: Array<keyof typeof toolsAndSoftware> = [
    'Chrome',
    'VSCode',
    'Git',
    'ChatGPT',
    'MongoDBCompass',
    'Postman'
  ];

  

  return (
    <section className='pt-24'>
      <div className='container max-w-6xl'>
        <Link
          href='/'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to Home</span>
        </Link>

        <div className='text-center'>
          <h2 className='font-bold text-4xl'>Skills</h2>
          <div className='flex justify-center flex-wrap   gap-10 py-10'>
            {skills.map(skill => (
              <IconRenderer key={skill} name={skill} size={50}  />
            ))}
          </div>
        </div>


        {/* tools i use  */}

        <div className='text-center'>
        <h2 className='font-bold text-3xl'>Tools and Software</h2>
      <div className='flex justify-center flex-wrap   gap-10 py-10'>
        {tools.map((tool) => (
          <ToolRenderer key={tool} name={tool} />
        ))}
      </div>
        </div>
    
      </div>
    </section>
  
  )
}

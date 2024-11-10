/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    git:"https://github.com/mdmehedihasan-dev/Social-Connect",
    name: 'Chatting Application',
    href: 'https://socialconnectme.netlify.app/',
    image: '/images/projects/chat.png'
  },
  { git:"https://github.com/mdmehedihasan-dev/DevJobs_Frontend",
    name: 'Job Portal Application',
    href: 'https://devjobsme.netlify.app/',
    image: '/images/projects/job.png'
  },

  { git:"https://github.com/mdmehedihasan-dev/Orabi-Frontend",
    name: 'Orabi E-Commerce',
    href: 'https://orabifrontend.netlify.app/',
    image: '/images/projects/orabi.png'
  },
  { git:"https://github.com/mdmehedihasan-dev/HMS_USER_SITE",
    name: 'Hospital Management',
    href: 'https://hchusersite.netlify.app/',
    image: '/images/projects/hms.png'
  },
  { git:"https://github.com/mdmehedihasan-dev/Food-Planet",
    name: 'Resturent Menu',
    href: 'https://food-planetsite.netlify.app/',
    image: '/images/projects/food.png'
  },
]

export default async function ProjectsPage() {
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

        <div className='block w-full flex-wrap justify-between gap-3 lg:flex'>
          {projects.map(project => (
            <div className='h-72 w-full rounded-md transition-all duration-500 ease-in-out hover:scale-105 lg:w-[45%]'>
              <Image
                className='w-full rounded-tl-md rounded-tr-md'
                src={project.image}
                width={500}
                height={500}
                alt='project-photo'
              />
              <div className='text-center'>
                <a href={project.git}   target='_blank'
                  rel='noreferrer noopener' className='font-bold text-xl'>{project.name}</a>

                <a
                  href={project.href}
                  target='_blank'
                  rel='noreferrer noopener'
                  className='inline-block w-full rounded-bl-md rounded-br-md bg-slate-300 py-2 font-bold capitalize text-black hover:bg-slate-400'
                >
                  live view
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

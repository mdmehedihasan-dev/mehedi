import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

// Sample educational details
const educationData = [
  {
    // degree: 'Mern Stack Develoment',
    // institution: 'Creative IT Institute',
    // date: '2018 - 2022'
  },
  {
    degree: 'Bachelor of Computer Science & Engineering',
    institution: 'University of South Asia',
    date: '2018 - 2022'
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'Govt. Sha Sultan Collage, Bogura',
    date: '2015 - 2017'
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'Uttaran High School, Naruli Bogra',
    date: '2014 - 2015'
  }
]

export default function Education() {
  return (
    <section className='pt-5'>
      <div className='max-w-7xl'>
        <div className='block items-center justify-between lg:flex'>
          <div className='mb-10 w-full lg:mb-0 lg:mt-0 lg:w-[45%]'>
            <h2 className='title py-5'>Education History</h2>
            <div className=''>
              {educationData.map((edu, index) => (
                <div key={index} className='border-b border-muted pb-4'>
                  <h3 className='text-xl font-semibold'>{edu.degree}</h3>
                  <p className='text-muted-foreground'>{edu.institution}</p>
                  {/* <span className='text-sm font-light text-muted'>
                    {edu.date}
                  </span> */}
                </div>
              ))}
            </div>
          </div>
          <div className='w-full lg:w-[45%]'>
            <h2 className='title'>About My Education</h2>
            <p className='pt-5 text-muted-foreground'>
              Here, I share details about my academic journey, where I gained
              knowledge and skills that have prepared me for my career in tech.
              From foundational studies to specialized courses, my education has
              played a significant role in shaping my expertise and dedication
              to continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

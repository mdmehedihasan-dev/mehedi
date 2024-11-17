import Link from 'next/link'
import VideoComponent from './VideoComponent'

export default async function RecentProjects() {

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent projects</h2>

        <div className='block lg:flex gap-x-5 ' >

        <VideoComponent/>
        <div className='lg:w-1/2 w-full'>
          <h3 className='font-bold text-xl mt-5 sm:mt-0'>Share Your Thought (SYT): A Facebook-Inspired Social Platform (In Progress)
          </h3>
          <p className='text-muted-foreground py-10 '>
          SYT is a social media platform. The main functions of the platform include: uploading a profile photo, uploading a cover photo, creating a post, sending a friend request, adding friends, canceling requests, live search function, and more. It is built with React JS, Tailwind CSS, Redux Toolkit, Express JS, Node JS, and MongoDB.
          </p>
        </div>
        </div>

        <Link
          href='/projects'
          className='mt-2 lg:mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  )
}

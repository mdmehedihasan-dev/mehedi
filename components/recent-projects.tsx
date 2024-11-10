import Link from 'next/link'
import VideoComponent from './VideoComponent'

export default async function RecentProjects() {

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Running projects</h2>

        <div className='block lg:flex gap-x-5 ' >

        <VideoComponent/>
        <div className='lg:w-1/2 w-full'>
          <h3 className='font-bold text-xl mt-5 sm:mt-0'>Social Media: A Facebook-Inspired Social Platform (In Progress)
          </h3>
          <p className='text-muted-foreground py-10 '>
          Currently developing, Social Connect is a social media platform designed to foster community and connection through familiar yet dynamic features. This project, inspired by Facebook, is progressing towards enabling users to share posts, comment, like, and build connections in a seamless environment. While many core functionalities are underway, I am actively working on refining and expanding features to enhance interactivity and user experience. Stay tuned as I continue to bring this vision to life, aiming to create a versatile and engaging platform for users to connect in new ways!
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

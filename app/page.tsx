import Education from '@/components/education'
import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'

export default function Home() {
  return (
    <section className='pt-24'>
      <div className='container max-w-6xl'>
        <Intro />
        <Education/>
        <RecentPosts />
        <RecentProjects />
      </div>
    </section>
  )
}

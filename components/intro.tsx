import Image from 'next/image'
import authorImage from '@/public/images/authors/mehedi.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hi, I&apos;m Mehedi Hasan!</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          A passionate React and MERN stack developer with a keen eye for
          front-end design and an eagerness to bring creative ideas to life
          through clean, efficient code. With strong skills in HTML, CSS,Tailwind CSS,
          JavaScript,TypeScript, React Js, Next Js,  and Redux Toolkit, I&apos;m constantly
          exploring new technologies, currently diving into Node Js. Whether
          it’s building intuitive user interfaces or implementing seamless
          interactivity, I’m committed to creating high-quality digital
          experiences. Welcome to my portfolio—let&apos;s build something
          amazing together!
        </p>
      </div>
      <div className='relative'>
        <Image
          className='rounded-md grayscale'
          src={authorImage}
          alt='Mehedi Hasan'
          width={300}
          height={200}
          priority
        />
      </div>
    </section>
  )
}

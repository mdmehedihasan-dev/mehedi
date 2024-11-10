import ContactForm from '@/components/contact-form'
import ContactInfo from '@/components/contact-info'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Contact() {
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
        <div className='block items-center justify-between lg:flex'>
          <div className='mb-10 lg:mb-0 w-full lg:mt-0 lg:w-[45%]'>
            <h2 className='title'>Directly Contact</h2>
            <ContactInfo />
          </div>
          <div className='w-full lg:w-[45%]'>
            <h2 className='title'>Let&apos;s talk about your project</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

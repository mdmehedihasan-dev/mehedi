
export default async function RecentPosts() {
  return (
    <section className='pb-24 pt-5 flex justify-between items-center'>
      <div>
          <h2 className='title mb-6'>Recent Posts</h2>
        <div>
          <p className='text-muted-foreground'>
            Node.js offers powerful file system capabilities, making it a great
            choice for handling files in server-side applications. This guide
            explores how to work with Node.js’s file system module (fs),
            breaking down how to read, write, update, delete, and manage files
            effectively.
            <a
              className='font-bold ml-3 text-blue-600'
              href='https://medium.com/@mdmehedihasanm/file-system-in-node-js-a-guide-to-managing-files-efficiently-33d971e61e76'
            >
              Read more
            </a>
          </p>
        </div>
        <div className='my-5 h-[1px] w-full bg-muted-foreground'></div>
        <div>
          <p className='text-muted-foreground'>
            In this post, we’ll explore what events are in Node.js, how they
            work, and why they’re essential for developers looking to make the
            most of this platform
            <a
              className='font-bold ml-3 text-blue-600'
              href='https://medium.com/@mdmehedihasanm/events-in-node-js-the-backbone-of-asynchronous-programming-7c6765e34674'
            >
              Read more
            </a>
          </p>
        </div>
      </div>
     
    </section>
  )
}

interface Item {
    image: string;
    title: string;
    description: string;
    buttons: {
      primary: {
        text: string;
        link: string;
      };
      secondary: {
        text: string;
        link: string;
      };
    };
  }
  
  // Array of items
  const items: Item[] = [
    { 
      image: "/images/projects/chat.png",
      title: "Learn Next.js Basics",
      description: "Start with the fundamentals of Next.js and build powerful web applications.",
      buttons: {
        primary: {
          text: "Live View",
          link: "/learn-nextjs/basics"
        },
        secondary: {
          text: "source code",
          link: "/docs/nextjs-basics"
        }
      }
    },
    {
      image: "/images/projects/chat.png",
      title: "Advanced Next.js Concepts",
      description: "Explore advanced topics in Next.js, including SSR, ISR, and API routes.",
      buttons: {
        primary: {
          text: "Live View",
          link: "/learn-nextjs/advanced"
        },
        secondary: {
          text: "sourc code",
          link: "/support/nextjs-advanced"
        }
      }
    },
    {
      image: "/images/projects/chat.png",
      title: "Deploying Next.js Applications",
      description: "Learn how to deploy Next.js applications for scalability and performance.",
      buttons: {
        primary: {
          text: "Live View",
          link: "/learn-nextjs/deployment"
        },
        secondary: {
          text: "source code",
          link: "/guides/nextjs-deployment"
        }
      }
    }
  ];
  
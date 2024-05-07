export const data = {
  projects: [
    {
      id: '01',
      title: 'todo web app',
      description:
        'The classic todo app with a few twists! This app includes a dark/light theme toggle and filter buttons.',
      img: 'todo-app-desktop.jpeg',
      github: 'https://github.com/samuel-adu/Todo-App',
      liveUrl: 'https://todo-app-lilac-three.vercel.app',
      tools: ['React', 'context-api'],
    },
    {
      id: '02',
      title: 'space tourism website',
      description:
        'This is a multi-page mobile responsive website built with React and data from a JSON file.',
      img: 'space-tourism-desktop.jpeg',
      github: 'https://github.com/samuel-adu/space-tourism-website',
      liveUrl: 'http://space-tourism-website-beta.vercel.app/',
      tools: ['react-router', 'react'],
    },
    {
      id: '03',
      title: 'advice app',
      description:
        'This app generates random quotes of advice from the Advice Slip API.',
      img: 'advice-app-desktop.jpeg',
      github: 'https://github.com/samuel-adu/advice-generator-app',
      liveUrl: 'http://advice-generator-app-dun.vercel.app/',
      tools: ['React', 'API'],
    },
  ],
  skills: [
    {
      id: '01',
      name: 'HTML',
      icon: 'html.svg',
    },
    {
      id: '02',
      name: 'CSS',
      icon: 'css.svg',
    },
    {
      id: '03',
      name: 'JavaScript',
      icon: 'javascript.svg',
    },
    {
      id: '04',
      name: 'React.js',
      icon: 'react.svg',
    },
    {
      id: '05',
      name: 'TypeScript',
      icon: 'typescript.svg',
    },
    {
      id: '06',
      name: 'Next.js',
      icon: 'next.js.svg',
    },
    {
      id: '07',
      name: 'Tailwind CSS',
      icon: 'tailwind-css.svg',
    },
    {
      id: '08',
      name: 'Sass',
      icon: 'sass.svg',
    },
    {
      id: '09',
      name: 'Git',
      icon: 'git.svg',
    },
  ],
  experience: [
    {
      jobTitle: 'frontend developer',
      company: 'orda africa',
      startDate: 'dec 2022',
      endDate: 'nov 2023',
      location: 'lagos',
      responsibilties: [
        'Translated design wireframes to actual code that produced visual elements of the application, while collaborating with backend developers for seamless integration.',
        'Developed and maintained frontend for web apps, emphasising performance and cross-browser compatibility.',
        'Implemented the Mobile First approach in the redesign of existing websites, resulting in a significant improvement in mobile responsiveness and user engagement metrics.',
        'Collaborated with backend developers to seamlessly integrate UI components with APIs and databases.',
        'Implemented the BEM methodology to create scalable and maintainable CSS architecture.',
        'Wrote functional requirement documents and guides for seamless understanding of projects.',
      ],
    },
  ],
};

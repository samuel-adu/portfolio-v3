import React from 'react';
import { FaGraduationCap, FaReact, FaCode } from 'react-icons/fa6';

export const experience = [
  {
    icon: React.createElement(FaReact),
    title: 'Frontend Developer',
    company: 'Orda Africa',
    date: 'Dec 2022 - Present',
    location: 'lagos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quae, minima quisquam alias sed, quod accusantium eveniet cum aliquam aut illum commodi sapiente placeat dolores nisi maiores nam? Porro, ratione!',
  },
  {
    icon: React.createElement(FaCode),
    title: 'Web Developer',
    company: 'Alpine Green Technology',
    date: 'Dec 2021 - Nov 2022',
    location: 'lagos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quae, minima quisquam alias sed, quod accusantium eveniet cum aliquam aut illum commodi sapiente placeat dolores nisi maiores nam? Porro, ratione!',
  },
  {
    icon: React.createElement(FaGraduationCap),
    title: 'Graduate',
    company: 'Scrimba Bootcamp',
    date: 'Aug 2022',
    location: 'lagos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quae, minima quisquam alias sed, quod accusantium eveniet cum aliquam aut illum commodi sapiente placeat dolores nisi maiores nam? Porro, ratione!',
  },
];

export const projects = [
  // {
  //   title: 'Orda Africa',
  //   description:
  //     'Orda Africa’s product website allows merchants and visitors to request product demos online. Using React, Typescript, and Sass, I developed different components implemented on the front end of this site.',
  //   img: 'orda-africa.png',
  //   github: '',
  //   liveUrl: 'https://orda.africa/',
  //   tools: ['React', 'Rest API'],
  // },
  {
    title: 'Sneakers Product Page',
    description:
      'Orda Africa’s product website allows merchants and visitors to request product demos online. Using React, Typescript, and Sass, I developed different components implemented on the front end of this site.',
    img: 'sneakers-product-page.jpg',
    github: '',
    liveUrl: 'https://orda.africa/',
    tools: ['React', 'Rest API'],
  },
  {
    title: 'Rest Country',
    description:
      'I developed this single-page web application using React, it integrates with the REST Countries API to display country information. React Router facilitates page navigation, and Context API manages app state for toggling between light and dark modes.',
    img: 'rest-countries.jpg',
    github: 'https://github.com/samuel-adu/rest-countries-api',
    liveUrl: 'http://rest-countries-api-black.vercel.app/',
    tools: ['React', 'Rest API'],
  },
  {
    title: 'todo web app',
    description:
      'I created a React Todo Web App enabling users to add, complete, and delete tasks while filtering by status. The app integrates the Context API for state management, accommodating seamless toggling between light and dark modes.',
    img: 'todo-web-app.jpeg',
    github: 'https://github.com/samuel-adu/Todo-App',
    liveUrl: 'https://todo-app-lilac-three.vercel.app',
    tools: ['React', 'Context-API'],
  },
];

export const skills = [
  {
    name: 'HTML',
    icon: 'html.svg',
  },
  {
    name: 'CSS',
    icon: 'css.svg',
  },
  {
    name: 'JavaScript',
    icon: 'javascript.svg',
  },
  {
    name: 'React.js',
    icon: 'react.svg',
  },
  {
    name: 'TypeScript',
    icon: 'typescript.svg',
  },
  {
    name: 'Next.js',
    icon: 'next.js.svg',
  },
  {
    name: 'Git',
    icon: 'git.svg',
  },
];

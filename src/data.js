import React from 'react';
import { FaGraduationCap, FaReact, FaCode } from 'react-icons/fa6';
import audiophilePreview from './assets/images/audiophile-preview.jpeg';
import sneakersPreview from './assets/images/sneakers-preview.jpeg';
import restCountryPreview from './assets/images/rest-country-preview.jpeg';
import spaceTourismPreview from './assets/images/space-tourism.jpeg';
import todoPreview from './assets/images/todo.jpeg';
import micrositePreview from './assets/images/microsite.jpeg';

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
  {
    title: 'Orda Africa Microsite',
    description:
      "Orda Africa's lightweight, mobile-optimized website that can be set up and customized in seconds for merchant to display their product.",
    img: micrositePreview,
    github: '',
    liveUrl: 'https://fortyfourbukaz.africa.restaurant',
    tools: [],
  },
  {
    title: 'Audiophile Website',
    description:
      'A multi-page e-commerce website with complete checkout flow, built using React, Redux, React-Router, React-Hook-Form and TailwindCSS.',
    img: audiophilePreview,
    github: 'https://github.com/samuel-adu/audiophile',
    liveUrl: 'https://audiophile-by-samuel-adu.vercel.app',
    tools: ['React', 'Redux', 'React-Router'],
  },

  {
    title: 'Sneakers Product Page',
    description:
      'An e-commerce product page with a lightbox product gallery and cart functionality. Built using React, TypeScript and Context-API.',
    img: sneakersPreview,
    github: 'https://github.com/samuel-adu/sneakers-product-page',
    liveUrl: 'https://sneakers-product-page-by-samuel-adu.vercel.app',
    tools: ['React', 'TypeScript', 'Context API'],
  },
  {
    title: 'Rest Country Website',
    description:
      'A website that displays country information from the REST Countries API. User can search for country, filter by region and also toggle between light and darkmode.',
    img: restCountryPreview,
    github: 'https://github.com/samuel-adu/rest-country',
    liveUrl: 'https://rest-country-by-samuel-adu.vercel.app/',
    tools: ['React', 'React Router', 'Context API'],
  },
  {
    title: 'Todo Web App',
    description:
      'The classic todo app that allows user to add, delete and filter tasklist. Built using React and used Context API to manage theme state.',
    img: todoPreview,
    github: 'https://github.com/samuel-adu/todo-app',
    liveUrl: 'http://todo-app-lilac-three.vercel.app',
    tools: ['React', 'Context API'],
  },
  {
    title: 'Space Tourism Website',
    description:
      'A multi-page space tourism website that provides information about a space exploration program. Built using React and used React Router for page routing.',
    img: spaceTourismPreview,
    github: 'https://github.com/samuel-adu/space-tourism-website',
    liveUrl: 'http://space-tourism-website-beta.vercel.app',
    tools: ['React', 'React-Router'],
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
    name: 'TypeScript',
    icon: 'typescript.svg',
  },
  {
    name: 'React',
    icon: 'react.svg',
  },
  {
    name: 'Sass',
    icon: 'sass.svg',
  },
  {
    name: 'TailwindCSS',
    icon: 'tailwind-css.svg',
  },
  {
    name: 'Figma',
    icon: 'figma.svg',
  },
  {
    name: 'Git',
    icon: 'git.svg',
  },
];

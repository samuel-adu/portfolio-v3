import React from 'react';
import { FaGraduationCap, FaReact, FaCode } from 'react-icons/fa6';
import AudiophileImage from './assets/images/audiophile.jpeg';
import sneakersProductPage from './assets/images/sneakers-product-page.jpeg';
import restCountry from './assets/images/rest-country-website.jpeg';

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
    title: 'Audiophile E-commerce Website',
    description:
      'A multi-page e-commerce website built using React, Redux for state management, React-Router for page navigation, and React-Hook-Form for form validation.',
    img: AudiophileImage,
    github: 'https://github.com/samuel-adu/audiophile',
    liveUrl: 'https://audiophile-by-samuel-adu.vercel.app',
    tools: ['React', 'Rest API'],
  },

  {
    title: 'Sneakers Product Page',
    description:
      'An e-commerce product page with the complete checkout flow and a lightbox gallery built using React, TypeScript and used Context-API for state management.',
    img: sneakersProductPage,
    github: 'https://github.com/samuel-adu/sneakers-product-page',
    liveUrl: 'https://sneakers-product-page-by-samuel-adu.vercel.app',
    tools: ['React', 'Rest API'],
  },
  {
    title: 'Rest Country Website',
    description:
      'A single-page website that displays country information from the REST Countries API. You can search for country, filter by region and also toggle between light and darkmode ',
    img: restCountry,
    github: 'https://github.com/samuel-adu/rest-country',
    liveUrl: 'https://rest-country-by-samuel-adu.vercel.app/',
    tools: ['React', 'Rest API'],
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

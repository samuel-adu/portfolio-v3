import React from 'react';
import { FaGraduationCap, FaReact, FaCode } from 'react-icons/fa6';
import audiophilePreview from './assets/images/audiophile-preview.jpeg';
import restCountryPreview from './assets/images/rest-country-preview.jpeg';
import spaceTourismPreview from './assets/images/space-tourism.jpeg';
// import sneakersPreview from './assets/images/sneakers-preview.jpeg';
// import todoPreview from './assets/images/todo.jpeg';
// import productListWithCart from './assets/images/product-list-with-cart.jpeg';

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
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with cart, checkout, form validation and fully responsive, offering a seamless user experience across all devices.',
    img: audiophilePreview,
    github: 'https://github.com/samuel-adu/audiophile',
    liveUrl: 'https://audiophile-by-samuel-adu.vercel.app',
    tools: ['Redux', 'React-Router', 'React-Hook-Form'],
  },
  {
    title: 'Rest Country Website',
    description:
      'A dynamic website that integrates the Rest Country API, supports search and region-based filtering, border navigation, and light/dark mode toggle',
    img: restCountryPreview,
    github: 'https://github.com/samuel-adu/rest-country',
    liveUrl: 'https://rest-country-by-samuel-adu.vercel.app/',
    tools: ['React', 'React Router', 'Context API'],
  },
  {
    title: 'Space Tourism Website',
    description:
      'A responsive multi-page space tourism website with tabbed navigation for viewing detailed information, and interactive hover states for all elements.',
    img: spaceTourismPreview,
    github: 'https://github.com/samuel-adu/space-tourism-website',
    liveUrl: 'http://space-tourism-website-beta.vercel.app',
    tools: ['React', 'React-Router'],
  },
  // {
  //   title: 'Product List with Cart',
  //   description:
  //     "Orda Africa's lightweight, mobile-optimized website that can be set up and customized in seconds for merchant to display their product.",
  //   img: productListWithCart,
  //   github: 'https://github.com/samuel-adu/product-list-with-cart',
  //   liveUrl: 'https://product-list-with-cart-by-samuel-adu.vercel.app/',
  //   tools: ['React', 'TypeScript'],
  // },
  // {
  //   title: 'Sneakers Product Page',
  //   description:
  //     'A responsive e-commerce product page with a lightbox gallery, thumbnail image switching, and full cart functionality.',
  //   img: sneakersPreview,
  //   github: 'https://github.com/samuel-adu/sneakers-product-page',
  //   liveUrl: 'https://sneakers-product-page-by-samuel-adu.vercel.app',
  //   tools: ['React', 'TypeScript', 'Context API'],
  // },
  // {
  //   title: 'Todo Web App',
  //   description:
  //     'A responsive todo app with features to add, complete, delete, and filter tasks, toggle light/dark mode, and interact with hover states.',
  //   img: todoPreview,
  //   github: 'https://github.com/samuel-adu/todo-app',
  //   liveUrl: 'http://todo-app-lilac-three.vercel.app',
  //   tools: ['React', 'Context API'],
  // },
];

export const skills = [
  {
    name: 'React',
    icon: 'react.svg',
  },
  {
    name: 'TypeScript',
    icon: 'typescript.svg',
  },
  {
    name: 'JavaScript',
    icon: 'javascript.svg',
  },
  {
    name: 'TailwindCSS',
    icon: 'tailwind-css.svg',
  },
  {
    name: 'Sass',
    icon: 'sass.svg',
  },
  {
    name: 'CSS',
    icon: 'css.svg',
  },
  {
    name: 'HTML',
    icon: 'html.svg',
  },
  {
    name: 'Git',
    icon: 'git.svg',
  },
  // {
  //   name: 'Figma',
  //   icon: 'figma.svg',
  // },
];

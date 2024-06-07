import {
  css,
  figma,
  git,
  github2,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  postgre,
} from '../assets/img/tech';
import { met, weather, todos, gadgets } from '../assets/img/projects';

import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contacts',
    title: 'Contacts',
  },
];

export const navIcons = [
  {
    id: BsGithub,
    link: 'https://github.com/ViktoriiaRepo',
    icon: BsGithub,
  },
  {
    id: BsLinkedin,
    link: 'https://www.linkedin.com/in/viktoriia-zaitseva-582303290/',
    icon: BsLinkedin,
  },
];

export const experience = [
  {
    id: 'html',
    title: 'HTML5',
    icon: html,
  },
  {
    id: 'css',
    title: 'CSS',
    icon: css,
  },
  {
    id: 'js',
    title: 'JavaScript',
    icon: javascript,
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figma,
  },
  {
    id: 'react',
    title: 'React',
    icon: reactjs,
  },
  {
    id: 'redux',
    title: 'Redux',
    icon: redux,
  },
  {
    id: 'node',
    title: 'Node.js',
    icon: nodejs,
  },
  {
    id: 'mongo',
    title: 'Mongo DB',
    icon: mongodb,
  },
  {
    id: 'Tailwind',
    title: 'Tailwind',
    icon: tailwind,
  },
  {
    id: 'github',
    title: 'Github',
    icon: github2,
  },
  {
    id: 'git',
    title: 'Git',
    icon: git,
  },
  {
    id: 'typescript',
    title: 'Typescript',
    icon: typescript,
  },
  {
    id: 'postgre',
    title: 'PostgreSQL',
    icon: postgre,
  },
];

export const projects = [
  {
    name: 'Nice Gadgets',
    description:
      'Team project! With a sleek design and intuitive features, Nice Gadgets offers users the ability to explore and shop for their favorite tech products.',
    tags: [
      {
        name: 'react',
        color: 'text-[#2cc7fa] text-shadow',
      },
      {
        name: 'scss',
        color: 'text-[#fefe47] text-shadow',
      },
      {
        name: 'ts',
        color: 'text-[#ff57bc] text-shadow',
      },
      {
        name: 'openai',
        color: 'text-[#ce58f9] text-shadow',
      },
      {
        name: 'three.js',
        color: 'text-[#2cc7fa] text-shadow',
      },
    ],
    image: gadgets,
    link: 'https://github.com/fs-jan24-codeup/phone-catalog',
  },
  {
    name: 'Todo App',
    description:
      'This project is a simple Todo App designed to help users organize their tasks. It provides an easy-to-use interface for adding, deleting, updating, and sorting tasks.',
    tags: [
      {
        name: 'html',
        color: 'text-[#2cc7fa] text-shadow',
      },
      {
        name: 'css',
        color: 'text-[#fefe47] text-shadow',
      },
      {
        name: 'js',
        color: 'text-[#ff57bc] text-shadow',
      },
      {
        name: 'react',
        color: 'text-[#ce58f9] text-shadow',
      },
      {
        name: 'bulma',
        color: 'text-[#2cc7fa] text-shadow',
      },
      {
        name: 'ts',
        color: 'text-[#fefe47] text-shadow',
      },
    ],
    image: todos,
    link: 'https://github.com/ViktoriiaRepo/todo-app',
  },
  {
    name: 'MET landing',
    description:
      'This project takes inspiration from the Met website, designed  to align with the original aesthetic and functionality, offering users an engaging and smooth experience.',
    tags: [
      {
        name: 'html',
        color: 'text-[#2cc7fa] text-shadow',
      },
      {
        name: 'scss',
        color: 'text-[#fefe47] text-shadow',
      },
      {
        name: 'js',
        color: 'text-[#ff57bc] text-shadow',
      },
      {
        name: 'react',
        color: 'text-[#ce58f9] text-shadow',
      },
    ],
    image: met,
    link: 'https://github.com/ViktoriiaRepo/MET-landing-page',
  },
  {
    name: 'Weather App',
    description:
      'Pet project. Weather App is a simple tool for obtaining current weather forecasts. It uses the openweathermap API to provide up-to-date weather information.',
    tags: [
      {
        name: 'html',
        color: 'text-[#2cc7fa] text-shadow',
      },
      {
        name: 'css',
        color: 'text-[#fefe47] text-shadow',
      },
      {
        name: 'js',
        color: 'text-[#ff57bc] text-shadow',
      },
    ],
    image: weather,
    link: 'https://github.com/ViktoriiaRepo/weather-app',
  },
];

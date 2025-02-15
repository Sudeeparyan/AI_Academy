import { Author, Course } from '../types';
import sudeep from './img/SudeepProfile.jpg';

export const authors: Author[] = [
  {
    id: '1',
    name: 'Sudeep Aryan G',
    role: 'AI Research Scientist',
    bio: 'Leading Generative AI researcher with 3+ years of experience in machine learning and Deep Learning. Previously working in Soliton Technology.',
    imageUrl: sudeep,
    links: {
      github: 'https://github.com/Sudeeparyan',
      linkedin: 'https://www.linkedin.com/in/sudeep-aryan/',
      website: 'https://sudeeparyan.github.io/',
    },
  },
  {
    id: '2',
    name: 'Vignesh A',
    role: 'ML Engineering Lead',
    bio: 'Specialized in practical applications of AI in production environments. Author of "Production-Ready ML Systems".',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      website: 'https://example.com',
    },
  },
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Generative AI from Scratch',
    description: 'Build and train neural networks from the ground up. Learn the mathematics and intuition behind deep learning.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=400',
    duration: '8 weeks',
    level: 'Intermediate',
    author: authors[0],
    tags: ['Deep Learning', 'Python', 'Mathematics'],
  },
  {
    id: '2',
    title: 'Production ML Systems',
    description: 'Learn how to deploy and scale machine learning models in production environments.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400',
    duration: '6 weeks',
    level: 'Advanced',
    author: authors[1],
    tags: ['MLOps', 'DevOps', 'Python'],
  },
];
import { Author, Course } from '../types';

export const authors: Author[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    role: 'AI Research Scientist',
    bio: 'Leading AI researcher with 10+ years of experience in machine learning and neural networks. Previously worked at DeepMind and Google Brain.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      website: 'https://example.com',
    },
  },
  {
    id: '2',
    name: 'James Wilson',
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
    title: 'Neural Networks from Scratch',
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
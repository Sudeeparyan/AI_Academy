export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  author: Author;
  tags: string[];
}

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}
import React from 'react';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { Author } from '../types';
import { Card } from './ui/Card';

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4">
        <img
          src={author.imageUrl}
          alt={author.name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold text-white">{author.name}</h3>
          <p className="text-indigo-400">{author.role}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-400">{author.bio}</p>
      <div className="mt-4 flex space-x-4">
        {author.links.github && (
          <a
            href={author.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        {author.links.linkedin && (
          <a
            href={author.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {author.links.twitter && (
          <a
            href={author.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
        {author.links.website && (
          <a
            href={author.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Globe className="w-5 h-5" />
          </a>
        )}
      </div>
    </Card>
  );
}
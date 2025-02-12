import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import { Course } from '../types';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden hover:border-gray-600 transition-colors">
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="success">{course.level}</Badge>
          <div className="flex items-center text-gray-400 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {course.duration}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
        <p className="text-gray-400 mb-4">{course.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={course.author.imageUrl}
              alt={course.author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-300 text-sm">{course.author.name}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <BookOpen className="w-4 h-4 mr-1" />
            View Course
          </div>
        </div>
      </div>
    </Card>
  );
}
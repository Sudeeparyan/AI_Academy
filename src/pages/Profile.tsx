import React from 'react';
import { User, Mail, Phone, MapPin, Link as LinkIcon, Calendar } from 'lucide-react';
import { Card } from '../components/ui/Card';

export function Profile() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
    joinDate: 'January 2024',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'Senior AI Developer passionate about machine learning and neural networks. Contributing to open-source projects and teaching others about AI development.',
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          {/* Cover Image */}
          <div className="h-32 bg-gradient-to-r from-purple-400 to-indigo-500" />
          
          {/* Profile Info */}
          <div className="relative px-6 pb-6">
            {/* Avatar */}
            <div className="absolute -top-16 left-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800"
              />
            </div>
            
            {/* User Details */}
            <div className="pt-20">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {user.name}
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {user.bio}
              </p>
              
              {/* Contact Information */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <LinkIcon className="w-5 h-5 mr-2" />
                  <a href={user.website} className="text-purple-500 hover:text-purple-600">
                    {user.website}
                  </a>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Joined {user.joinDate}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
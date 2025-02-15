import React, { useState } from 'react';
import { User, LogOut, Settings } from 'lucide-react';
import sudeep from '../data/img/SudeepProfile.jpg';

const userMenu = [
  { label: 'Profile', icon: User, href: '/profile' },
  { label: 'Settings', icon: Settings, href: '/settings' },
  { label: 'Sign out', icon: LogOut, href: '/logout' },
];

export function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <img
          src={sudeep}
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-md shadow-xl z-50 border border-gray-200 dark:border-gray-700">
          {userMenu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-purple-500 dark:hover:text-white"
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
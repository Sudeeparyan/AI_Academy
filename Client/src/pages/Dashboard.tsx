import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Brain, Cloud, Cog } from 'lucide-react';
import Dashboard1 from './Dashboard1';
const hubs = [
  {
    title: 'AI HUB',
    icon: Brain,
    description: 'Explore AI/ML fundamentals, RAG systems, agents, and more.',
    color: 'from-purple-400 to-indigo-500',
    path: '/ai-hub'
  },
  {
    title: 'Azure HUB',
    icon: Cloud,
    description: 'Master cloud computing with Microsoft Azure services.',
    color: 'from-blue-400 to-cyan-500',
    path: '/azure-hub'
  },
  {
    title: 'DevOps HUB',
    icon: Cog,
    description: 'Learn modern DevOps practices and tools.',
    color: 'from-green-400 to-emerald-500',
    path: '/devops-hub'
  }
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to AI Academy</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Choose a learning path to begin your journey
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hubs.map((hub) => {
          const Icon = hub.icon;
          return (
            <Card key={hub.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${hub.color}`} />
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${hub.color} bg-opacity-10`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {hub.title}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {hub.description}
                </p>
                <Link
                  to={hub.path}
                  className="block w-full px-4 py-2 text-center bg-gray-900 dark:bg-gray-800 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Progress */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Progress</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Current Learning Path
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">AI/ML Basics</span>
                <span className="text-sm text-purple-500">60% Complete</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Next Recommended
            </h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Brain className="w-5 h-5 mr-2" />
                <span>Introduction to RAG Systems</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Cloud className="w-5 h-5 mr-2" />
                <span>Azure AI Services Overview</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div>
        <Dashboard1/>
      </div>
    </div>
  );
}
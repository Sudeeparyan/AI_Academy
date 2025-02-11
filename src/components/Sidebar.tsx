import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Brain, Cloud, Cog, Database, Bot, Cpu, GitBranch, LineChart, Layers, FileInput, Search, Sparkles, MessageSquare } from 'lucide-react';

interface NavItem {
  title: string;
  icon?: React.ElementType;
  path?: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: 'AI HUB',
    icon: Brain,
    children: [
      {
        title: 'AI/ML Basics',
        icon: Cpu,
        path: '/ai-hub/basics'
      },
      {
        title: 'RAG HUB',
        icon: Database,
        children: [
          {
            title: 'Data Ingestion',
            icon: FileInput,
            path: '/ai-hub/rag/ingestion'
          },
          {
            title: 'Retrieval',
            icon: Search,
            path: '/ai-hub/rag/retrieval'
          },
          {
            title: 'Augmentation',
            icon: Sparkles,
            path: '/ai-hub/rag/augmentation'
          },
          {
            title: 'Generation',
            icon: MessageSquare,
            path: '/ai-hub/rag/generation'
          }
        ]
      },
      {
        title: 'Agents',
        icon: Bot,
        path: '/ai-hub/agents'
      },
      {
        title: 'Fine Tuning',
        icon: GitBranch,
        path: '/ai-hub/fine-tuning'
      },
      {
        title: 'Evaluation',
        icon: LineChart,
        path: '/ai-hub/evaluation'
      },
      {
        title: 'Tracking',
        icon: Layers,
        path: '/ai-hub/tracking'
      }
    ]
  },
  {
    title: 'Azure HUB',
    icon: Cloud,
    path: '/azure-hub'
  },
  {
    title: 'DevOps HUB',
    icon: Cog,
    path: '/devops-hub'
  }
];

interface NavItemProps {
  item: NavItem;
  depth?: number;
}

function NavItemComponent({ item, depth = 0 }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const location = useLocation();
  const Icon = item.icon;
  const isActive = location.pathname === item.path;

  return (
    <div>
      {item.path ? (
        <Link
          to={item.path}
          className={`w-full flex items-center px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors ${
            isActive ? 'bg-purple-500/10 text-purple-500' : ''
          } ${depth > 0 ? 'ml-' + (depth * 4) : ''}`}
        >
          {Icon && <Icon className="w-5 h-5 mr-2" />}
          <span className="flex-1">{item.title}</span>
        </Link>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors ${
            depth > 0 ? 'ml-' + (depth * 4) : ''
          }`}
        >
          {Icon && <Icon className="w-5 h-5 mr-2" />}
          <span className="flex-1">{item.title}</span>
          <span className="ml-auto">
            {isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </span>
        </button>
      )}
      {hasChildren && isOpen && (
        <div className="mt-1">
          {item.children.map((child, index) => (
            <NavItemComponent key={index} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="hidden md:block w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto">
      <div className="p-4">
        <Link to="/" className="flex items-center space-x-2 mb-6 hover:opacity-80 transition-opacity">
          <Brain className="w-8 h-8 text-purple-500" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">AI Academy</span>
        </Link>
        <nav className="space-y-1">
          {navigation.map((item, index) => (
            <NavItemComponent key={index} item={item} />
          ))}
        </nav>
      </div>
    </div>
  );
}
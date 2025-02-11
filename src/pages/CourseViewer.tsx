import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, SkipForward, Settings } from 'lucide-react';
import { Card } from '../components/ui/Card';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
}

const mockLessons: Lesson[] = [
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    duration: '10:30',
    videoUrl: 'https://example.com/video1.mp4'
  },
  {
    id: '2',
    title: 'Understanding Neural Networks',
    duration: '15:45',
    videoUrl: 'https://example.com/video2.mp4'
  },
  {
    id: '3',
    title: 'Deep Learning Fundamentals',
    duration: '12:20',
    videoUrl: 'https://example.com/video3.mp4'
  }
];

export function CourseViewer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [selectedLesson, setSelectedLesson] = useState(mockLessons[0]);

  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  return (
    <div className="flex flex-col lg:flex-row h-full space-y-4 lg:space-y-0 lg:space-x-4">
      {/* Video Player Section */}
      <div className="flex-1">
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          {/* Video Player */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-500">Video Player</span>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-600 rounded-full mb-4">
              <div className="w-1/3 h-full bg-purple-500 rounded-full" />
            </div>

            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-purple-400 transition-colors"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-purple-400 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
                <span className="text-sm">0:00 / {selectedLesson.duration}</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <button className="flex items-center space-x-1 hover:text-purple-400 transition-colors">
                    <Settings className="w-5 h-5" />
                    <span className="text-sm">{playbackSpeed}x</span>
                  </button>
                  <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
                    <Card className="p-2 w-24">
                      {speeds.map((speed) => (
                        <button
                          key={speed}
                          onClick={() => setPlaybackSpeed(speed)}
                          className={`block w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-700 ${
                            playbackSpeed === speed ? 'text-purple-400' : 'text-gray-300'
                          }`}
                        >
                          {speed}x
                        </button>
                      ))}
                    </Card>
                  </div>
                </div>
                <button className="hover:text-purple-400 transition-colors">
                  <SkipForward className="w-5 h-5" />
                </button>
                <button className="hover:text-purple-400 transition-colors">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {selectedLesson.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Learn the fundamentals of machine learning and artificial intelligence
            through practical examples and hands-on exercises.
          </p>
        </div>
      </div>

      {/* Playlist Section */}
      <div className="w-full lg:w-80">
        <Card className="h-full overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Course Content
            </h2>
          </div>
          <div className="overflow-y-auto max-h-[300px] lg:max-h-[calc(100vh-20rem)]">
            {mockLessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setSelectedLesson(lesson)}
                className={`w-full p-4 flex items-start hover:bg-gray-800 transition-colors ${
                  selectedLesson.id === lesson.id ? 'bg-gray-800' : ''
                }`}
              >
                <div className="flex-1 text-left">
                  <h3 className="text-sm font-medium text-gray-300">{lesson.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{lesson.duration}</p>
                </div>
                <Play className="w-4 h-4 text-gray-400 mt-1" />
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
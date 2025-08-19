'use client';

import React, { useState, useRef, useEffect } from 'react';
import bg3 from '../../../public/Group2.png';
import Image from 'next/image';

interface VideoData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  duration: number;
}

const videoData: VideoData[] = [
  {
    id: 1,
    title: "Business Strategy Meeting",
    description: "Professional team discussing quarterly results and strategic planning",
    imageUrl: "/images/main-banner.png", // Using existing image from your assets
    duration: 120
  },
  {
    id: 2,
    title: "Financial Dashboard Review",
    description: "Analyzing key performance indicators and financial metrics",
    imageUrl: "/images/bg1.png",
    duration: 95
  },
  {
    id: 3,
    title: "Team Collaboration Session",
    description: "Cross-functional team working on project deliverables",
    imageUrl: "/images/bg2.png",
    duration: 150
  }
];

const VideoPlayer: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const currentVideo = videoData[currentVideoIndex];

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          if (newTime >= currentVideo.duration) {
            // Auto advance to next video
            handleNextVideo();
            return 0;
          }
          return newTime;
        });
      }, 1000);
    } else {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying, currentVideo.duration]);

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setShowPlayButton(true);
    } else {
      setIsPlaying(true);
      setShowPlayButton(false);
    }
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex(prev => (prev + 1) % videoData.length);
    setCurrentTime(0);
    setIsPlaying(false);
    setShowPlayButton(true);
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex(prev => (prev - 1 + videoData.length) % videoData.length);
    setCurrentTime(0);
    setIsPlaying(false);
    setShowPlayButton(true);
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const timeline = e.currentTarget;
    const rect = timeline.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * currentVideo.duration;
    setCurrentTime(newTime);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / currentVideo.duration) * 100;

  return (
    <div className="relative w-full max-w-4xl mx-auto ">
      {/* Video Container with rounded corners and cloud-like framing */}
      <div className="relative bg-white py-6 -mx-[16px] rounded-3xl shadow-2xl">
      <div className="relative bg-blue-50 py-6 -mx-[16px] rounded-3xl shadow-2xl">
       
      <div className="relative bg-blue-100 py-6 -mx-[16px] rounded-3xl shadow-2xl">
      {/* Cloud-like top decoration */}
       
        {/* Main Video Area */}
        <div className="relative -mx-[24px] rounded-3xl overflow-hidden h-[420px]">
          {/* Video Image/Background */}
          <div className="relative w-full h-full">
            <Image
              src={currentVideo.imageUrl}
              alt={currentVideo.title}
              fill
              className="object-cover"
              priority
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            
            {/* Video Info */}
           
            
            {/* Play Button */}
            {showPlayButton && (
              <button
                onClick={handlePlayPause}
                className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 flex items-center justify-center group"
              >
                <div className="w-0 h-0 border-l-[12px] border-l-blue-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1 group-hover:border-l-blue-700 transition-colors"></div>
              </button>
            )}
            
            {/* Video Controls */}
            <div className="absolute bottom-4 left-4 right-4">
              {/* Timeline */}
              <div 
                className="w-full h-2 bg-white bg-opacity-30 rounded-full cursor-pointer mb-2"
                onClick={handleTimelineClick}
              >
                {/* <div 
                  className="h-full bg-blue-500 rounded-full transition-all duration-200"
                  style={{ width: `${progressPercentage}%` }}
                ></div> */}
              </div>
              
              {/* Control Bar */}
             
            </div>
          </div>
        </div>
        
        {/* Video Navigation */}
        <div className="mt-2 flex justify-center space-x-2">
          {videoData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentVideoIndex(index);
                setCurrentTime(0);
                setIsPlaying(false);
                setShowPlayButton(true);
              }}
              className={`w-2 h-2 cursor-pointer rounded-full transition-all ${
                index === currentVideoIndex 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
      </div>
      </div>
      
      {/* Cloud-like bottom decoration */}
      </div>
  );
};

export default VideoPlayer;

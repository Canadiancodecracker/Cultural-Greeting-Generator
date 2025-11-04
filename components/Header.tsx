
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold font-serif-sc text-red-700">雅言阁</span>
            <span className="hidden md:block text-slate-500">|</span>
            <h1 className="hidden md:block text-xl text-slate-600">中文祝词生成器</h1>
          </div>
        </div>
      </div>
    </header>
  );
};


import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6">
      <div className="text-center text-sm text-slate-400">
        <p>由 Gemini API 强力驱动 | 雅言阁 &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

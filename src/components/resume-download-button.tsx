"use client";

import { Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResumeDownloadButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'minimal';
}

export default function ResumeDownloadButton({ 
  className = '',
  variant = 'primary' 
}: ResumeDownloadButtonProps) {
  const handleDownload = () => {
    // Create a download link
    const link = document.createElement('a');
    link.href = '/files/resume_portfolio.pdf';
    link.download = 'Amanpreet_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg",
    secondary: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600",
    minimal: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium 
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${variants[variant]} ${className}
      `}
    >
      {variant === 'minimal' ? (
        <FileText className="w-4 h-4" />
      ) : (
        <Download className="w-4 h-4" />
      )}
      {variant === 'minimal' ? 'Resume' : 'Download Resume'}
    </motion.button>
  );
}

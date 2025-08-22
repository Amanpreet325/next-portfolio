"use client"

import { Download } from "lucide-react"
import { useState } from "react"

export function CVDownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    
    try {
      // Create a download link for the resume
      const link = document.createElement('a')
      link.href = '/files/resume_portfolio.pdf' // Path to your resume file
      link.download = 'Amanpreet_Singh_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setTimeout(() => setIsDownloading(false), 1000) // Reset after 1 second
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Subtle pulsing glow effect */}
      <div className="absolute inset-0 rounded-full bg-green-400/20 animate-pulse" style={{ animationDuration: '2s' }}></div>
      
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="relative group bg-gradient-to-r from-green-500/90 to-emerald-500/90 dark:from-green-400/90 dark:to-emerald-400/90 backdrop-blur-xl border border-green-300/40 dark:border-green-400/30 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:from-green-600 hover:to-emerald-600 hover:shadow-green-500/25"
        title="Download CV - Don't miss out!"
        style={{ 
          animation: 'gentle-pulse 3s ease-in-out infinite',
        }}
      >
        <Download 
          className={`w-5 h-5 text-white transition-transform duration-300 ${
            isDownloading ? 'animate-bounce' : 'group-hover:scale-110'
          }`} 
        />
      </button>
      
      {/* Add custom CSS for smooth pulsing */}
      <style jsx>{`
        @keyframes gentle-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  )
}

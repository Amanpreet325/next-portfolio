"use client"

import { Mail, Linkedin, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

// Connect Button Demo Component
export function ConnectButtonDemo(): JSX.Element {
  const [isHovered, setIsHovered] = useState(false)
  
  const connectLinks = [
    {
      icon: Mail,
      onClick: () => {
        window.open('mailto:amanpreetsingh201946@gmail.com?subject=Let\'s Connect!&body=Hi Amanpreet! I found your portfolio and would love to connect.', '_blank')
      },
      label: "Send Email",
    },
    {
      icon: Linkedin,
      onClick: () => {
        window.open('https://www.linkedin.com/in/amanpreet-singh-62bb49251', '_blank')
      },
      label: "Connect on LinkedIn",
    },
    {
      icon: X,
      onClick: () => {
        window.open('https://x.com/amanpreetXing', '_blank')
      },
      label: "Follow on X",
    },
  ]

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Button - exactly matching View My Work button */}
      <button
        className={cn(
          "group relative px-9 py-4 rounded-full backdrop-blur-md bg-gradient-to-r from-green-600/90 to-emerald-600/90 dark:from-green-500/80 dark:to-emerald-500/80 border border-green-400/50 dark:border-green-400/30 text-white font-medium transition-all duration-300 hover:scale-105 overflow-hidden shadow-2xl hover:shadow-3xl z-[31] cursor-pointer",
          isHovered ? "opacity-0" : "opacity-100"
        )}
        style={{ pointerEvents: 'auto' }}
      >
        <span className="flex items-center justify-center px-4 py-1">
          Let's Connect
        </span>
      </button>

      {/* Hover Options */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center gap-2 rounded-full backdrop-blur-md bg-gradient-to-r from-green-600/90 to-emerald-600/90 dark:from-green-500/80 dark:to-emerald-500/80 border border-green-400/50 dark:border-green-400/30 transition-all duration-300 z-[32]",
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {connectLinks.map((link, index) => (
          <button
            key={index}
            onClick={link.onClick}
            className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200 text-white"
            title={link.label}
          >
            <link.icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  )
}

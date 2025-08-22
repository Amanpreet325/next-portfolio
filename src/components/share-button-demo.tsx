"use client"

import { Mail, Link, Linkedin, X, Copy } from "lucide-react"
import ShareButton from "@/components/ui/share-button"

// Share Button Demo Component
export function ShareButtonDemo(): JSX.Element {
  const shareLinks = [
    {
      icon: X,
      onClick: () => {
        const url = encodeURIComponent(window.location.href)
        const text = encodeURIComponent("Check out this amazing portfolio!")
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
      },
      label: "Share on Twitter",
    },
    {
      icon: Mail,
      onClick: () => {
        const subject = encodeURIComponent("Check out this amazing portfolio!")
        const body = encodeURIComponent(`I wanted to share this portfolio with you: ${window.location.href}`)
        window.open(`mailto:?subject=${subject}&body=${body}`, '_blank')
      },
      label: "Share via Email",
    },
    {
      icon: Linkedin,
      onClick: () => {
        const url = encodeURIComponent(window.location.href)
        const title = encodeURIComponent("Amazing Portfolio")
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`, '_blank')
      },
      label: "Share on LinkedIn",
    },
    {
      icon: Copy,
      onClick: () => {
        navigator.clipboard.writeText(window.location.href)
        // You could add a toast notification here
        alert('Link copied to clipboard!')
      },
      label: "Copy link",
    },
  ]

  return (
    <div className="flex justify-center">
      <ShareButton 
        links={shareLinks} 
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg font-medium px-6 py-3"
      >
        <Link size={18} />
        Share Portfolio
      </ShareButton>
    </div>
  )
}

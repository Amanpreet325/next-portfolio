"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectShowcaseProps {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectShowcase({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: ProjectShowcaseProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/50 hover:border-border transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Content Container */}
      <div className="relative h-full w-full overflow-hidden">
        {/* Background Image/Video */}
        <div className="absolute inset-0">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
          {image && !video && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          {/* Hover Overlay */}
          <div 
            className={cn(
              "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-4 md:p-6 text-white">
          {/* Top Section - Tags */}
          <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/20 text-white border-white/30 text-xs backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Bottom Section - Title and Info */}
          <div className="space-y-2 md:space-y-3">
            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            
            {/* Date */}
            <p className="text-sm text-white/80 font-medium">{dates}</p>

            {/* Description - Shows on hover */}
            <div
              className={cn(
                "transition-all duration-300 ease-out",
                isHovered 
                  ? "opacity-100 transform translate-y-0 max-h-24" 
                  : "opacity-0 transform translate-y-4 max-h-0"
              )}
            >
              <p className="text-sm text-white/90 line-clamp-3 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Links - Shows on hover */}
            <div
              className={cn(
                "flex gap-2 transition-all duration-300 delay-200",
                isHovered 
                  ? "opacity-100 transform translate-y-0" 
                  : "opacity-0 transform translate-y-4"
              )}
            >
              {links?.slice(0, 2).map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  target="_blank"
                  className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-2.5 py-1.5 transition-all duration-200 hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="text-xs">{link.icon}</span>
                  <span className="text-xs font-medium hidden sm:inline">{link.type}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Click overlay for main link */}
        {href && (
          <Link href={href} className="absolute inset-0 z-10" target="_blank">
            <span className="sr-only">View {title}</span>
          </Link>
        )}
      </div>
    </div>
  );
}

// Grid container component
export function ProjectShowcaseGrid({ 
  projects, 
  className 
}: { 
  projects: readonly any[], 
  className?: string 
}) {
  // Take only first 6 projects for this specific layout
  const displayProjects = projects.slice(0, 6);

  return (
    <div className={cn(
      "project-grid-parent max-w-7xl mx-auto",
      className
    )}>
      {displayProjects.map((project, index) => {
        const gridClass = `project-grid-div${index + 1}`;
        
        // Special z-index handling for overlapping divs
        let zIndexClass = "";
        if (index === 1) { // div2 should be on top of div1
          zIndexClass = "z-10";
        } else if (index === 0) { // div1 should be behind div2
          zIndexClass = "z-0";
        }
        
        return (
          <ProjectShowcase
            key={project.title}
            title={project.title}
            href={project.href}
            description={project.description}
            dates={project.dates}
            tags={project.technologies}
            image={project.image}
            video={project.video}
            links={project.links}
            className={cn(
              gridClass,
              zIndexClass,
              "animate-fade-in-up",
              `animation-delay-${Math.min(index * 100, 500)}`
            )}
          />
        );
      })}
    </div>
  );
}

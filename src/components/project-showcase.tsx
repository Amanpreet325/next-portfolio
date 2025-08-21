"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectShowcaseProps {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  interactiveComponent?: React.ComponentType;
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
  interactiveComponent,
  links,
  className,
}: ProjectShowcaseProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-muted/20 border border-border/50 hover:border-border transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 h-80 w-full",
        interactiveComponent ? "pointer-events-auto" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Content Container */}
      <div className="relative h-full w-full overflow-hidden">
        {/* Media Section - Full Background */}
        <div className="absolute inset-0">
          {interactiveComponent && (
            <div className="w-full h-full bg-gradient-to-br from-background to-muted/20 relative z-20 pointer-events-auto">
              {React.createElement(interactiveComponent)}
            </div>
          )}
          {!interactiveComponent && video && !video.endsWith('.gif') && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {!interactiveComponent && ((image && !video) || (video && video.endsWith('.gif'))) && (
            <Image
              src={video?.endsWith('.gif') ? video : image!}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          
          {/* Default gradient background if no media */}
          {!interactiveComponent && !video && !image && (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
          )}
          
          {/* Overlay - Always present but stronger on hover, completely disabled for interactive components */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t transition-all duration-300",
            interactiveComponent 
              ? "opacity-0 pointer-events-none" 
              : (isHovered ? "from-black/80 via-black/40 to-black/20" : "from-black/60 via-black/20 to-transparent")
          )} />
        </div>

        {/* Content Overlay - Only visible on hover for non-interactive components */}
        <div className={cn(
          "absolute inset-0 p-6 flex flex-col justify-between text-white transition-all duration-300",
          interactiveComponent ? "opacity-0 pointer-events-none" : (isHovered ? "opacity-100" : "opacity-0")
        )}>
          {/* Top Section - Tech Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/20 text-white border-white/30 text-xs backdrop-blur-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Bottom Section - Project Info */}
          <div className="space-y-3">
            {/* Title */}
            <h3 className="text-xl font-bold leading-tight">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/90 leading-relaxed line-clamp-3">
              {description}
            </p>

            {/* Additional Tech Tags */}
            <div className="flex flex-wrap gap-1">
              {tags.slice(3, 6).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs bg-white/10 border-white/30 text-white"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex gap-2">
              {links?.slice(0, 2).map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  target="_blank"
                  className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-3 py-1.5 transition-all duration-200 hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="text-xs">{link.icon}</span>
                  <span className="text-xs font-medium">{link.type}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Title Overlay - Always visible at bottom for non-interactive components */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300",
          interactiveComponent ? "opacity-0" : (isHovered ? "opacity-0" : "opacity-100")
        )}>
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>
        </div>

        {/* Click overlay for main link - completely disabled for interactive components */}
        {href && !interactiveComponent && (
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
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-4">
          Featured Projects
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
          My Work Portfolio
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl mx-auto">
          A collection of projects showcasing my expertise across different technologies and domains.
        </p>
      </div>

      {/* Projects Grid - Uniform sizing */}
      <div className={cn(
        "grid gap-6",
        // Responsive grid columns with 3 max per row
        "grid-cols-1",           // 1 column on mobile
        "md:grid-cols-2",        // 2 columns on medium screens
        "lg:grid-cols-3",        // 3 columns on large screens and above
        className
      )}>
        {projects.map((project, index) => {
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
              interactiveComponent={project.interactiveComponent}
              links={project.links}
              className={cn(
                "animate-fade-in-up",
                `animation-delay-${Math.min(index * 100, 500)}`
              )}
            />
          );
        })}
      </div>

      {/* View More Section */}
      {projects.length > 8 && (
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 transition-colors duration-200"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

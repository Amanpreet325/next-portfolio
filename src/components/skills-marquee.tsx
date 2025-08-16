"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface SkillsMarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
}

export function SkillsMarquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  ...props
}: SkillsMarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden w-full [--duration:20s] [--gap:1rem]",
        className,
      )}
    >
      <div
        className={cn(
          "flex shrink-0 justify-around gap-[var(--gap)] animate-marquee flex-row min-w-full",
          reverse && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 justify-around gap-[var(--gap)] animate-marquee flex-row min-w-full",
          reverse && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
    </div>
  );
}

const skills = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400"
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-600"
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    color: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "bg-slate-100 text-slate-600 dark:bg-slate-900/20 dark:text-slate-400"
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400"
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
  }
];

export function SkillsMarqueeSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-background via-muted/30 to-background w-full overflow-hidden max-w-7xl mx-auto">
      <div className="w-full px-4">
        {/* <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Skills & Technologies</h2>
          <p className="text-muted-foreground">Technologies I work with</p>
        </div> */}
        
        {/* First row - normal direction */}
        <SkillsMarquee pauseOnHover className="[--duration:25s] mb-4">
          {skills.slice(0, 8).map((skill, index) => (
            <div
              key={`${skill.name}-1-${index}`}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-full border-2 border-border/20 bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 whitespace-nowrap mx-2",
                skill.color
              )}
            >
              <Image 
                src={skill.icon} 
                alt={skill.name} 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
              <span className="font-medium text-lg">{skill.name}</span>
            </div>
          ))}
        </SkillsMarquee>
        
        {/* Second row - reverse direction */}
        <SkillsMarquee reverse pauseOnHover className="[--duration:30s]">
          {skills.slice(8).map((skill, index) => (
            <div
              key={`${skill.name}-2-${index}`}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-full border-2 border-border/20 bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 whitespace-nowrap mx-2",
                skill.color
              )}
            >
              <Image 
                src={skill.icon} 
                alt={skill.name} 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
              <span className="font-medium text-lg">{skill.name}</span>
            </div>
          ))}
        </SkillsMarquee>
      </div>
    </section>
  );
}

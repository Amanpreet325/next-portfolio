import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

import { ProjectShowcaseGrid } from "@/components/project-showcase";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import MotionHero from "@/components/motion-hero";
import { SkillsMarqueeSection } from "@/components/skills-marquee";
import ScratchCardModal from "@/components/scratch-card-modal";
import ResumeDownloadButton from "@/components/resume-download-button";
import { ShareButtonDemo } from "@/components/share-button-demo";
import { CVDownloadButton } from "@/components/cv-download-button";
const BLUR_FADE_DELAY = 0.04;


export default function Page() {
  return (
    
    <main className="flex flex-col min-h-[80dvh] ">
      {/* CV Download Button - Fixed position */}
      <CVDownloadButton />
      
      {/* Scratch Card Modal */}
      <ScratchCardModal showDelay={5000} />
      
      <MotionHero />
      <SkillsMarqueeSection />
       <section id="projects">
        <div className="w-full">
          
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <ProjectShowcaseGrid 
              projects={DATA.projects} 
              
            />
          </BlurFade>
        </div>
      </section>
      <div className="space-y-6 py-8 max-w-6xl mx-auto w-full">
        {/* <section id="hero-content" className="space-y-8">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section> */}
      <section id="about">
        <div className="space-y-8 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get to know me
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-4xl mx-auto">
                  {DATA.summary}
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      {/* <section id="work">
        <div className="space-y-8 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Work Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Professional Journey
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here&apos;s where I&apos;ve applied my skills to create real-world impact and grow as a developer.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex min-h-0 flex-col gap-y-3">
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 7 + id * 0.05}
                >
                  <ResumeCard
                    key={work.company}
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${'end' in work && work.end ? work.end : 'Present'}`}
                    description={'description' in work && work.description ? work.description : undefined}
                  />
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
      </section> */}
      {/* <section id="education">
        <div className="space-y-8 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Education
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Academic Background
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My educational journey that laid the foundation for my technical expertise and problem-solving skills.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex min-h-0 flex-col gap-y-3">
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 9 + id * 0.05}
                >
                  <ResumeCard
                    key={education.school}
                    href={education.href}
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    period={`${education.start} - ${education.end}`}
                  />
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
      </section> */}
      <section id="skills">
        <div className="space-y-8 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Technical Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Technologies I work with
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive toolkit of modern technologies and frameworks that I use to build scalable applications.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex flex-wrap gap-2 justify-center">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
     
     
      </div>
      
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
              
              {/* Share Button */}
              <div className="mt-8">
                <ShareButtonDemo />
              </div>
              
              {/* Resume Download Button */}
              <div className="mt-6">
                <ResumeDownloadButton variant="primary" />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
   
    </main>
    
  );
}
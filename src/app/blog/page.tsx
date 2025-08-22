import BlurFade from "@/components/magicui/blur-fade";
import { Clock, Edit3, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="relative">
            <Clock className="w-16 h-16 mx-auto text-blue-500 mb-4" />
            <div className="absolute -top-2 -right-2">
              <Edit3 className="w-6 h-6 text-purple-500 animate-pulse" />
            </div>
          </div>
        </BlurFade>
        
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Coming Soon
          </h1>
        </BlurFade>
        
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m currently working on some exciting blog posts about software development, 
            tech insights, and my journey as a developer.
          </p>
        </BlurFade>
        
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span>Stay tuned for updates!</span>
          </div>
        </BlurFade>
        
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="pt-4">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200 dark:border-blue-800">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                📝 Content in progress...
              </span>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

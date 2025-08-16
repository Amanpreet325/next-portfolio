"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import "../app/globals.css";
import { HeroParallax } from "./ui/hero-parallax";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
 
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
 
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
 
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
export default function MotionHero() {
  return (
    <section className="relative w-full flex items-center justify-center">
      
      <div className="relative w-full h-[100vh] flex flex-col overflow-hidden">
        {/* HeroParallax as background */}
        <div className="absolute inset-0 z-0">
          <HeroParallax products={products} />
        </div>

        {/* Overlay to blend parallax with hero content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1]" />
        
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 from-blue-600/10 via-purple-600/10 to-green-500/10 animate-pulse opacity-50 z-[2]" />
 
        
        {/* Main content container */}
        <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-2 py-2 z-[10]">
          
          {/* Main headline with enhanced styling */}
          <div className="mb-1">
            <h1 className="text-5xl md:text-5xl lg:text-5xl font-light text-white leading-tight drop-shadow-2xl">
              Let&apos;s make it
            </h1>
            <h2 className="text-7xl md:text-7xl lg:text-7xl  shadows-into-light-regular italic underline text-green-400 leading-tight drop-shadow-2xl bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              APXiN.
            </h2>
          </div>

          {/* Retro PC setup with enhanced effects */}
          <div className="w-full max-w-4xl relative mb-1 z-[15]">
            {/* Custom gradient circle behind image */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 rounded-full"
              style={{
                aspectRatio: '1.3658536585365855 / 1',
                background: 'radial-gradient(50% 49.99999999999999% at 50% 49.99999999999999%, #fff, #d1ffc49c 24.285714285714285%, #02c28f7a 45%, #01473a73 74.64285714285714%, #00122900)',
                width: '500px',
                height: '300px',
                top: '15px',
                zIndex: -1
              }}
            />
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 via-transparent to-transparent blur-3xl scale-110 opacity-60" />
            <div className="relative z-[20]">
              <Image
                src="/qa1.png"
                alt="Retro PC setup with monitor displaying terminal code"
                width={600}
                height={750}
                className="object-cover drop-shadow-2xl mx-auto"
                priority
              />
            </div>
          </div>

          {/* Role descriptions */}
          

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="group relative px-9  py-3 group rounded-full border border-black/5  text-base text-white   dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ View My Work</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
             
            </button>
            <InteractiveHoverButton className="group relative px-9 py-4 rounded-full backdrop-blur-md bg-gradient-to-r from-green-500/80 to-emerald-500/80 border border-green-400/30 text-white font-medium transition-all duration-300 hover:scale-105 overflow-hidden shadow-lg">
Let&apos;s Connect
            </InteractiveHoverButton>
          </div>

          {/* Bottom description with enhanced styling */}
          <div className="max-w-3xl backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-white/10 relative">
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <h3 className="text-xl md:text-2xl font-semibold text-white/95 tracking-wide">
                Full-Stack Developer
              </h3>
              <span className="text-white/60">•</span>
              <h3 className="text-xl md:text-2xl font-semibold text-green-400">
                Product Designer
              </h3>
              <span className="text-white/60">•</span>
              <h3 className="text-xl md:text-2xl font-semibold text-white/95 tracking-wide">
                Creative Visionary
              </h3>
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute -top-2 -left-2 w-1 h-1 bg-green-400 rounded-full animate-ping" />
            <div className="absolute -top-1 -right-3 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-150" />
            <div className="absolute -bottom-2 -left-1 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-300" />
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-green-400/60 rounded-full animate-pulse" />
        <div className="absolute top-20 right-16 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-pulse delay-200" />
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-green-400/60 rounded-full animate-pulse delay-300" />
      </div>
    </section>
  );
}
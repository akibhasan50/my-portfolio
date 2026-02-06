"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Moon, Sun, ChevronDown, Phone, Download, Target, Zap, Heart, Brain } from "lucide-react"
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiAngular, SiJest, SiNodedotjs, SiDocker, SiJavascript, SiRedux, SiGraphql, SiHtml5, SiCss3, SiGit, SiMongodb, SiPython, SiSass } from "react-icons/si"
import { portfolioContent } from "@/lib/content"
import { useThemeContext } from "@/components/theme-context"

export function HeroSection() {
  const { hero } = portfolioContent
  const { theme, toggleTheme } = useThemeContext()
  const isDark = theme === "dark"

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const techStack = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Next.js", icon: SiNextdotjs, color: isDark ? "#FFFFFF" : "#000000" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="rounded-xl border-2 border-foreground bg-card text-foreground shadow-brutal-sm hover:shadow-brutal transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-white"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 rounded-2xl bg-primary/5 backdrop-blur-sm border border-primary/10 flex items-center justify-center animate-float font-mono font-bold text-primary">
          <SiTypescript className="w-8 h-8" />
        </div>
        <div className="absolute top-20 right-10 w-14 h-14 rounded-2xl bg-secondary/5 backdrop-blur-sm border border-secondary/10 flex items-center justify-center animate-float font-mono font-bold text-secondary" style={{ animationDelay: "1s" }}>
          <SiReact className="w-8 h-8" />
        </div>
        <div className="absolute bottom-20 left-10 w-20 h-20 rounded-2xl bg-accent/5 backdrop-blur-sm border border-accent/10 flex items-center justify-center animate-float font-mono font-bold text-accent" style={{ animationDelay: "2s" }}>
          <SiNextdotjs className="w-10 h-10" />
        </div>
        <div className="absolute bottom-10 right-10 w-12 h-12 rounded-2xl bg-primary/5 backdrop-blur-sm border border-primary/10 flex items-center justify-center animate-float font-mono font-bold text-primary" style={{ animationDelay: "1.5s" }}>
          <SiJavascript className="w-6 h-6" />
        </div>
        <div className="absolute top-1/2 left-4 w-14 h-14 rounded-2xl bg-secondary/5 backdrop-blur-sm border border-secondary/10 flex items-center justify-center animate-float font-mono font-bold text-secondary" style={{ animationDelay: "0.5s" }}>
          <SiTailwindcss className="w-8 h-8" />
        </div>
        <div className="absolute top-1/2 right-4 w-16 h-16 rounded-2xl bg-accent/5 backdrop-blur-sm border border-accent/10 flex items-center justify-center animate-float font-mono font-bold text-accent" style={{ animationDelay: "2.5s" }}>
          <SiAngular className="w-8 h-8" />
        </div>
        <div className="absolute top-32 right-[15%] w-12 h-12 rounded-2xl bg-primary/5 backdrop-blur-sm border border-primary/10 flex items-center justify-center animate-float font-mono font-bold text-primary" style={{ animationDelay: "3s" }}>
          <SiRedux className="w-6 h-6" />
        </div>
        <div className="absolute bottom-32 left-[15%] w-14 h-14 rounded-2xl bg-secondary/5 backdrop-blur-sm border border-secondary/10 flex items-center justify-center animate-float font-mono font-bold text-secondary" style={{ animationDelay: "1.2s" }}>
          <SiGraphql className="w-8 h-8" />
        </div>
        <div className="absolute bottom-[20%] right-[5%] w-16 h-16 rounded-2xl bg-accent/5 backdrop-blur-sm border border-accent/10 flex items-center justify-center animate-float font-mono font-bold text-accent" style={{ animationDelay: "0.8s" }}>
          <SiNodedotjs className="w-8 h-8" />
        </div>
        <div className="absolute top-[20%] left-[5%] w-12 h-12 rounded-2xl bg-primary/5 backdrop-blur-sm border border-primary/10 flex items-center justify-center animate-float font-mono font-bold text-primary" style={{ animationDelay: "2.2s" }}>
          <SiDocker className="w-6 h-6" />
        </div>
        <div className="absolute bottom-5 left-1/3 w-10 h-10 rounded-2xl bg-accent/5 backdrop-blur-sm border border-accent/10 flex items-center justify-center animate-float font-mono font-bold text-accent" style={{ animationDelay: "3.5s" }}>
          <SiHtml5 className="w-5 h-5" />
        </div>
        <div className="absolute top-5 right-1/3 w-12 h-12 rounded-2xl bg-secondary/5 backdrop-blur-sm border border-secondary/10 flex items-center justify-center animate-float font-mono font-bold text-secondary" style={{ animationDelay: "1.8s" }}>
          <SiCss3 className="w-6 h-6" />
        </div>
        <div className="absolute top-[40%] left-[10%] w-14 h-14 rounded-2xl bg-primary/5 backdrop-blur-sm border border-primary/10 flex items-center justify-center animate-float font-mono font-bold text-primary" style={{ animationDelay: "2.8s" }}>
          <SiGit className="w-8 h-8" />
        </div>
        <div className="absolute bottom-[40%] right-[10%] w-12 h-12 rounded-2xl bg-accent/5 backdrop-blur-sm border border-accent/10 flex items-center justify-center animate-float font-mono font-bold text-accent" style={{ animationDelay: "0.3s" }}>
          <SiMongodb className="w-6 h-6" />
        </div>
        <div className="absolute top-[15%] right-[20%] w-10 h-10 rounded-2xl bg-secondary/5 backdrop-blur-sm border border-secondary/10 flex items-center justify-center animate-float font-mono font-bold text-secondary" style={{ animationDelay: "1.5s" }}>
          <SiPython className="w-5 h-5" />
        </div>
        <div className="absolute bottom-[15%] left-[20%] w-12 h-12 rounded-2xl bg-primary/5 backdrop-blur-sm border border-primary/10 flex items-center justify-center animate-float font-mono font-bold text-primary" style={{ animationDelay: "3.2s" }}>
          <SiSass className="w-6 h-6" />
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left space-y-8 animate-fade-in-up">
            {/* Profile Image & Status Badge */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/5 dark:bg-white/5 backdrop-blur-md rounded-full border border-zinc-200/50 dark:border-white/10 shadow-sm transition-all hover:bg-zinc-900/10 dark:hover:bg-white/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  {hero.location}
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[0.9]">
                AKIB <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  HASAN
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-muted-foreground/80">
                {hero.title}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty border-l-4 border-primary/30 pl-6">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${hero.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {portfolioContent.ui.buttons.getInTouch}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full border-2 border-foreground/10 bg-background/50 hover:bg-background hover:border-foreground/20 font-bold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              >
                <a href="/Akib_Hasan_resume_frontend.pdf" download="Akib_Hasan_resume_frontend.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="relative group perspective-1000 w-full max-w-lg mx-auto lg:mx-0">
            {/* The Card */}
            <div className="relative bg-white/80 dark:bg-[#0F1115] border border-zinc-200 dark:border-white/5 rounded-[2rem] p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
              
              {/* Card Header: Connect */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-[1px] w-8 bg-zinc-200 dark:bg-zinc-800"></div>
                   <h3 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em]">Connect</h3>
                   <div className="flex-1 h-[1px] bg-zinc-200 dark:bg-zinc-800"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { href: hero.github, icon: Github, label: "GitHub" },
                    { href: hero.linkedin, icon: Linkedin, label: "LinkedIn" },
                    { href: `tel:${hero.phone}`, icon: Phone, label: "Phone" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aspect-square flex flex-col items-center justify-center gap-3 bg-zinc-50 dark:bg-[#18181B] border border-zinc-200 dark:border-white/5 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-300 hover:-translate-y-1 group/icon"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-zinc-400 dark:text-zinc-400 group-hover/icon:text-zinc-900 dark:group-hover/icon:text-white transition-colors duration-300" />
                      <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-500 group-hover/icon:text-zinc-700 dark:group-hover/icon:text-zinc-300">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Card Body: Tech Stack */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-[1px] w-8 bg-zinc-200 dark:bg-zinc-800"></div>
                   <h3 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em]">Tech Arsenal</h3>
                   <div className="flex-1 h-[1px] bg-zinc-200 dark:bg-zinc-800"></div>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="aspect-square flex flex-col items-center justify-center p-2 rounded-2xl bg-zinc-50 dark:bg-[#18181B] border border-zinc-200 dark:border-white/5 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-300 hover:scale-105 cursor-help relative group/tech"
                      title={tech.name}
                    >
                      <span className="text-2xl transition-transform duration-300 group-hover/tech:scale-110" style={{ color: tech.color }}>
                        <tech.icon />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  )
}

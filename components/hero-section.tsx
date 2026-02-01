"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Moon, Sun, ChevronDown, Phone, Download } from "lucide-react"
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
        <div className="absolute top-10 left-10 w-16 h-16 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center animate-float font-mono font-bold text-primary">
          <SiTypescript className="w-8 h-8" />
        </div>
        <div className="absolute top-20 right-10 w-14 h-14 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-secondary/30 flex items-center justify-center animate-float font-mono font-bold text-secondary" style={{ animationDelay: "1s" }}>
          <SiReact className="w-8 h-8" />
        </div>
        <div className="absolute bottom-20 left-10 w-20 h-20 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-accent/30 flex items-center justify-center animate-float font-mono font-bold text-accent" style={{ animationDelay: "2s" }}>
          <SiNextdotjs className="w-10 h-10" />
        </div>
        <div className="absolute bottom-10 right-10 w-12 h-12 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center animate-float font-mono font-bold text-primary" style={{ animationDelay: "1.5s" }}>
          <SiJavascript className="w-6 h-6" />
        </div>
        <div className="absolute top-1/2 left-4 w-14 h-14 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-secondary/30 flex items-center justify-center animate-float font-mono font-bold text-secondary" style={{ animationDelay: "0.5s" }}>
          <SiTailwindcss className="w-8 h-8" />
        </div>
        <div className="absolute top-1/2 right-4 w-16 h-16 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-accent/30 flex items-center justify-center animate-float font-mono font-bold text-accent" style={{ animationDelay: "2.5s" }}>
          <SiAngular className="w-8 h-8" />
        </div>
        <div className="absolute top-32 right-[15%] w-12 h-12 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center animate-float font-mono font-bold text-primary" style={{ animationDelay: "3s" }}>
          <SiRedux className="w-6 h-6" />
        </div>
        <div className="absolute bottom-32 left-[15%] w-14 h-14 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-secondary/30 flex items-center justify-center animate-float font-mono font-bold text-secondary" style={{ animationDelay: "1.2s" }}>
          <SiGraphql className="w-8 h-8" />
        </div>
        <div className="absolute bottom-[20%] right-[5%] w-16 h-16 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-accent/30 flex items-center justify-center animate-float font-mono font-bold text-accent" style={{ animationDelay: "0.8s" }}>
          <SiNodedotjs className="w-8 h-8" />
        </div>
        <div className="absolute top-[20%] left-[5%] w-12 h-12 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center animate-float font-mono font-bold text-primary" style={{ animationDelay: "2.2s" }}>
          <SiDocker className="w-6 h-6" />
        </div>
        <div className="absolute bottom-5 left-1/3 w-10 h-10 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-accent/30 flex items-center justify-center animate-float font-mono font-bold text-accent" style={{ animationDelay: "3.5s" }}>
          <SiHtml5 className="w-5 h-5" />
        </div>
        <div className="absolute top-5 right-1/3 w-12 h-12 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-secondary/30 flex items-center justify-center animate-float font-mono font-bold text-secondary" style={{ animationDelay: "1.8s" }}>
          <SiCss3 className="w-6 h-6" />
        </div>
        <div className="absolute top-[40%] left-[10%] w-14 h-14 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center animate-float font-mono font-bold text-primary" style={{ animationDelay: "2.8s" }}>
          <SiGit className="w-8 h-8" />
        </div>
        <div className="absolute bottom-[40%] right-[10%] w-12 h-12 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-accent/30 flex items-center justify-center animate-float font-mono font-bold text-accent" style={{ animationDelay: "0.3s" }}>
          <SiMongodb className="w-6 h-6" />
        </div>
        <div className="absolute top-[15%] right-[20%] w-10 h-10 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-secondary/30 flex items-center justify-center animate-float font-mono font-bold text-secondary" style={{ animationDelay: "1.5s" }}>
          <SiPython className="w-5 h-5" />
        </div>
        <div className="absolute bottom-[15%] left-[20%] w-12 h-12 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center animate-float font-mono font-bold text-primary" style={{ animationDelay: "3.2s" }}>
          <SiSass className="w-6 h-6" />
        </div>
      </div>

      <Card className="max-w-5xl w-full p-8 md:p-16 rounded-2xl shadow-brutal border-2 border-foreground bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-secondary rounded-tr-3xl" />

        <div className="relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Location Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-muted rounded-xl text-muted-foreground font-medium mb-6 border-2 border-foreground shadow-brutal-sm">
              <MapPin className="w-4 h-4 mr-2" />
              {hero.location}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight text-balance">
              {hero.name}
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-primary">
              {hero.title}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl text-pretty">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 font-bold shadow-brutal border-2 border-foreground transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl"
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
                className="rounded-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 font-bold shadow-brutal border-2 border-foreground transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl"
              >
                <a href="/Akib_Hasan_resume_frontend.pdf" download="Akib_Hasan_resume_frontend.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center mb-12">
              <a
                href={hero.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-xl border-2 border-foreground shadow-brutal-sm transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal hover:border-primary group"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href={hero.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-xl border-2 border-foreground shadow-brutal-sm transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal hover:border-primary group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href={`tel:${hero.phone}`}
                className="p-3 bg-card rounded-xl border-2 border-foreground shadow-brutal-sm transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal hover:border-primary group"
                aria-label="Phone Number"
              >
                <Phone className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>

            {/* Tech Stack Showcase */}
            <div className="w-full max-w-3xl">
              <p className="text-sm font-semibold text-muted-foreground mb-4 text-center">CORE TECH STACK</p>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative px-4 py-2 bg-muted/50 rounded-lg border border-border hover:border-primary transition-all duration-200 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold" style={{ color: tech.color }}>
                        <tech.icon className="w-5 h-5" />
                      </span>
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="mt-12 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  )
}

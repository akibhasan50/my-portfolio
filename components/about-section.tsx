"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Target, Zap, Heart, Brain } from "lucide-react"
import { portfolioContent } from "@/lib/content"

export function AboutSection() {
  const { about } = portfolioContent

  const statIcons = [Target, Zap, Heart, Brain]

  return (
    <section id="about" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-xl rotate-12 animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-xl -rotate-12 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg text-sm mb-4">
                {about.title}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                Crafting Digital <span className="text-primary">Experiences</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {about.description}
              </p>
            </div>

            <div className="space-y-4">
              {about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed pt-1">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats Card */}
          <div className="relative group perspective-1000 w-full max-w-lg mx-auto lg:mx-0">
            {/* The Grid Card */}
            <div className="relative bg-white/80 dark:bg-[#0F1115] border border-zinc-200 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                {about.stats.map((stat, index) => {
                  const Icon = statIcons[index]
                  return (
                    <div 
                      key={index} 
                      className="aspect-square bg-zinc-50 dark:bg-[#08090C] rounded-2xl p-6 flex flex-col justify-center items-start border border-zinc-200 dark:border-white/5 hover:border-blue-500/30 transition-colors group/stat"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover/stat:bg-blue-500/20 transition-colors">
                        <Icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">{stat.value}</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{stat.label}</p>
                    </div>
                  )
                })}
              </div>
              
              {/* Outer Glow */}
              <div className="absolute inset-0 border border-zinc-200 dark:border-white/5 rounded-[2rem] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
